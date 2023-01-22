import axios from "axios";
import { Dispatch } from "redux";
import { Socket } from "socket.io-client";

import { axiosHeaders } from "common/constants";
import { actionBuilder } from "common/store";
import { ChatMessage, Message } from "packages/chat/models/types";
import ActionTypes from "../actionTypes";
import { TopResultsResponse } from "./types";

export const fetchConversations = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/message`, [
    ActionTypes.CONVERSATIONS_REQUEST,
    ActionTypes.CONVERSATIONS_SUCCESS,
    ActionTypes.CONVERSATIONS_FAILURE,
  ]);

const fetchConversation = (id: string) =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/message/${id}`, [
    ActionTypes.CONVERSATION_REQUEST,
    ActionTypes.CONVERSATION_SUCCESS,
    ActionTypes.CONVERSATION_FAILURE,
  ]);

export const fetchConversationAction =
  (id: string) => async (dispatch: Dispatch<any>) => {
    await dispatch(fetchConversation(id));
    await dispatch({ type: ActionTypes.MARK_AS_READ, payload: id });
  };

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
