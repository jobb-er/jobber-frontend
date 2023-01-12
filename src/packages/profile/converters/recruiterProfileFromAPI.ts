import { RecruiterProfile, RecruiterProfileAPIValues } from "../models";

export const recruiterProfileFromAPI = (
  data: RecruiterProfileAPIValues,
): RecruiterProfile => ({
  firstName: data.firstName || "",
  lastName: data.lastName || "",
  email: data.email || "",
  avatar: data?.avatar,
  phoneNumber: data?.phoneNumber,
  country: data?.country || "",
  linkedin: data?.linkedin,
  company: data?.company,
});
