import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useParams } from "react-router-dom";

import { Card, Input, Loader } from "common/components";
import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { ReactComponent as SendMessage } from "common/images/messages/send.svg";
import {
  ConversationCardMapState,
  ConversationCardMapStateReturn,
  ConversationCardProps,
} from "./types";
import {
  fetchConversation,
  sendMessage as sendMessageAction,
} from "packages/chat/store/actions/conversationsActions";
import ActionTypes from "packages/chat/store/actionTypes";
import SocketActionTypes from "packages/app/store/actionTypes";
import {
  connectToNamespace,
  socketDisconnect,
} from "packages/app/store/actions/socketActions";
import { Message } from "packages/chat/models";
import ConversationMessages from "./conversationMessages";
import { CHAT } from "common/constants";
import { Socket } from "socket.io-client";

const ConversationCard = ({
  auth,
  socket,
  conversation: { user },
  isFetchingConversationReducer,
  connectToChat,
  disconnectFromChat,
  fetchUserConversation,
  addMessage,
}: ConversationCardProps): ReactElement => {
  const { id } = useParams();

  const [messageInput, setMessageInput] = useState<string>("");

  useEffect(() => {
    if (id && auth.id) {
      fetchUserConversation(id);
      connectToChat(auth.id, id);
    }
    return () => {
      disconnectFromChat(socket.send.socket, socket.receive.socket);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, auth]);

  useEffect(() => {
    socket.receive.socket?.on("receiveMessage", (message: Message) => {
      addMessage(message);
      socket.receive.socket?.emit(
        "readMessage",
        { messageId: message.id },
        () => {},
      );
    });

    return () => {
      socket.receive.socket?.off("receiveMessage");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket.receive.socket]);

  if (isFetchingConversationReducer) {
    return (
      <Card additionalClassName="flex justify-center items-center w-full p-8">
        <Loader additionalClassName="flex items-center justify-center h-full" />
      </Card>
    );
  }

  if (id !== user?.id) {
    return (
      <Card additionalClassName="flex justify-center items-center w-full p-8">
        <p>Conversation not found!</p>
      </Card>
    );
  }

  const handleClick = () => {
    if (socket.send.socket && messageInput) {
      sendMessageAction(
        socket.send.socket,
        { message: messageInput },
        addMessage,
      );
      setMessageInput("");
    }
  };

  return (
    <Card additionalClassName="relative w-full p-8 divide-y-2 divide-primary text-primary">
      <div className="flex flex-row">
        <div className="flex justify-center items-center w-18 h-20 pb-4">
          <div className="w-16 h-16 box-content border border-primary rounded-full focus:outline-none">
            {user?.avatar || <NoAvatarIcon className="w-16 h-16 p-3" />}
          </div>
        </div>
        <div className="text-msg-conv-title px-6 py-3 capitalize">
          <span>{user.firstName}</span>
          <span> {user.lastName}</span>
        </div>
      </div>
      <div className="absolute flex flex-col justify-between inset-8 top-28">
        {<ConversationMessages />}
        <div className="absolute flex flex-row inset-x-0 bottom-0">
          <Input
            additionalClassName="text-msg-conv-msg-inp py-4 px-6 h-14"
            height="h-min"
            placeholder="Aa"
            value={messageInput}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setMessageInput(event.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
          />
          <div className="py-2 px-7">
            <button onClick={handleClick}>
              <SendMessage />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const mapStateToProps = (
  state: ConversationCardMapState,
): ConversationCardMapStateReturn => ({
  auth: state.auth,
  socket: state.socket,
  conversation: state.messages.conversation,
  conversations: state.messages.conversations,
  isFetchingConversationReducer:
    state.requestStatuses.isFetchingConversationReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchUserConversation: async (id: string) => {
    await dispatch(fetchConversation(id));
    await dispatch({ type: ActionTypes.MARK_AS_READ, payload: id });
  },
  connectToChat: async (userId: string, receiverId: string) => {
    const sendNamespace = `${CHAT}/${userId}/${receiverId}`;
    const receiveNamespace = `${CHAT}/${receiverId}/${userId}`;
    await dispatch({
      type: SocketActionTypes.SOCKET_CHAT_SEND_CONNECT,
      payload: {
        name: sendNamespace,
        socket: connectToNamespace(sendNamespace),
      },
    });
    await dispatch({
      type: SocketActionTypes.SOCKET_CHAT_RECEIVE_CONNECT,
      payload: {
        name: receiveNamespace,
        socket: connectToNamespace(receiveNamespace),
      },
    });
  },
  disconnectFromChat: async (
    socketSend: Socket | null,
    socketReceive: Socket | null,
  ) => {
    await dispatch({
      type: SocketActionTypes.SOCKET_CHAT_SEND_DISCONNECT,
      payload: socketDisconnect(socketSend),
    });
    await dispatch({
      type: SocketActionTypes.SOCKET_CHAT_RECEIVE_DISCONNECT,
      payload: socketDisconnect(socketReceive),
    });
  },
  addMessage: (message?: Message) => {
    if (message)
      dispatch({ type: ActionTypes.MESSAGES_APPEND, payload: message });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationCard);
