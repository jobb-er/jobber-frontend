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
} from "packages/offers/store/reducers";
import {
  isFetchingConversationReducer,
  isFetchingConversationsReducer,
  messagesReducers,
} from "../../packages/chat/store/reducers";
import {
  profileReducer,
  isFetchingProfile,
} from "packages/profile/store/reducers";

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
  socket: socketReducers,
  offers: offersReducer,
  messages: messagesReducers,
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
