import { AnyAction } from "redux";

import { Offers } from "../../models";
import ActionTypes from "../actionTypes";

export const recruiterOffersReducer = (
  state: Offers = [],
  action: AnyAction,
): Offers => {
  switch (action.type) {
    case ActionTypes.RECRUITER_OFFERS_REQUEST:
      return state;
    case ActionTypes.RECRUITER_OFFERS_SUCCESS:
      return action.payload;
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
      return action.payload;
    case ActionTypes.CANDIDATE_OFFERS_FAILURE:
      return [];
    default:
      return state;
  }
};
