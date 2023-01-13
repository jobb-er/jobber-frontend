export type Messages = Message[];

export type Conversations = ConversationsItem[];

export interface User {
  lastName: string;
  firstName: string;
  id: string;
  email: string;
  avatar?: string;
}

interface TimeUnitAPIFormat {
  low: number;
  high: number;
}

export interface DateTimeAPIFormat {
  year: TimeUnitAPIFormat;
  month: TimeUnitAPIFormat;
  day: TimeUnitAPIFormat;
  hour: TimeUnitAPIFormat;
  minute: TimeUnitAPIFormat;
  second: TimeUnitAPIFormat;
  nanosecond: TimeUnitAPIFormat;
  timeZoneOffsetSeconds: TimeUnitAPIFormat;
}

export interface Conversation {
  user: User;
  messages: Messages;
}

export interface ConversationsItem {
  user: User;
  latestMessage: Message;
  markAsRead: boolean;
}

export interface Message {
  id: string;
  message: string;
  date: DateTimeAPIFormat;
  isRead: boolean;
  received: boolean;
}

export interface SendMessageIO {}

export interface ChatMessage {
  message: string;
}
