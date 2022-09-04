
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


const History = () => {
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
    const [Notification,setNotification]=useState(NOTE);
    const renderItem =({item,index})=>(
        <TouchableOpacity
        style={{
            
            margin:SIZES.padding,
            width:300,
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
        <View style={styles.container}>
            <View 
            style={{
                justifyContent:'center',
                alignItems:'center',
                width:'100%'
            }}
            >
            <Text
                    style={{
                        margin:SIZES.padding,
                        color:COLORS.primary,
                        ...FONTS.h2,

                    }}
                    >Transaction History</Text>
        
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

export default History;