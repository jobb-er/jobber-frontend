import axios from "axios";

import { actionBuilder } from "../../../../common/store";
import { axiosHeaders } from "../../../../common/constants";
import { registerToAPI, loginToAPI } from "../../converters";
import { RegisterValues, LoginValues } from "../../models";
import ActionTypes from "../actionTypes";

export const register = (data: RegisterValues) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}/register`,
    registerToAPI(data),
    axiosHeaders,
  );

export const login = (data: LoginValues) =>
  actionBuilder(
    `${process.env.REACT_APP_API_URL}/login`,
    [
      ActionTypes.AUTH_REQUEST,
      ActionTypes.AUTH_SUCCESS,
      ActionTypes.AUTH_FAILURE,
    ],
    "POST",
    loginToAPI(data),
  );

export const logout = () =>
  actionBuilder(
    `${process.env.REACT_APP_API_URL}/logout`,
    [
      ActionTypes.LOGOUT_REQUEST,
      ActionTypes.LOGOUT_SUCCESS,
      ActionTypes.LOGOUT_FAILURE,
    ],
    "POST",
  );
