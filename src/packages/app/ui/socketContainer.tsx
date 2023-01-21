import { ReactElement, useEffect } from "react";
import { Socket } from "socket.io-client";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ConversationsItem } from "packages/chat/models";
import ChatActionTypes from "packages/chat/store/actionTypes";
import { PRIVATE } from "common/constants";
import { fetchConversations } from "packages/chat/store/actions/conversationsActions";
import {
  SocketContainerMapState,
  SocketContainerMapStateReturn,
  SocketContainerProps,
} from "./types";
import {
  connectToNamespace,
  socketDisconnect,
} from "../store/actions/socketActions";
import ActionTypes from "../store/actionTypes";

const SocketContainer = ({
  children,
  auth,
  socket,
  conversations,
  connectToPrivateSocket,
  disconnectFromPrivateSocket,
  newMessage,
  fetchMyConversations,
}: SocketContainerProps): ReactElement => {
  useEffect(() => {
    if (auth.id) {
      connectToPrivateSocket(auth.id);
      fetchMyConversations();
    }
    return () => {
      disconnectFromPrivateSocket(socket?.private?.socket);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  useEffect(() => {
    socket.private?.socket?.on("newMessage", (message: ConversationsItem) => {
      const id = socket.receive.name?.split("/")[1];
      if (id === message.user.id) {
        newMessage({
          ...message,
          latestMessage: { ...message.latestMessage, isRead: true },
          markAsRead: true,
        });
      } else {
        newMessage(message);
      }
    });
    return () => {
      socket?.private?.socket?.off("newMessage");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket.private.socket, socket.receive.name, conversations]);

  return <>{children}</>;
};

const mapStateToProps = (
  state: SocketContainerMapState,
): SocketContainerMapStateReturn => ({
  auth: state.auth,
  socket: state.socket,
  conversations: state.messages.conversations,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  connectToPrivateSocket: (id: string) => {
    const namespace = `${PRIVATE}/${id}`;
    dispatch({
      type: ActionTypes.SOCKET_PRIVATE_CONNECT,
      payload: { name: namespace, socket: connectToNamespace(namespace) },
    });
  },
  disconnectFromPrivateSocket: (socket: Socket | null) => {
    dispatch({
      type: ActionTypes.SOCKET_PRIVATE_DISCONNECT,
      payload: socketDisconnect(socket),
    });
  },
  newMessage: async (message: ConversationsItem) =>
    await dispatch({
      type: ChatActionTypes.NEW_MESSAGE,
      payload: message,
    }),
  fetchMyConversations: () => dispatch(fetchConversations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocketContainer);
