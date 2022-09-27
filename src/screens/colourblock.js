import React from "react";
import { View,Text,StyleSheet,Button} from "react-native";
const COLOUE_CHANGEVALUE=10

const Colourblock=({colour,colourval,setcolour})=>{
    return(
        <View>
            <Text>{colour}</Text>
            <View>
                <Button onPress={()=>{
                    if(colourval+COLOUE_CHANGEVALUE>255){
                        return
                    }
                    setcolour(colourval+COLOUE_CHANGEVALUE)}
                } 
                    title={`Add More ${colour}`}/>
                <Button onPress={()=>{
                    if(colourval-COLOUE_CHANGEVALUE<0){
                        return
                    }
                    setcolour(colourval-COLOUE_CHANGEVALUE)}
                    } title={`Remove More ${colour}`}/>
            </View>
        </View>
    )
}


const style=StyleSheet.create({
    style1:{
        fontSize:20
    }
})


export default Colourblock;