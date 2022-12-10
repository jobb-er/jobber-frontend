import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";

import ActionTypes from "./actionTypes";
import { authReducer } from "../../packages/app/store/reducers/authReducer";
import {
  offersReducer,
  isFetchingAllOffers,
  isFetchingMyOffers,
  isFetchingOffer,
  isFetchingMyOffer,
} from "../../packages/offers/store/reducers";

const initialState = {
  auth: {},
  offers: {
    allOffers: [],
    offer: {},
    recruiterOffer: {},
    recruiterOffers: [],
    candidateOffers: [],
  },
  requestStatuses: {
    isFetchingAllOffers: false,
    isFetchingMyOffers: false,
    isFetchingOffer: false,
    isFetchingMyOffer: false
  },
};

export const appReducer = combineReducers({
  auth: authReducer,
  offers: offersReducer,
  requestStatuses: combineReducers({
    isFetchingAllOffers,
    isFetchingMyOffers,
    isFetchingOffer,
    isFetchingMyOffer
  }),
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
