import { User } from "packages/chat/models/types";

export interface TopResultsResponse {
  message: string;
  topResults: User[];
}
