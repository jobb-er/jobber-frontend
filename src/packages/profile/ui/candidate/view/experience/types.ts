import { CandidateProfile } from "packages/profile/models/types";

export interface ExperienceMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface ExperienceMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface ExperienceProps {
  candidateProfile: CandidateProfile;
}
