import React from "react";
import { View,Text,StyleSheet} from "react-native";


const Header=()=>{
    return(
        <View style={Style.header}>
            <Text>
                Header
            </Text>
        </View>
    )
}
const Style=StyleSheet.create({
    header:{
        height:50,
        // flex:1,
        flexDirection:"column",
        backgroundColor:"lightblue"
    }
})

export default Header;