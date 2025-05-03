import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, logoutService } from "../../services/authService";
import api from "@/utils/axios";

// const setPropertyData = createAsyncThunk(
//   "auth/setProperty",
//   (data: any, { rejectWithValue }) => {
//     try {
//       console.log(data);
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message); // If an error occurs, return the error message
//     }
//   }
// );
