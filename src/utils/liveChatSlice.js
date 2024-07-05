import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [
            { name: "Sameer Dangi", comment: "Hi" }
        ],
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length >= 10) {
                state.messages.shift(); // Remove the oldest message
            }
            state.messages.push(action.payload);
        }
    }
});

export default LiveChatSlice.reducer;
export const { addMessage } = LiveChatSlice.actions;
