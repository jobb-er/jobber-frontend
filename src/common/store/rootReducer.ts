import { combineReducers, AnyAction } from "redux";

import ActionTypes from "./actionTypes";

const initialState: Record<string, unknown> = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const appReducer = combineReducers({});

const rootReducer = (
  state: Record<string, unknown> = initialState,
  action: AnyAction,
): Record<string, unknown> => {
  switch (action.type) {
    case ActionTypes.RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
