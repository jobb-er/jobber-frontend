import { AnyAction } from "redux";
import AuthTypes from "../types/authActionTypes";
import { Auth } from "./types";

const initialState: Auth = {
  isAuth: localStorage.getItem("clientSession") ? true : false,
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  message: "",
  httpStatusCode: "",
};

export const authReducer = (
  state: Auth = initialState,
  action: AnyAction,
): Auth => {
  switch (action.type) {
    case AuthTypes.AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload.response,
        httpStatusCode: action.payload.status,
      };
    default:
      return state;
  }
};
