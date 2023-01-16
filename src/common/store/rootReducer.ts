import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";

import ActionTypes from "./actionTypes";
import { authReducer, socketReducers } from "packages/app/store/reducers";
import {
  offersReducer,
  isFetchingAllOffers,
  isFetchingMyOffers,
  isFetchingOffer,
  isFetchingMyOffer,
  isFetchingOfferAppliedCandidates,
} from "../../packages/offers/store/reducers";
import { messagesReducers } from "../../packages/chat/store/reducers";

const initialState = {
  auth: {},
  socket: {
    private: {
      name: null,
      socket: null,
    },
    send: {
      name: null,
      socket: null,
    },
    receive: {
      name: null,
      socket: null,
    },
  },
  offers: {
    allOffers: [],
    offer: {},
    recruiterOffer: {},
    recruiterOffers: [],
    offerAppliedCandidates: [],
    candidateOffers: [],
  },
  messages: {
    conversations: [],
    conversation: {},
  },
  requestStatuses: {
    isFetchingAllOffers: false,
    isFetchingMyOffers: false,
    isFetchingOffer: false,
    isFetchingMyOffer: false,
    isFetchingOfferAppliedCandidates: false,
  },
};

export const appReducer = combineReducers({
  auth: authReducer,
  socket: socketReducers,
  offers: offersReducer,
  messages: messagesReducers,
  requestStatuses: combineReducers({
    isFetchingAllOffers,
    isFetchingMyOffers,
    isFetchingOffer,
    isFetchingMyOffer,
    isFetchingOfferAppliedCandidates,
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
