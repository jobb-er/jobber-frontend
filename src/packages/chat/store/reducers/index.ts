import { combineReducers } from "@reduxjs/toolkit";

import {
  conversationReducer,
  conversationsReducer,
} from "./conversationsReducer";

export const messagesReducers = combineReducers({
  conversations: conversationsReducer,
  conversation: conversationReducer,
});
