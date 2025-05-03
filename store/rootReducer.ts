// store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/redux/Auth/authSlice";
import propertyReducer from "../features/auth/redux/Property/propertySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  property: propertyReducer,
});

export default rootReducer;
