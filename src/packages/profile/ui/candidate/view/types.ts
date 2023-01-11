import { CandidateProfile } from "packages/profile/models";

export interface ViewMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface ViewMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface ViewProps {
  candidateProfile: CandidateProfile;
}
