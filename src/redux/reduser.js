import { combineReducers } from "@reduxjs/toolkit";

function reducerCounter(state=0, action) {
    
  switch (action.type) {
    case '+':
      
      return state + action.payload;
    case '-':
      return state - action.payload;
    default:
      return state;
  }
}

function reducerPace(state=1, action) {
    if (action.type === "pace") return action.payload;
    return state;

}
export const reducer = combineReducers({
  counter: reducerCounter,
  pace: reducerPace,
});