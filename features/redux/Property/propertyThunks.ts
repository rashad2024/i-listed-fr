import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  retrievePropertyOptions,
  createPropertyService,
} from "@/features/services/propertyServices";

export const getPropertyOptions = createAsyncThunk(
  "property/setPropertyOptions",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await retrievePropertyOptions();

      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.message); // If an error occurs, return the error message
    }
  }
);

export const addProperty = createAsyncThunk(
  "property/addProperty",
  async (propertyData: object, { rejectWithValue }) => {
    try {
      const data = await createPropertyService(propertyData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message); // If an error occurs, return the error message
    }
  }
);
