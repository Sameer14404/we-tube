import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import liveChatSlice from "./liveChatSlice";
import filterSlice from "./filterSlice";



const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:liveChatSlice,
        filter:filterSlice,
 
    }
});
export default store;