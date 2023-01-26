import { Conversations, Conversation } from "../models";
import { Auth } from "../../app";

export interface MapState {
  messages: { conversations: Conversations; conversation: Conversation };
}

export interface MessagesMapState extends MapState {
  auth: Auth;
}

export interface MessagesMapStateReturn {
  auth: Auth;
  conversations: Conversations;
}

export interface MessagesProps {
  conversations: Conversations;
  auth?: Auth;
}

export interface MessagesContentMapState extends MapState {}

export interface MessagesContentMapStateReturn {
  conversations: Conversations;
}

export interface MessagesContentProps {
  conversations?: Conversations;
  searchValue?: string;
}
