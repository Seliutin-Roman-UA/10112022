import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reduser";

export const stor = configureStore({reducer, preloadedState: { counter: 100, pace: 10 }})
console.log(stor);