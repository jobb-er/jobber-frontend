import { Auth } from "packages/app";
import { SocketReducer } from "packages/app/models";
import { Conversation, Conversations, Message } from "packages/chat/models";
import { Socket } from "socket.io-client";
import { MapState } from "../types";

export interface ConversationCardMapState extends MapState {
  auth: Auth;
  socket: SocketReducer;
  requestStatuses: { isFetchingConversationReducer: boolean };
}

export interface ConversationCardMapStateReturn {
  auth: Auth;
  socket: SocketReducer;
  conversation: Conversation;
  conversations: Conversations;
  isFetchingConversationReducer: boolean;
}

export interface ConversationCardProps extends ConversationCardMapStateReturn {
  connectToChat: (userId: string, receiverId: string) => void;
  disconnectFromChat: (
    socketSend: Socket | null,
    socketReceive: Socket | null,
  ) => void;
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
