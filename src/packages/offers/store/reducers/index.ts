import { combineReducers } from "@reduxjs/toolkit";

import { allOffersReducer, offerReducer } from "./allOffersReducer";
import {
  recruiterOffersReducer,
  candidateOffersReducer,
} from "./myOffersReducers";

export const offersReducer = combineReducers({
  allOffers: allOffersReducer,
  offer: offerReducer,
  recruiterOffers: recruiterOffersReducer,
  candidateOffers: candidateOffersReducer,
});
