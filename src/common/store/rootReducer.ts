import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";

import { authReducer, socketReducer } from "packages/app/store/reducers";
import {
  offersReducer,
  isFetchingAllOffers,
  isFetchingMyOffers,
  isFetchingOffer,
  isFetchingMyOffer,
  isFetchingOfferAppliedCandidates,
} from "packages/offers/store/reducers";
import {
  isFetchingConversationReducer,
  isFetchingConversationsReducer,
  messagesReducer,
} from "packages/chat/store/reducers";
import {
  profileReducer,
  isFetchingProfile,
} from "packages/profile/store/reducers";
import ActionTypes from "./actionTypes";

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
  profile: {
    candidateProfile: {},
    otherCandidateProfile: {},
    recruiterProfile: {},
  },
  requestStatuses: {
    isFetchingAllOffers: false,
    isFetchingMyOffers: false,
    isFetchingOffer: false,
    isFetchingMyOffer: false,
    isFetchingOfferAppliedCandidates: false,
    isFetchingConversationReducer: false,
    isFetchingConversationsReducer: false,
    isFetchingProfile: false,
  },
};

export const appReducer = combineReducers({
  auth: authReducer,
  socket: socketReducer,
  offers: offersReducer,
  messages: messagesReducer,
  profile: profileReducer,
  requestStatuses: combineReducers({
    isFetchingAllOffers,
    isFetchingMyOffers,
    isFetchingOffer,
    isFetchingMyOffer,
    isFetchingOfferAppliedCandidates,
    isFetchingConversationReducer,
    isFetchingConversationsReducer,
    isFetchingProfile,
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
