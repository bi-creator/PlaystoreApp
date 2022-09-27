import React,{useEffect,useState} from "react";
import { View,Text,Button,StyleSheet, ScrollView, FlatList } from "react-native";
import Singleprod from "../screens/singleproduct";
import Api from "../Api/Api";



const Mainpropage=({navigation})=>{
    const [alldata,setalldata]=useState([])
    useEffect(()=>{
        
     const Homecall=async()=>{

         const responce=await Api.get(`/products?limit=24`)
         setalldata(responce.data)

         
     }
     Homecall();
 

    },[])
    const renderprod=((prod)=>{
        return(
            <Singleprod navigation={navigation} title={prod.item.title} price={prod.item.price} sourceimage={prod.item.image}/>
        )
    })
    return(
        <FlatList numColumns={2} keyExtractor={(prod)=>{prod.id}} data={alldata} renderItem={renderprod} style={style.style1}/>
    )
}

const style=StyleSheet.create({
    style1:{
        // flex:1,
        // marginHorizontal:3,
        
        // padding:5,
        // borderWidth:3,
        // borderColor:'black',
        // borderRadius:5
        
        
    }
})

export default Mainpropage;