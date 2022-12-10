import { combineReducers } from "@reduxjs/toolkit";

import {
  allOffersReducer,
  offerReducer,
  isFetchingAllOffers,
  isFetchingOffer,
} from "./allOffersReducer";
import {
  recruiterOfferReducer,
  recruiterOffersReducer,
  candidateOffersReducer,
  offerAppliedCandidatesReducer,
  isFetchingMyOffers,
  isFetchingMyOffer,
  isFetchingOfferAppliedCandidates,
} from "./myOffersReducers";

export const offersReducer = combineReducers({
  allOffers: allOffersReducer,
  offer: offerReducer,
  recruiterOffer: recruiterOfferReducer,
  recruiterOffers: recruiterOffersReducer,
  offerAppliedCandidates: offerAppliedCandidatesReducer,
  candidateOffers: candidateOffersReducer,
});

export {
  isFetchingAllOffers,
  isFetchingOffer,
  isFetchingMyOffers,
  isFetchingMyOffer,
  isFetchingOfferAppliedCandidates,
};
