import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,Image} from "react-native";


const Singleprod=({title,price,sourceimage,navigation})=>{
    console.log(String(sourceimage))
    return(
        <View  style={style.container}>
            <Text  >
                Name:{title}
               
                
            </Text>
            <Image   style={{flex:1}} source={{uri: sourceimage}} />
            <Text onStartShouldSetResponder={()=>{navigation.navigate('Home')}}>price:{price}</Text>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flexDirection:"column",
        flex:2,
        // marginHorizontal: "auto",
        // width: 20,
        padding: 3,
        height:200,
        shadowOffset: { height: 3, width: 3 }, 
        // shadowColor: '#000000',
        // shadowOpacity: 0.5,
        // shadowRadius: 5,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        margin:1
        
    },
    row: {
        flexDirection: "row"
      },
})

export default Singleprod;