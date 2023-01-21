import { combineReducers } from "@reduxjs/toolkit";

import {
  conversationReducer,
  conversationsReducer,
  isFetchingConversationReducer,
  isFetchingConversationsReducer,
} from "./conversationsReducer";

export const messagesReducers = combineReducers({
  conversations: conversationsReducer,
  conversation: conversationReducer,
});

export { isFetchingConversationReducer, isFetchingConversationsReducer };
