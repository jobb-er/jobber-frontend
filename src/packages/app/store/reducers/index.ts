import { combineReducers } from "@reduxjs/toolkit";
import {
  socketPrivateReducer,
  socketChatSendReducer,
  socketChatReceiveReducer,
} from "./socketReducer";

export { authReducer } from "./authReducer";
export const socketReducers = combineReducers({
  private: socketPrivateReducer,
  send: socketChatSendReducer,
  receive: socketChatReceiveReducer,
});
