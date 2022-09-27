import React,{useState}from "react";
import { View,Text,StyleSheet,Button} from "react-native";
import Colourblock from "./colourblock";

const Newcolour=()=>{
    const [red,setred]=useState(0);
    const [blue,setblue]=useState(0);
    const [green,setgreen]=useState(0);
    return(
        <View>
           <View>
           <Colourblock colourval={red} setcolour={setred} colour='Red'/>
            <Colourblock colourval={green} setcolour={setgreen} colour='Green'/>
            <Colourblock colourval={blue} setcolour={setblue} colour='Blue'/>
           </View>
           <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    )
}


const style=StyleSheet.create({
    style1:{
        fontSize:20
    }
})


export default Newcolour;