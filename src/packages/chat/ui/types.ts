import { Auth } from "../../app";

export interface MessagesMapState {
  auth: Auth;
}

export interface MessagesProps {
  auth?: Auth;
}
