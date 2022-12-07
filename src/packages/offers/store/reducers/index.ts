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
  isFetchingMyOffers,
  isFetchingMyOffer,
} from "./myOffersReducers";

export const offersReducer = combineReducers({
  allOffers: allOffersReducer,
  offer: offerReducer,
  recruiterOffer: recruiterOfferReducer,
  recruiterOffers: recruiterOffersReducer,
  candidateOffers: candidateOffersReducer,
});

export { isFetchingAllOffers, isFetchingOffer, isFetchingMyOffers, isFetchingMyOffer };
