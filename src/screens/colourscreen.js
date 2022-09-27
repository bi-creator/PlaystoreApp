import React,{useState} from "react";
import { View,Text,Button,StyleSheet,FlatList } from "react-native";



const Randcolour=()=>{
    const [Colours,setcolour]=useState([])
    return(
        <View style={style.style1}>
            <Button onPress={()=>{setcolour([...Colours,randrgb()])}} title="Add Random Colour"/>
            <FlatList data={Colours} 
              keyExtractor={item=>item} 
              renderItem={({item})=>{
                return (
                <View style={{height:100 ,width:100,backgroundColor:item}}/>)
                }}/>
        </View>
    )
}

const randrgb=()=>{
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    
    return `rgb(${red},${green},${blue})`;
}
const style=StyleSheet.create({
    style1:{
        fontSize:20
    }
})


export default Randcolour;