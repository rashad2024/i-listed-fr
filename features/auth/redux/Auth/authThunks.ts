// features/auth/redux/authThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, logoutService } from "../../services/authService";
import api from "@/utils/axios";

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { email: string; password: string; rememberMe?: boolean },
    { rejectWithValue }
  ) => {
    try {
      const data = await loginService(
        credentials.email,
        credentials.password,
        credentials.rememberMe
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message); // If an error occurs, return the error message
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutService();
      return true;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerInitiate = createAsyncThunk(
  "auth/registerInitiate",
  async (payload: { email: string; role: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/register/initiate", payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message || "Registration failed");
    }
  }
);

export const registerVerify = createAsyncThunk(
  "auth/registerVerify",
  async (payload: { email: string; code: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/register/verify", payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err?.message || "Registration failed");
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    payload: {
      email: string;
      code: string;
      password: string;
      role: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/auth/register", payload);
      return response.data;
    } catch (err: any) {
      console.log("err: ", err?.message, err);
      return rejectWithValue(err?.message || "Registration failed");
    }
  }
);

export const forgotPasswordInitiate = createAsyncThunk(
  "auth/resetPasswordInitiate",
  async (payload: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/reset-password/initiate", payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err?.message || "Registration failed");
    }
  }
);

export const forgotPasswordVerify = createAsyncThunk(
  "auth/forgotPasswordVerify",
  async (payload: { email: string; code: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/reset-password/verify", payload);
      return response.data;
    } catch (err: any) {
      console.log("err: ", err?.message, typeof err);
      return rejectWithValue(err?.message || "Registration failed");
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    payload: { email: string; code: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post("/auth/reset-password", payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err?.message || "Registration failed");
    }
  }
);
