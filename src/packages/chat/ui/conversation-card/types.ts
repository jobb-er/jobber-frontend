import { Auth } from "packages/app";
import { SocketReducer } from "packages/app/models";
import { Conversation, Message, Messages } from "packages/chat/models";
import { MapState } from "../types";

export interface ConversationCardMapState extends MapState {
  auth: Auth;
  socket: SocketReducer;
}

export interface ConversationCardMapStateReturn {
  auth: Auth;
  socket: SocketReducer;
  conversation: Conversation;
}

export interface ConversationCardProps extends ConversationCardMapStateReturn {
  connectToChat: (userId: string, receiverId: string) => void;
  fetchUserConversation: (id: string) => void;
  addMessage: (message: Message) => void;
}

export interface NewConversationCardProps
  extends ConversationCardMapStateReturn {}

export interface ConversationMessagesProps {
  conversation: Conversation;
}

export interface ConversationMessagesMapState extends MapState {}

export interface ConversationMessagesMapStateReturn {
  conversation: Conversation;
}
