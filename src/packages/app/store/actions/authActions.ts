import { RSAA } from "redux-api-middleware";
import { baseUrl } from "../../../../config/baseUrl";
import { RegisterApiValues } from "../../ui/register/types";
import AuthTypes from "../types/authActionTypes";

export const register = (payload: RegisterApiValues) => ({
  [RSAA]: {
    endpoint: `${baseUrl}/register`,
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    types: [
      AuthTypes.AUTH_REQUEST,
      AuthTypes.AUTH_SUCCESS,
      AuthTypes.AUTH_FAILURE,
    ],
  },
});
