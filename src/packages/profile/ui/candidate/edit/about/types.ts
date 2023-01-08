import {
  CandidateAboutFormValues,
  CandidateProfile,
} from "packages/profile/models/types";

export interface AboutFormikProps {
  data: CandidateAboutFormValues;
}

export interface AboutFormProps {
  data: CandidateAboutFormValues;
  submitAction: (updatedAbout: CandidateAboutFormValues) => void;
}

export interface AboutMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface AboutMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface AboutProps {
  candidateProfile: CandidateProfile;
  fetchCandidateProfile: () => void;
}
