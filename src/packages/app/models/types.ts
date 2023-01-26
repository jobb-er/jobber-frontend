import { Socket as SocketIO } from "socket.io-client";

export interface Auth {
  isAuthorised: boolean;
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  accountType?: string;
  avatar?: string;
}

export interface RegisterAPIValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: string;
}

export interface RegisterValues {
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  email: string;
}

export interface LoginAPIValues {
  email: string;
  password: string;
}

export interface LoginValues {
  email: string;
  password: string;
  invalid?: string;
}

export interface Socket {
  name: string | null;
  socket: SocketIO | null;
}

export interface SocketReducer {
  private: Socket;
  send: Socket;
  receive: Socket;
}
