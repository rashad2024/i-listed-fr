import { createSlice } from "@reduxjs/toolkit";
import { getPropertyOptions } from "@/features/redux/Property/propertyThunks";

interface PropertyState {
  loading: boolean;
  error: string | null;
  data: any | null;
}

const initialState: PropertyState = {
  loading: false,
  error: null,
  data: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperty: (state, action) => {
      //   console.log(state.data, action);
      state.data = Object.assign({}, state.data, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPropertyOptions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPropertyOptions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { ...state.data, propertyOptions: action.payload };
      })
      .addCase(getPropertyOptions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setProperty } = propertySlice.actions;
export default propertySlice.reducer;
