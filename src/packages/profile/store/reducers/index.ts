import { combineReducers } from "redux";

import {
  candidateProfileReducer,
  recruiterProfileReducer,
  isFetchingProfile,
} from "./profileReducers";

export const profileReducer = combineReducers({
  candidateProfile: candidateProfileReducer,
  recruiterProfile: recruiterProfileReducer,
});

export { isFetchingProfile };
