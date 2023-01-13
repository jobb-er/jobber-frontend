import axios from "axios";
import { Socket } from "socket.io-client";

import { axiosHeaders } from "common/constants";
import { actionBuilder } from "common/store";
import { ChatMessage, Message, User } from "packages/chat/models/types";
import ActionTypes from "../actionTypes";

export const fetchConversations = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/message`, [
    ActionTypes.CONVERSATIONS_REQUEST,
    ActionTypes.CONVERSATIONS_SUCCESS,
    ActionTypes.CONVERSATIONS_FAILURE,
  ]);

export const fetchConversation = (id: string) =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/message/${id}`, [
    ActionTypes.CONVERSATION_REQUEST,
    ActionTypes.CONVERSATION_SUCCESS,
    ActionTypes.CONVERSATION_FAILURE,
  ]);

interface TopResultsResponse {
  message: string;
  topResults: User[];
}

export const fetchTopResults = (query: string) =>
  axios.get<TopResultsResponse>(
    `${process.env.REACT_APP_API_URL}/user/list?query=${query}`,
    axiosHeaders,
  );

export const sendMessage = (
  socket: Socket,
  message: ChatMessage,
  callback: (message: Message) => void,
) => {
  socket.emit("sendMessage", message, (message: Message | string) => {
    if (typeof message === "object") callback(message);
  });
};

export const getUnreadCount = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/message/get-unread-count`, [
    ActionTypes.UNREAD_COUNTER_REQUEST,
    ActionTypes.UNREAD_COUNTER_SUCCESS,
    ActionTypes.UNREAD_COUNTER_FAILURE,
  ]);
