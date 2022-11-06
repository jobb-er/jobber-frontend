import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { RootState } from ".";

import ActionTypes from "./actionTypes";
import { appReducer } from "./appReducers";

const initialState: RootState = {} as RootState;

const rootReducer: Reducer = (
  state: RootState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case ActionTypes.RESET_STORE:
      return state;
  }
  return appReducer;
};

export default rootReducer;
