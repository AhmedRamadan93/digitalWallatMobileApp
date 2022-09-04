//import sizes from 'native-base/lib/typescript/theme/base/sizes';
import React,{ useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
} from 'react-native';
import {  COLORS, FONTS, icons, images, SIZES } from "../constants"

const Home = () => {
  const  NOTE= [
        {
            id: 1,
            description: "note1",
            
        },
        {
            id: 2,
            description: "note2",
            
        },
        {
            id: 3,
            description: "note3",
            
        },
        {
            id: 4,
            description: "note4",
            
        },
        {
            id: 5,
            description: "note4",
            
        },
        {
            id: 6,
            description: "note4",
            
        },
        {
            id: 7,
            description: "note4",
            
        },
        {
            id: 8,
            description: "note4",
            
        },
        
    
    ]
    const [userName,setUserName]= useState('Ahmed Ramadan');
    const [balance,setbalance]= useState(10000);
    const [balanceVisability,setbalanceVisability]= useState(true);
    const [Notification,setNotification]=useState(NOTE);
    const renderItem =({item,index})=>(
        <TouchableOpacity
        style={{
            
            margin:SIZES.padding,
            paddingHorizontal:SIZES.padding,
            paddingVertical:SIZES.padding,
            marginTop:index==0?SIZES.padding:0,
            marginBottom:SIZES.padding,
            borderRadius:10,
            backgroundColor:COLORS.white,
        }}
        >
            <View
            style={{flexDirection:'row'}}>
                <Text style={{
                            color:COLORS.primary,
                            ...FONTS.h2,
                            
                        }} >{item.description}</Text>
            </View>

        </TouchableOpacity>
    )

    return (
        <View
            style={{
                flex: 1,
                paddingBottom: 130,
                top:-50,
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: 290,
                    ...styles.shadow,
                }}
            >
                <ImageBackground
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}
                >
                    {/* header section */}
                    <View
                    style={{
                        marginTop :SIZES.padding,
                        width:"100%",
                        alignItems:'flex-end',
                       
                        paddingHorizontal:SIZES.padding,
                    }}
                    >
                        <TouchableOpacity 
                        style={{
                            width:50,
                            height:50,
                            justifyContent:'center',
                            alignItems:'center',

                        }}
                        onPress={()=>console.log('exit')}
                        >
                            <Image
                            source={icons.exit_icon}
                            resizeMode="contain"
                            style={{flex:1}}
                            />

                        </TouchableOpacity>
                    </View>
                    
                    {/* information section */}
                    <View
                    style={{
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                    >
                        <Text style={{
                            color:COLORS.white,
                            ...FONTS.h3
                        }}>
                            WelCome Back
                        </Text>
                        <Text style={{
                            color:COLORS.white,
                            ...FONTS.h1,
                            marginTop:SIZES.base,
                        }} >
                            {userName}
                        </Text>
                        
                        {balanceVisability?<Text style={{
                            color:COLORS.white,
                            ...FONTS.h2,
                            marginTop:SIZES.base,
                        }} >
                            your Balance = {balance} le
                        </Text>:<></>}

                    </View>
                    <View
                    style={{
                        marginTop :SIZES.padding*2,
                        width:"100%",
                        alignItems:'flex-end',
                       
                        paddingHorizontal:SIZES.padding,
                    }}
                    >
                        
                        <TouchableOpacity 
                        style={{
                            width:50,
                            height:50,
                            justifyContent:'center',
                            alignItems:'center',

                        }}
                        onPress={()=>setbalanceVisability(!balanceVisability)}
                        >
                            <Image
                            source={balanceVisability? icons.hide_icon:icons.show_icon}
                            resizeMode="contain"
                            style={{flex:1}}
                            />

                        </TouchableOpacity>
                        
                       
                        

                    </View>

                </ImageBackground>
                {/* notifications */}

                

                    

                
            </View>
            <View>
            <Text
                    style={{
                        marginLeft:SIZES.padding,
                        color:COLORS.primary,
                        ...FONTS.h2,

                    }}
                    >Notifications</Text>
        
             <ScrollView>
                    <View
                
                >
                    
                    
                    <FlatList
                    contentContainerStyle={{
                        marginTop:SIZES.base,
                        
                    }}
                    data={Notification}
                    renderItem={renderItem}
                    keyExtractor={item=>'${item.id}'}
                    showsVerticalScrollIndicator={false}
                    />
                    </View>
                    </ScrollView> 
                    </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;