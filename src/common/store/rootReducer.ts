import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";

import ActionTypes from "./actionTypes";
import { authReducer } from "../../packages/app/store/reducers/authReducer";
import { offersReducer } from "../../packages/offers/store/reducers";

const initialState = {
  auth: {},
  offers: {
    allOffers: [],
    offer: {},
    recruiterOffers: [],
    candidateOffers: [],
  },
};

export const appReducer = combineReducers({
  auth: authReducer,
  offers: offersReducer,
});

const rootReducer: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.RESET_STORE:
      return state;
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
