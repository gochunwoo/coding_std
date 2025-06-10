import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  weight: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setWeight(state, action) {
      state.weight = action.payload;
    },
  },
});

export const { setUsername, setWeight } = userSlice.actions;
export default userSlice.reducer;
