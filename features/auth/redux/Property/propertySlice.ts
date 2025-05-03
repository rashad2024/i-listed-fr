import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setProperty } = propertySlice.actions;
export default propertySlice.reducer;
