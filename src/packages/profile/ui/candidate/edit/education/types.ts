import { ChangeEvent } from "react";
import { FormikErrors } from "formik";

import {
  CandidateEducationFormValues,
  CandidateProfile,
} from "packages/profile/models/types";

export interface EducationFormProps {
  data: { education: CandidateEducationFormValues };
  submitAction: (updatedEducation: {
    education: CandidateEducationFormValues;
  }) => void;
}

export interface EducationItemInnerFormProps {
  index: number;
  remove: <T>(index: number) => T | undefined;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  errors: FormikErrors<{
    education: CandidateEducationFormValues;
  }>;
  values: {
    education: CandidateEducationFormValues;
  };
  fetchCandidateProfile: () => void;
}

export interface EducationMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface EducationMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface EducationProps {
  candidateProfile: CandidateProfile;
  fetchCandidateProfile: () => void;
}
