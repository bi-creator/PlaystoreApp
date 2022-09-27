import React from "react";
import { View,Text,StyleSheet,FlatList} from "react-native";


const Listscreen=()=>{
    const list=[
        {name:'name1', age:10},
        {name:'name2',age:20},
        {name:'name3',age:30},
        {name:'name4',age:40},
        {name:'name5',age:50},
        {name:'name6',age:60},
        {name:'name7',age:70},
        {name:'name8',age:80},
        {name:'name9',age:90},
        {name:'name10',age:100}
    ]
    return(
        
            <FlatList  keyExtractor={(friend)=>friend.name} data={list} renderItem={({item})=>{return(<Text style={style.Listscreen}>Name-{item.name},Age-{item.age}</Text>)}}/>
        
    )
}


const style=StyleSheet.create({
    Listscreen:{
       
        marginVertical:10
    }
})


export default Listscreen;