import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    addNumber: (state, action) => {
      state.number += action.payload;
    },
  },
});

export const { addNumber } = counterSlice.actions;
export default counterSlice.reducer;
