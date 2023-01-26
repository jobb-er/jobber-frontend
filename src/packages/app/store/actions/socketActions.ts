import { Dispatch } from "redux";
import io, { Socket } from "socket.io-client";

import { CHAT } from "common/constants";
import ActionTypes from "../actionTypes";

export const connectToNamespace = (namespace: string) => {
  const socket = io(
    `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/${namespace}`,
    {
      withCredentials: true,
    },
  );

  return socket;
};

export const socketDisconnect = (socket: Socket | null) => {
  socket?.disconnect();
  return { socket: null, name: null };
};

export const connectToChatAction =
  (userId: string, receiverId: string) => async (dispatch: Dispatch<any>) => {
    const sendNamespace = `${CHAT}/${userId}/${receiverId}`;
    const receiveNamespace = `${CHAT}/${receiverId}/${userId}`;
    await dispatch({
      type: ActionTypes.SOCKET_CHAT_SEND_CONNECT,
      payload: {
        name: sendNamespace,
        socket: connectToNamespace(sendNamespace),
      },
    });
    await dispatch({
      type: ActionTypes.SOCKET_CHAT_RECEIVE_CONNECT,
      payload: {
        name: receiveNamespace,
        socket: connectToNamespace(receiveNamespace),
      },
    });
  };

export const disconnectFromChatAction =
  (socketSend: Socket | null, socketReceive: Socket | null) =>
  async (dispatch: Dispatch<any>) => {
    await dispatch({
      type: ActionTypes.SOCKET_CHAT_SEND_DISCONNECT,
      payload: socketDisconnect(socketSend),
    });
    await dispatch({
      type: ActionTypes.SOCKET_CHAT_RECEIVE_DISCONNECT,
      payload: socketDisconnect(socketReceive),
    });
  };
