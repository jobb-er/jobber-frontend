import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "packages/app/store/reducers/authReducer";
import {
  offersReducer,
  isFetchingAllOffers,
  isFetchingMyOffers,
  isFetchingOffer,
  isFetchingMyOffer,
  isFetchingOfferAppliedCandidates,
} from "packages/offers/store/reducers";
import {
  profileReducer,
  isFetchingProfile,
} from "packages/profile/store/reducers";
import ActionTypes from "./actionTypes";

const initialState = {
  auth: {},
  offers: {
    allOffers: [],
    offer: {},
    recruiterOffer: {},
    recruiterOffers: [],
    offerAppliedCandidates: [],
    candidateOffers: [],
  },
  profile: {
    candidateProfile: {},
    recruiterProfile: {},
  },
  requestStatuses: {
    isFetchingAllOffers: false,
    isFetchingMyOffers: false,
    isFetchingOffer: false,
    isFetchingMyOffer: false,
    isFetchingOfferAppliedCandidates: false,
    isFetchingProfile: false,
  },
};

export const appReducer = combineReducers({
  auth: authReducer,
  offers: offersReducer,
  profile: profileReducer,
  requestStatuses: combineReducers({
    isFetchingAllOffers,
    isFetchingMyOffers,
    isFetchingOffer,
    isFetchingMyOffer,
    isFetchingOfferAppliedCandidates,
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
