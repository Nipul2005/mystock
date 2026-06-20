import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isAuthenticated: false,
    loading: true,
  },

  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },

    finishLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { setCredentials, logout, finishLoading } = auth.actions;

export default auth.reducer;
