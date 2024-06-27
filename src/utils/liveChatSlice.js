import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[
            {name:"sameer Dangi",
                comment:"hii"
            }
        ],
    },
    reducers:{
        addMessage:(state,action)=>{
         state.messages.push(action.payload)
        }
    }
})

export default LiveChatSlice.reducer;
export const{addMessage}=LiveChatSlice.actions;