import { ChangeEvent } from "react";
import { FormikErrors } from "formik";

import {
  CandidateAdditionalFormValues,
  CandidateProfile,
} from "packages/profile/models";

export interface AdditionalFormProps {
  data: { additional: CandidateAdditionalFormValues };
  submitAction: (updatedAdditional: {
    additional: CandidateAdditionalFormValues;
  }) => void;
}

export interface AdditionalItemInnerFormProps {
  index: number;
  remove: <T>(index: number) => T | undefined;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  errors: FormikErrors<{
    additional: CandidateAdditionalFormValues;
  }>;
  values: {
    additional: CandidateAdditionalFormValues;
  };
  fetchCandidateProfile: () => void;
}

export interface AdditionalMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface AdditionalMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface AdditionalProps {
  candidateProfile: CandidateProfile;
  fetchCandidateProfile: () => void;
}
