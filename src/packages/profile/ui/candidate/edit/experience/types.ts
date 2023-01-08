import { ChangeEvent } from "react";
import { FormikErrors } from "formik";

import {
  CandidateExperienceFormValues,
  CandidateProfile,
} from "packages/profile/models/types";

export interface ExperienceFormProps {
  data: { experience: CandidateExperienceFormValues };
  submitAction: (updatedExperience: {
    experience: CandidateExperienceFormValues;
  }) => void;
}

export interface ExperienceItemInnerFormProps {
  index: number;
  remove: <T>(index: number) => T | undefined;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  errors: FormikErrors<{
    experience: CandidateExperienceFormValues;
  }>;
  values: {
    experience: CandidateExperienceFormValues;
  };
  fetchCandidateProfile: () => void;
}

export interface ExperienceMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface ExperienceMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface ExperienceProps {
  candidateProfile: CandidateProfile;
  fetchCandidateProfile: () => void;
}
