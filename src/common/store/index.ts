import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createMiddleware } from "redux-api-middleware";

import actionBuilder from "./actionBuilder";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, createMiddleware(), logger],
});

export { store, actionBuilder };
