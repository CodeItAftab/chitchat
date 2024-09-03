import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMainBox: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showMainBox: (state, action) => {
      state.showMainBox = action.payload;
    },
  },
});

export const { showMainBox } = appSlice.actions;

export default appSlice.reducer;
