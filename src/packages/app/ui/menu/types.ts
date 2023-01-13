export interface MenuProps {
  logout: () => any;
  resetStore: () => any;
}

export interface UnreadNotificationProps {
  unReadCount: number;
}

export interface UnreadNotificationMapState {
  messages: { unReadCount: number };
}

export interface UnreadNotificationMapStateReturn {
  unReadCount: number;
}
