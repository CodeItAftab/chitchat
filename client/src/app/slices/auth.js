import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: undefined,
  email: undefined,
  userId: undefined,
};

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://zfsfxh4s-3000.inc1.devtunnels.ms";

export const loginUser = createAsyncThunk(
  "/auth/loginUser",
  async (formData) => {
    try {
      const res = await fetch(baseUrl + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const registerUser = createAsyncThunk(
  "/auth/registerUser",
  async (formData) => {
    try {
      const res = await fetch(baseUrl + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });
      localStorage.setItem("email", formData.email);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "/auth/verifyOtp",
  async (formData) => {
    try {
      const res = await fetch(baseUrl + "/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: formData.otp }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const resetPassword = createAsyncThunk(
  "/auth/resetPassword",
  async (formData) => {
    try {
      const res = await fetch(baseUrl + "/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const setNewPassword = createAsyncThunk(
  "/auth/setNewPassword",
  async (data) => {
    try {
      const res = await fetch(baseUrl + "/auth/reset-password/" + data.token, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: data.password }),
      });
      const response = await res.json();
      return response;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = undefined;
      state.email = undefined;
      state.userId = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
