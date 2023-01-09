import { CandidateProfile } from "packages/profile/models";

export interface ExperienceMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface ExperienceMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface ExperienceProps {
  candidateProfile: CandidateProfile;
}
