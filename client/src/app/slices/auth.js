import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: undefined,
  token_expiry_date: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {} = authSlice.actions;

export default authSlice.reducer;
