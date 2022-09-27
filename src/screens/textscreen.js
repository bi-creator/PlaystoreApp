import React,{useState}from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";


const Textscreen=()=>{
    const [text,settext]=useState('')
    return(
        <View>
            <Text>Enter Password</Text>
            <TextInput value={text} onChangeText={(newtext)=>settext(newtext)} autoCapitalize="none" autoCorrect={false} style={style.input}/>
            {/* <Text>Test you entered {text}</Text> */}
            {text.length>=5?null:<Text>Must have atleast 5 characters</Text>}

        </View>
    )
}

const style=StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1,
        
    }
})

export default Textscreen;