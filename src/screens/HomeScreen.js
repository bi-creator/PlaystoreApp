import { useNavigation } from '@react-navigation/native';
import React,{useEffect, useLayoutEffect} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity} from 'react-native';
import Header from '../SideComponents/Header';
import { connect } from 'react-redux';
import { myaction } from '../redux/store';
import * as Notifications from 'expo-notifications';
const HomeScreen = ({navigation,route,man,myaction}) => {
  useEffect(()=>{
    registerForPushNotificationsAsync();
  },[])
  async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    return token;
}
  return (
    <View style={[styles.Box]}>
      {/* <Header/> */}
      <Text  style={{alignSelf:"center",paddingTop:5}} >Hello World</Text>
      {/* <Text style={styles.text}>{route.params.fr===undefined?null:route.params.fr}</Text> */}
      <Button onPress={()=>{navigation.navigate('Comp',{nam:'From HomeScreen'})}} title='Go to Components'/>
      <Button onPress={()=>{navigation.navigate('List')}} title='Go to lists'/>
      <Button onPress={()=>{navigation.navigate('Img')}} title='Go to Images Page'/>
      <Button onPress={()=>{navigation.navigate('Count')}} title='Go to Counter Page'/>
      <Button onPress={()=>{navigation.navigate('randcolour')}} title='Go to Colour Page'/>
      <Button onPress={()=>{navigation.navigate('newcolour')}} title='Generate new colour'/>
      <Button onPress={()=>{navigation.navigate('productpage')}} title='products page'/>
      <Button onPress={()=>{navigation.navigate('textpage')}} title='Test text input'/>
      <Button title='Using Reducer' onPress={()=>{myaction()}}/>
      <Text style={{alignSelf:"center",paddingTop:5}}>changed by reducer {man}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  Box: {
    margin:15,
    borderColor:'black',
    borderWidth:1,
    borderRadius:50,
    flex:1
  },
  shadow:{
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  }
});

const mapstatetoprops=(state)=>{
  return {man:state.mystate}
}

export default connect(mapstatetoprops,{myaction})(HomeScreen);
