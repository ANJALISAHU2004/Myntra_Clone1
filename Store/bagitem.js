import { createSlice } from "@reduxjs/toolkit";
import { default_items } from "./list";

const bagSlice=createSlice({
  name:"bagitems",
  initialState:[],
  reducers:{
    deleteItem(state,action){
    const DeletetItem=(item)=>{
     if(item.id==action.payload) return false;
     return true;
    }
    state=state.filter(DeletetItem)
     return state;
    },
    AddItem(state,action){
  
      default_items.map(item=>{
        if(item.id==action.payload)
        {
        if(!state.includes(item))
         {console.log(state.includes(item));
          state.push(item)}
        }
      })
      return state;
      }
    }
})
export const bagActions= bagSlice.actions;
export default bagSlice;
