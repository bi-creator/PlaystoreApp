import React from "react";
import {Text,StyleSheet,View,Button} from 'react-native';


const Compscreen=({navigation,route})=>{
    const name='Manjith'
    // const {nam}=route.params
    // console.log(props)
    return(
        <View style = {{flex: 1, backgroundColor: "#ffffff" }}>
            <Text style={style.textstyle1}> this is component screen</Text>
            <Text  style={style.textstyle2}> {name}</Text>
            <Text  style={style.textstyle2}> {route.params.nam}</Text>
            <Button onPress={()=>{navigation.navigate('Home',{fr:'from ComponentScreen'})}} title='Go to Home'/>
        </View>
    )
}

const style=StyleSheet.create({
    textstyle1:{
        fontSize:45,
    },
    textstyle2:{
        fontSize:20
    }
})


export default Compscreen;