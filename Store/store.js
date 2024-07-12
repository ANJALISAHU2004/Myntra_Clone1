import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemList";
import bagSlice from "./bagitem";

const myntraStore=configureStore({reducer:{
  items:itemSlice.reducer,
  bagItems:bagSlice.reducer,
}})
export default myntraStore;