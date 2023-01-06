import axios from "axios";
import { axiosHeaders } from "common/constants";
import { actionBuilder } from "common/store";
import { User } from "packages/chat/models/types";
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
