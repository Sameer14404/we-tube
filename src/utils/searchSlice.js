import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cache:(state,action)=>{
            Object.assign(state,action.payload)
        }
    }
})

export default SearchSlice.reducer;
export const {cache} = SearchSlice.actions;