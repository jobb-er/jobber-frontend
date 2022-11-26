import { AnyAction } from "redux";

import { Offer, Offers } from "../../models";
import ActionTypes from "../actionTypes";

export const allOffersReducer = (
  state: Offers = [],
  action: AnyAction,
): Offers => {
  switch (action.type) {
    case ActionTypes.ALL_OFFERS_REQUEST:
      return state;
    case ActionTypes.ALL_OFFERS_SUCCESS:
      return action.payload;
    case ActionTypes.ALL_OFFERS_FAILURE:
      return [];
    default:
      return state;
  }
};

export const offerReducer = (
  state: Offer | Record<string, unknown> = {},
  action: AnyAction,
): Offer | Record<string, unknown> => {
  switch (action.type) {
    case ActionTypes.OFFER_REQUEST:
      return state;
    case ActionTypes.OFFER_SUCCESS:
      return action.payload;
    case ActionTypes.ALL_OFFERS_FAILURE:
      return {};
    default:
      return state;
  }
};
