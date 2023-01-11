import { CandidateProfile } from "packages/profile/models";
import { Auth } from "packages/app";

export interface OtherCandidateProfileMapState {
  requestStatuses: { isFetchingProfile: boolean };
  profile: { otherCandidateProfile: CandidateProfile };
  auth: Auth;
}

export interface OtherCandidateProfileMapStateReturn {
  isFetchingProfile: boolean;
  otherCandidateProfile: CandidateProfile;
  auth: Auth;
}

export interface OtherCandidateProfileProps {
  isFetchingProfile: boolean;
  fetchOtherCandidateProfile: (id: string) => void;
  otherCandidateProfile: CandidateProfile;
  auth?: Auth;
}
