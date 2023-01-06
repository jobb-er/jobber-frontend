import { Conversations, ConversationsItem } from "packages/chat/models";
import { MapState } from "../types";

export interface ConversationsListMapState extends MapState {}

export interface ConversationsListMapStateReturn {
  conversations: Conversations;
}

export interface ConversationsListProps {
  conversations: Conversations;
  searchValue?: string;
}

export interface ConversationsListItemProps extends ConversationsItem {}
