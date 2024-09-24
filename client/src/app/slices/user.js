import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:3000/user";
// const baseURL = "https://zfsfxh4s-3000.inc1.devtunnels.ms/user";

const initialState = {
  user: undefined,
  allUsers: [],
  friends: [],
  friendRequests: [],
  sentRequests: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateFriends: (state, action) => {
      state.friends = action.payload.friends;
    },
    updateUserList: (state, action) => {
      state.allUsers = action.payload.users;
    },
    updateRequestsList: (state, action) => {
      state.friendRequests = action.payload.requests;
    },
    updateSentRequestList: (state, action) => {
      state.sentRequests = action.payload.requests;
    },
  },
});

export const { updateFriends, updateRequestsList, updateUserList } =
  userSlice.actions;

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async (_, { getState, dispatch }) => {
    try {
      const res = await fetch(baseURL + "/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      const data = await res.json();
      dispatch(userSlice.actions.updateUserList({ users: data.data }));
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAllFriendRequests = createAsyncThunk(
  "user/fetchAllFriendRequests",
  async (_, { getState, dispatch }) => {
    try {
      const res = await fetch(baseURL + "/get-friend-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      const data = await res.json();
      dispatch(userSlice.actions.updateRequestsList({ requests: data.data }));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAllFriends = createAsyncThunk(
  "user/fetchAllFriends",
  async (_, { getState, dispatch }) => {
    try {
      const res = await fetch(baseURL + "/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      const data = await res.json();
      dispatch(userSlice.actions.updateFriends({ friends: data.data }));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAllSentRequests = createAsyncThunk(
  "user/fetchAllSentRequests",
  async (_, { getState, dispatch }) => {
    try {
      const res = await fetch(baseURL + "/get-sent-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      const data = await res.json();
      dispatch(
        userSlice.actions.updateSentRequestList({ requests: data.data })
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

export default userSlice.reducer;
