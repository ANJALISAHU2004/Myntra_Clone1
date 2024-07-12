import { createSlice } from "@reduxjs/toolkit";
import { default_items } from "./list"; 
const itemSlice=createSlice({
  name:"items",
  initialState:default_items,
  reducers:{
   AddItem(store,action){
  return store;
 }
  }
})
export const itemsActions=itemSlice.actions;
console.log(itemsActions);
export default itemSlice;