import { ConversationsItem } from "packages/chat/models";
import { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { connectToNamespace } from "../store/actions/socketActions";
import ActionTypes from "../store/actionTypes";
import ChatActionTypes from "packages/chat/store/actionTypes";
import { SocketContainerMapState, SocketContainerProps } from "./types";
import { PRIVATE } from "common/constants";
import { getUnreadCount } from "packages/chat/store/actions/conversationsActions";

const SocketContainer = ({
  children,
  auth,
  socket,
  connectToPrivateSocket,
  newMessage,
  unreadCounter,
}: SocketContainerProps): ReactElement => {
  useEffect(() => {
    if (auth.id) {
      connectToPrivateSocket(auth.id);
      unreadCounter();
    }
    return () => {
      socket?.private?.socket?.disconnect();
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
  }, [socket.private.socket, socket.receive.name]);

  return <>{children}</>;
};

const mapStateToProps = (
  state: SocketContainerMapState,
): SocketContainerMapState => ({
  auth: state.auth,
  socket: state.socket,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  connectToPrivateSocket: (id: string) => {
    const namespace = `${PRIVATE}/${id}`;
    dispatch({
      type: ActionTypes.SOCKET_PRIVATE_CONNECT,
      payload: { name: namespace, socket: connectToNamespace(namespace) },
    });
  },
  newMessage: (message: ConversationsItem) =>
    dispatch({
      type: ChatActionTypes.NEW_MESSAGE,
      payload: message,
    }),
  unreadCounter: () => dispatch(getUnreadCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocketContainer);
