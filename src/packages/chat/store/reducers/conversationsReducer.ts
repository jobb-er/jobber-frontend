import { AnyAction } from "redux";

import { Conversation, Conversations } from "../../models";
import ActionTypes from "../actionTypes";

export const conversationsReducer = (
  state: Conversations = [],
  action: AnyAction,
): Conversations => {
  switch (action.type) {
    case ActionTypes.CONVERSATIONS_REQUEST:
      return state;
    case ActionTypes.CONVERSATIONS_SUCCESS:
      return action.payload?.conversations;
    case ActionTypes.CONVERSATIONS_FAILURE:
      return [];
    default:
      return state;
  }
};

export const conversationReducer = (
  state: Conversation | Record<string, unknown> = {},
  action: AnyAction,
): Conversation | Record<string, unknown> => {
  switch (action.type) {
    case ActionTypes.CONVERSATION_REQUEST:
      return state;
    case ActionTypes.CONVERSATION_SUCCESS:
      return action.payload?.conversation;
    case ActionTypes.CONVERSATION_FAILURE:
      return {};
    default:
      return state;
  }
};
