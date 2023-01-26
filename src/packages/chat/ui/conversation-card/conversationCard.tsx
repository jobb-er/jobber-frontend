import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";

import ActionTypes from "packages/chat/store/actionTypes";
import { Card, Input, Loader } from "common/components";
import Avatar from "common/components/avatar/avatar";
import { ReactComponent as SendMessage } from "common/images/messages/send.svg";
import { Message } from "packages/chat/models";
import {
  fetchConversationAction,
  sendMessage as sendMessageAction,
} from "packages/chat/store/actions/conversationsActions";
import {
  connectToChatAction,
  disconnectFromChatAction,
} from "packages/app/store/actions/socketActions";
import ConversationMessages from "./conversationMessages";
import {
  ConversationCardMapState,
  ConversationCardMapStateReturn,
  ConversationCardProps,
} from "./types";

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
  const { t } = useTranslation();

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

  if (id !== user?.id || isFetchingConversationReducer) {
    return (
      <Card additionalClassName="flex justify-center items-center w-full p-8">
        {isFetchingConversationReducer ? (
          <Loader additionalClassName="flex items-center justify-center h-full" />
        ) : (
          <p>{t("messages.convNotFound")}</p>
        )}
      </Card>
    );
  }

  return (
    <Card additionalClassName="relative w-full p-8 divide-y-2 divide-primary text-primary">
      <div className="flex flex-row">
        <div className="flex justify-center items-center w-18 h-20 pb-4">
          <div className="w-12 h-12 box-content border border-primary rounded-full focus:outline-none">
            <Avatar avatar={user?.avatar} />
          </div>
        </div>
        <div className="text-3xl px-6 py-3 capitalize">
          <span>{user.firstName}</span>
          <span> {user.lastName}</span>
        </div>
      </div>
      <div className="absolute flex flex-col justify-between inset-8 top-28">
        {<ConversationMessages />}
        <div className="absolute flex flex-row h-12 inset-x-0 bottom-0">
          <Input
            additionalClassName="text-xl py-4 px-6 h-12"
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
          <div className="py-1 px-7">
            <button onClick={handleClick}>
              <SendMessage className="text-action" />
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
  fetchUserConversation: (id: string) => {
    dispatch(fetchConversationAction(id));
  },
  connectToChat: (userId: string, receiverId: string) =>
    dispatch(connectToChatAction(userId, receiverId)),
  disconnectFromChat: async (
    socketSend: Socket | null,
    socketReceive: Socket | null,
  ) => dispatch(disconnectFromChatAction(socketSend, socketReceive)),
  addMessage: (message?: Message) =>
    message &&
    dispatch({ type: ActionTypes.MESSAGES_APPEND, payload: message }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationCard);
