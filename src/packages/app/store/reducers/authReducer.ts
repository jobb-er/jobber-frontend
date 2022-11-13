import { AnyAction } from "redux";

import { CLIENT_SESSION } from "../../../../common/constants";
import { Auth } from "../../models";
import ActionTypes from "../actionTypes";

// 1 DAY unix timestamp
const jwtRefreshExpiration = 86400;

const clientSessionExpirationDate = new Date();
clientSessionExpirationDate.setSeconds(
  clientSessionExpirationDate.getSeconds() + jwtRefreshExpiration,
);

const isAuthorised = !!localStorage.getItem(CLIENT_SESSION);
const initialAuth = { isAuthorised };

export const authReducer = (
  state: Auth = initialAuth,
  action: AnyAction,
): Auth => {
  switch (action.type) {
    case ActionTypes.AUTH_REQUEST:
      return initialAuth;
    case ActionTypes.AUTH_SUCCESS:
      localStorage.setItem(
        CLIENT_SESSION,
        clientSessionExpirationDate.toString(),
      );
      return { ...action.payload?.user, isAuthorised };
    case ActionTypes.AUTH_FAILURE:
      return { isAuthorised: false };
    case ActionTypes.LOGOUT_REQUEST:
      return state;
    case ActionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem(CLIENT_SESSION);
      return { isAuthorised: false };
    case ActionTypes.LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
};
