import { Conversations, ConversationsItem } from "packages/chat/models";
import { MapState } from "../types";

export interface ConversationsListMapState extends MapState {
  requestStatuses: { isFetchingConversationsReducer: boolean };
}

export interface ConversationsListMapStateReturn {
  conversations: Conversations;
  isFetchingConversationsReducer: boolean;
}

export interface ConversationsListProps {
  conversations: Conversations;
  isFetchingConversationsReducer: boolean;
  searchValue?: string;
}

export interface ConversationsListItemProps extends ConversationsItem {}
