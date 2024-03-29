import { Conversations, ConversationsItem } from "packages/chat/models";
import { ReactElement } from "react";
import { Socket } from "socket.io-client";

import { Auth } from "../models";
import { SocketReducer } from "../models/types";

export interface ContainerProps {
  children: ReactElement | ReactElement[];
  auth: Auth;
  fetchAuth: () => void;
}

export interface AuthContainerProps {
  children: ReactElement;
  auth: Auth;
}

export interface AuthContainerMapState {
  auth: Auth;
}

export interface ContainerMapState {
  auth: Auth;
}

export interface SocketContainerProps {
  children: ReactElement;
  auth: Auth;
  socket: SocketReducer;
  conversations: Conversations;
  connectToPrivateSocket: (id: string) => void;
  disconnectFromPrivateSocket: (socket: Socket | null) => void;
  newMessage: (message: ConversationsItem) => void;
  fetchMyConversations: () => void;
}

export interface SocketContainerMapState {
  auth: Auth;
  socket: SocketReducer;
  messages: { conversations: Conversations };
}

export interface SocketContainerMapStateReturn {
  auth: Auth;
  socket: SocketReducer;
  conversations: Conversations;
}
