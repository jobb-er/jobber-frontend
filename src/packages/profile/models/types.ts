// recruiter profile form
export interface RecruiterProfileFormValues {
  firstName: string;
  lastName: string;
  avatar?: File | null;
  email: string;
  phoneNumber: string;
  country: string;
  linkedin?: string;
  companyName?: string;
}

// recruiter profile view
export interface RecruiterProfile {
  firstName: string;
  lastName: string;
  avatar?: File | null;
  email: string;
  phoneNumber: string;
  country: string;
  linkedin?: string;
  companyName?: string;
}

// candidate profile form
export interface CandidateAboutFormValues {
  avatar?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  linkedin?: string;
  portfolio?: string;
  bio?: string;
}

export interface CandidateExperienceItemFormValues {
  id?: string;
  jobTitle: string;
  company: string;
  country: string;
  from: string;
  to: string;
  details: string;
}
export type CandidateExperienceFormValues = CandidateExperienceItemFormValues[];

export interface CandidateEducationItemFormValues {
  id?: string;
  school: string;
  degree: string;
  name: string;
  from: string;
  to: string;
  details?: string;
}
export type CandidateEducationFormValues = CandidateEducationItemFormValues[];

export interface CandidateAdditionalItemFormValues {
  id?: string;
  title: string;
  details: string;
}
export type CandidateAdditionalFormValues = CandidateAdditionalItemFormValues[];

// candidate profile view
export interface CandidateProfile {
  about: {
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
    linkedin?: string;
    portfolio?: string;
    bio?: string;
  };
  experience: CandidateExperienceFormValues;
  education: CandidateEducationFormValues;
  additional: CandidateAdditionalFormValues;
}

export interface CandidateProfileAPIValues {
  candidate: {
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    country: string;
    linkedin?: string;
    portfolio?: string;
    bio?: string;
  };
  experience: CandidateExperienceFormValues;
  education: CandidateEducationFormValues;
  additional: CandidateAdditionalFormValues;
}
