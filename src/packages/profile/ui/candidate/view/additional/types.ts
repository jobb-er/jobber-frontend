import { CandidateProfile } from "packages/profile/models/types";

export interface AdditionalMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface AdditionalMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface AdditionalProps {
  candidateProfile: CandidateProfile;
}
