import React,{useReducer} from "react";
import {View ,Text,Button,StyleSheet} from 'react-native';

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return{...state,count:state.count+action.payload}
        case 'decrement':
            return{...state,count:state.count-action.payload}
        default :
            return state;

    }

}

const Counter=()=>{
    const [state,dispatch]=useReducer(reducer,{count:0})
    return(
        <View style={style.style1}>
            <Text >Current count={state.count}</Text>
            <Button title="Click to increament" onPress={()=>{dispatch({type:'increment',payload:1})}}/>
            <Button title="Click to deccreament" onPress={()=>{dispatch({type:'decrement',payload:1})}}/>
        </View>
    )
}

const style=StyleSheet.create({
    style1:{
        fontSize:20
    }
})


export default Counter;