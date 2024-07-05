import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    Params: ""
  },
  reducers: {
    FilterParams: (state, action) => {
      state.Params = action.payload;
    }
  }
});

export const { FilterParams } = filterSlice.actions;
export default filterSlice.reducer;
