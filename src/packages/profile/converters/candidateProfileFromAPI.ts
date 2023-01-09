import {
  initialEducationItemFormValues,
  initialExperienceItemFormValues,
  initialAdditionalItemFormValues,
} from "common/constants";
import { CandidateProfile, CandidateProfileAPIValues } from "../models";

export const candidateProfileFromAPI = (
  data: CandidateProfileAPIValues,
): CandidateProfile => ({
  about: {
    firstName: data.candidate.firstName || "",
    lastName: data.candidate.lastName || "",
    avatar: data.candidate.avatar || "",
    email: data.candidate.email || "",
    phoneNumber: data.candidate.phoneNumber || "",
    country: data.candidate.country || "",
    linkedin: data.candidate.linkedin || "",
    portfolio: data.candidate.portfolio || "",
    bio: data.candidate.bio || "",
  },
  experience: data.experience?.length
    ? data.experience
    : [initialExperienceItemFormValues],
  education: data.education?.length
    ? data.education
    : [initialEducationItemFormValues],
  additional: data.additional?.length
    ? data.additional
    : [initialAdditionalItemFormValues],
});
