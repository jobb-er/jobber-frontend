import { CandidateProfile } from "packages/profile/models";

export interface EducationMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface EducationMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface EducationProps {
  candidateProfile: CandidateProfile;
}
