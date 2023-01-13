import { combineReducers } from "@reduxjs/toolkit";

import {
  conversationReducer,
  conversationsReducer,
  unReadCountReducer,
} from "./conversationsReducer";

export const messagesReducers = combineReducers({
  conversations: conversationsReducer,
  conversation: conversationReducer,
  unReadCount: unReadCountReducer,
});
