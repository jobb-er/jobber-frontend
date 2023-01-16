import { Conversations } from "packages/chat/models";

export interface MenuProps {
  logout: () => any;
  resetStore: () => any;
}

export interface UnreadNotificationProps {
  conversations: Conversations;
}

export interface UnreadNotificationMapState {
  messages: { conversations: Conversations };
}

export interface UnreadNotificationMapStateReturn {
  conversations: Conversations;
}
