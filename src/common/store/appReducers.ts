// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../../packages/app/store/reducers/authReducer";

export const appReducer = combineReducers({
  auth: authReducer,
});
