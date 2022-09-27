import React from "react";
import { combineReducers } from "redux";

const Myreducer=(state=0,action)=>{
    if(action.type==='My'){

        return state+1
    }
    return state
    
}
export default combineReducers({
    mystate:Myreducer
})



export const myaction=()=>{
    return{
        type:'My'
    }
}