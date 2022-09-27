import React from "react";
import { View,Text,StyleSheet } from "react-native";
import Imagelist from "./Imagelist";

const Imagescreen=()=>{
    return(
        <View>
            <Imagelist score={1} title='Forest' imagesource={require('../../assets/forest.jpg')}/>
            <Imagelist score={2} title='Beach' imagesource={require('../../assets/beach.jpg')}/>
            <Imagelist score={4} title='Mountain' imagesource={require('../../assets/mountain.jpg')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    Style1:{
        fontSize:20
    }
})


export default Imagescreen;