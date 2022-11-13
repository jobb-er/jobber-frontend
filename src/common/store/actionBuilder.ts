import { Dispatch } from "redux";
import { createAction } from "redux-api-middleware";

import { reduxMiddlewareHeaders, GET, POST } from "../constants";

const actionBuilder =
  (
    url: string,
    [actionStart, actionSuccess, actionError]: string[],
    method: string = GET,
    data?: unknown,
  ) =>
  (dispatch: Dispatch) => {
    switch (method) {
      case GET:
        return dispatch(
          createAction({
            endpoint: url,
            method: GET,
            headers: reduxMiddlewareHeaders,
            credentials: "include",
            types: [actionStart, actionSuccess, actionError],
          }),
        );
      case POST:
        return dispatch(
          createAction({
            endpoint: url,
            method: POST,
            headers: reduxMiddlewareHeaders,
            credentials: "include",
            body: JSON.stringify(data),
            types: [actionStart, actionSuccess, actionError],
          }),
        );
    }
  };

export default actionBuilder;
