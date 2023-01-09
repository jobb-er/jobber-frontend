import {
  RecruiterProfile,
  RecruiterProfileFormValues,
} from "packages/profile/models";

export interface RecruiterProfileMapState {
  requestStatuses: { isFetchingProfile: boolean };
  profile: { recruiterProfile: RecruiterProfile };
}

export interface RecruiterProfileMapStateReturn {
  isFetchingProfile: boolean;
  recruiterProfile: RecruiterProfile;
}

export interface RecruiterProfileProps {
  isFetchingProfile: boolean;
  recruiterProfile: RecruiterProfile;
  fetchRecruiterProfile: () => void;
}

export interface FormikProps {
  data: RecruiterProfileFormValues;
}

export interface FormProps {
  data: RecruiterProfileFormValues;
  submitAction: (updatedProfile: RecruiterProfileFormValues) => void;
}
