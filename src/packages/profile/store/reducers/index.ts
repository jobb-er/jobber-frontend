import { combineReducers } from "redux";

import {
  candidateProfileReducer,
  otherCandidateProfileReducer,
  recruiterProfileReducer,
  isFetchingProfile,
} from "./profileReducers";

export const profileReducer = combineReducers({
  candidateProfile: candidateProfileReducer,
  recruiterProfile: recruiterProfileReducer,
  otherCandidateProfile: otherCandidateProfileReducer,
});

export { isFetchingProfile };
