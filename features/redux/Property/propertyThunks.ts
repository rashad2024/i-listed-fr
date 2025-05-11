import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  retrievePropertyOptions,
  createPropertyService,
  createDraftPropertyService,
  deletePropertyService,
  fetchPropertiesServices,
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
export const addPropertyAsDraft = createAsyncThunk(
  "property/addDraftProperty",
  async (propertyData: object, { rejectWithValue }) => {
    try {
      const data = await createDraftPropertyService(propertyData);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message); // If an error occurs, return the error message
    }
  }
);
export const deletePropertyById = createAsyncThunk(
  "property/addDeleteProperty",
  async (propertyId: string, { rejectWithValue }) => {
    try {
      const data = await deletePropertyService(propertyId);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message); // If an error occurs, return the error message
    }
  }
);

// export const fetchProperties = createAsyncThunk(
//   "property/fetchProperties",
//   async (filterData, { rejectWithValue }) => {
//     try {
//       const data = await fetchPropertiesServices(filterData);
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message); // If an error occurs, return the error message
//     }
//   }
// );
