import { AnyAction } from "redux";

import { Conversation, Conversations, Messages } from "../../models";
import ActionTypes from "../actionTypes";

export const unReadCountReducer = (
  state: number | null = null,
  action: AnyAction,
): number | null => {
  switch (action.type) {
    case ActionTypes.UNREAD_COUNTER_REQUEST:
      return state;
    case ActionTypes.UNREAD_COUNTER_SUCCESS:
      return action.payload?.unReadCount;
    case ActionTypes.UNREAD_COUNTER_FAILURE:
      return 0;
    case ActionTypes.UNREAD_COUNTER_INCREASE:
      return state !== null ? state++ : state;
    case ActionTypes.UNREAD_COUNTER_DECREASE:
      return state ? state-- : state;
    default:
      return state;
  }
};

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
    case ActionTypes.MARK_AS_READ:
      return state.map((conv) => {
        if (conv.user?.id === action.payload) {
          return { ...conv, markAsRead: true };
        }
        return conv;
      });
    case ActionTypes.MARK_AS_UNREAD:
      return state.map((conv) => {
        if (conv.user?.id === action.payload) {
          return { ...conv, markAsRead: false };
        }
        return conv;
      });
    case ActionTypes.NEW_MESSAGE:
      const filteredState = state.filter(
        (conv) => conv.user?.id !== action.payload.user.id,
      );
      return [action.payload, ...filteredState];
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
    case ActionTypes.MESSAGES_APPEND:
      const messages = state.messages as Messages;
      return { ...state, messages: [action.payload, ...messages] };
    default:
      return state;
  }
};
