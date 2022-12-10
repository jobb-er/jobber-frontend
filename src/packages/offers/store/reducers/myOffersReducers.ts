import { AnyAction } from "redux";

import { candidateOffersFromAPI } from "../../converters";
import { Offer, Offers } from "../../models";
import ActionTypes from "../actionTypes";

export const recruiterOfferReducer = (
  state: Offer | Record<string, unknown> = {},
  action: AnyAction,
): Offer | Record<string, unknown> => {
  switch (action.type) {
    case ActionTypes.RECRUITER_OFFER_REQUEST:
      return state;
    case ActionTypes.RECRUITER_OFFER_SUCCESS:
      return action.payload?.offer;
    case ActionTypes.RECRUITER_OFFER_FAILURE:
      return {};
    default:
      return state;
  }
};

export const recruiterOffersReducer = (
  state: Offers = [],
  action: AnyAction,
): Offers => {
  switch (action.type) {
    case ActionTypes.RECRUITER_OFFERS_REQUEST:
      return state;
    case ActionTypes.RECRUITER_OFFERS_SUCCESS:
      return action.payload.offers;
    case ActionTypes.RECRUITER_OFFERS_FAILURE:
      return [];
    default:
      return state;
  }
};

export const candidateOffersReducer = (
  state: Offers = [],
  action: AnyAction,
): Offers => {
  switch (action.type) {
    case ActionTypes.CANDIDATE_OFFERS_REQUEST:
      return state;
    case ActionTypes.CANDIDATE_OFFERS_SUCCESS:
      return candidateOffersFromAPI(action.payload.offers);
    case ActionTypes.CANDIDATE_OFFERS_FAILURE:
      return [];
    default:
      return state;
  }
};

export const isFetchingMyOffers = (state = false, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.RECRUITER_OFFERS_REQUEST:
    case ActionTypes.CANDIDATE_OFFERS_REQUEST:
      return true;
    case ActionTypes.CANDIDATE_OFFERS_SUCCESS:
    case ActionTypes.CANDIDATE_OFFERS_FAILURE:
    case ActionTypes.RECRUITER_OFFERS_SUCCESS:
    case ActionTypes.RECRUITER_OFFERS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const isFetchingMyOffer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.RECRUITER_OFFER_REQUEST:
      return true;
    case ActionTypes.RECRUITER_OFFER_SUCCESS:
    case ActionTypes.RECRUITER_OFFER_FAILURE:
      return false;
    default:
      return state;
  }
};
