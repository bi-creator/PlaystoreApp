import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";


const Imagelist=({title,imagesource,score})=>{
    return(
        <View>
            <Image source={imagesource} />
            <Text>{title}</Text>
            <Text>Image Score-{score}</Text>
        </View>
    )
}


const style=StyleSheet.create({
    style1:{
        fontSize:20
    }
})

export default Imagelist;