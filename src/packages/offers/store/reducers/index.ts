import { combineReducers } from "@reduxjs/toolkit";

import {
  allOffersReducer,
  offerReducer,
  isFetchingAllOffers,
  isFetchingOffer,
} from "./allOffersReducer";
import {
  recruiterOffersReducer,
  candidateOffersReducer,
  isFetchingMyOffers,
} from "./myOffersReducers";

export const offersReducer = combineReducers({
  allOffers: allOffersReducer,
  offer: offerReducer,
  recruiterOffers: recruiterOffersReducer,
  candidateOffers: candidateOffersReducer,
});

export { isFetchingAllOffers, isFetchingOffer, isFetchingMyOffers };
