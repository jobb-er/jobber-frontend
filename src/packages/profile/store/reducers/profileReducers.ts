import { AnyAction } from "redux";

import { CandidateProfile, RecruiterProfile } from "packages/profile/models";
import {
  candidateProfileFromAPI,
  recruiterProfileFromAPI,
} from "packages/profile/converters";
import ActionTypes from "../actionTypes";

export const recruiterProfileReducer = (
  state: RecruiterProfile | Record<string, unknown> = {},
  action: AnyAction,
): RecruiterProfile | Record<string, unknown> => {
  switch (action.type) {
    case ActionTypes.RECRUITER_PROFILE_REQUEST:
      return state;
    case ActionTypes.RECRUITER_PROFILE_SUCCESS:
      return recruiterProfileFromAPI(action.payload?.recruiter);
    case ActionTypes.RECRUITER_PROFILE_FAILURE:
      return {};
    default:
      return state;
  }
};

export const candidateProfileReducer = (
  state: CandidateProfile | Record<string, unknown> = {},
  action: AnyAction,
): CandidateProfile | Record<string, unknown> => {
  switch (action.type) {
    case ActionTypes.CANDIDATE_PROFILE_REQUEST:
      return state;
    case ActionTypes.CANDIDATE_PROFILE_SUCCESS:
      return candidateProfileFromAPI(action.payload);
    case ActionTypes.CANDIDATE_PROFILE_FAILURE:
      return {};
    default:
      return state;
  }
};

export const isFetchingProfile = (state = false, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.CANDIDATE_PROFILE_REQUEST:
    case ActionTypes.RECRUITER_PROFILE_REQUEST:
      return true;
    case ActionTypes.CANDIDATE_PROFILE_SUCCESS:
    case ActionTypes.CANDIDATE_PROFILE_FAILURE:
    case ActionTypes.RECRUITER_PROFILE_SUCCESS:
    case ActionTypes.RECRUITER_PROFILE_FAILURE:
      return false;
    default:
      return state;
  }
};
