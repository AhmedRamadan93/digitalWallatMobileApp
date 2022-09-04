import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { COLORS, FONTS, icons, images, SIZES } from "../constants"
import * as LocalAuthentication from 'expo-local-authentication'
import QRCode from 'react-native-qrcode-svg';

const Transaction = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [scannedData, setScannedData] = useState(null);
    const [activeScan, setActiveScan] = useState(false);
    const [activeGenerate, setActiveGenerate] = useState(false);
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const [isUserAuth, setIsUserAuth] = useState(false);
    const [sendMoney, setSendMoney] = useState(0);
    const [balance, setbalance] = useState(10000);
    const [showQrCode, setShowQrCode] = useState(false);
    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    });
    const handleBiometricAuth = async () => {
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics)
            return Alert.alert(
                'Biometric record not found',
                'Please verify your identity with your password',
                'OK',
                () => fallBackToDefaultAuth()
            );
    }
    function onAuthenticate() {
        const auth = LocalAuthentication.authenticateAsync({
            promptMessage: 'Authenticate With Biometrics',
            fallbackLabel: 'Enter Password',


        });
        auth.then(result => {
            setIsUserAuth(result.success);
            console.log(result);
        }
        );
    }
    const generateMoney = () => {
        if (sendMoney <= 0) {
            setShowQrCode(false)
            Alert.alert(
                "No Value Entered",
                "Please enter value bigger that 0 to generate QRcode",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        } else if (sendMoney > balance) {
            setShowQrCode(false)
            Alert.alert(
                "Value exceed your Balance",
                "the Requsted Money is bigger than your Balance",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );

        } else if (sendMoney < balance) {
            LocalAuthentication.authenticateAsync().then(() => {
                setShowQrCode(true)
            
            })



        }

    }


    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        if (data > 0) {
            setScanned(true);
            setScannedData(data);
            setbalance(balance + data);
            alert(`you recievied ${scannedData} eg. successfully `);
        }
        else {
            setScanned(false);
            alert(`invalid qr code`);
        }


    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                paddingBottom: 130,
            }}>
            {/* recieve button */}
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    width: '100%',
                    height: '10%',
                    marginTop: SIZES.padding,
                    borderRadius: 10,

                }}
                onPress={() => setActiveScan(!activeScan)}
            >
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    {activeScan ? <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        margin: SIZES.base,

                    }} >Exit Scan</Text> : <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        margin: SIZES.base,

                    }} >Recieve Money</Text>}
                    <Image
                        source={icons.scan_icon}
                        resizeMode="contain"

                        style={{ width: 40, height: 40, margin: SIZES.base, }}
                    />


                </View>

            </TouchableOpacity>
            {/* send button */}
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.primary,
                    width: '100%',
                    height: '10%',
                    marginTop: SIZES.padding,
                    borderRadius: 10,

                }}
                onPress={() => {setActiveGenerate(!activeGenerate);
                    setShowQrCode(false)
                }}
            >
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    {activeGenerate ? <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        margin: SIZES.base,

                    }} >Exit Sending</Text> : <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2,
                        margin: SIZES.base,

                    }} >Send Money</Text>}
                    <Image
                        source={icons.sendMoney_icon}
                        resizeMode="contain"

                        style={{ width: 40, height: 40, margin: SIZES.base, }}
                    />


                </View>

            </TouchableOpacity>
            {/* scanner */}
            {activeScan ? <View style={{ width: '100%', height: '75%', marginTop: SIZES.padding, }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View> : <></>}
            {/* code generator */}
            {activeGenerate?
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
                <TextInput
                    style={{
                        borderColor: COLORS.secondary,
                        borderWidth: 2,
                        borderRadius: 10,
                        padding: SIZES.base,
                        width: '80%',

                    }}
                    placeholder='enter the amount of money'
                    keyboardType="numeric"
                    onChangeText={setSendMoney}
                    value={sendMoney}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.green,
                        height: 50,
                        marginTop: SIZES.base,
                        borderRadius: 10,

                    }}
                    onPress={generateMoney}
                >
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{
                            color: COLORS.white,
                            ...FONTS.h2,
                            margin: SIZES.base,

                        }} >Generate QR Code</Text>



                    </View>

                </TouchableOpacity>
                {
                    showQrCode?<View style={{ width: '100%', height: '70%',  alignItems: 'center', justifyContent: 'center', }}>
                        <QRCode
                    value={sendMoney}
                    size={250}
                    
                /></View>:<></>

                }
                
                   
                        
                    
                    


               
            </View>
            :<></>}




        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
export default Transaction;
