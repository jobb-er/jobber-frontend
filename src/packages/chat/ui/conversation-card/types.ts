import { Conversation } from "packages/chat/models";
import { MapState } from "../types";

export interface ConversationCardMapState extends MapState {}

export interface ConversationCardMapStateReturn {
  conversation: Conversation;
}

export interface ConversationCardProps extends ConversationCardMapStateReturn {
  fetchUserConversation: (id: string) => void;
}

export interface NewConversationCardProps extends ConversationCardMapStateReturn {
}
