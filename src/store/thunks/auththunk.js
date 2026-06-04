import { createAsyncThunk } from "@reduxjs/toolkit";
import BizSphere from "../../utils/BizSphere";


export const signupUser = createAsyncThunk(
  "auth/signup",
  async (formData, thunkAPI) => {
    try {
      const response = await BizSphere.post("/auth/signup", formData);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed",
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const response = await BizSphere.post("/auth/login", formData);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "auth/me",
  async (_, thunkAPI) => {
    try {
      const response = await BizSphere.get("/auth/me");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message);
    }
  },
);
