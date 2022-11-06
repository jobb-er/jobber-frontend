import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createMiddleware } from "redux-api-middleware";
import rootReducer from "./rootReducer";
import { appReducer } from "./appReducers";

export type RootState = ReturnType<typeof appReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger, createMiddleware()],
});

export default store;
