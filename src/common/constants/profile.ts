export const EXPERIENCE = "experience";
export const EDUCATION = "education";
export const ABOUT = "about";
export const ADDITIONAL = "additional";

export const TABS = [ABOUT, EXPERIENCE, EDUCATION, ADDITIONAL];

export const initialAboutFormValues = {
  avatar: null,
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  linkedin: "",
  portfolio: "",
  bio: "",
};

export const initialExperienceItemFormValues = {
  jobTitle: "",
  company: "",
  country: "",
  from: "",
  to: "",
  details: "",
};

export const initialExperienceFormValues = {
  experience: [initialExperienceItemFormValues],
};

export const initialEducationItemFormValues = {
  school: "",
  degree: "",
  name: "",
  from: "",
  to: "",
  details: "",
};

export const initialEducationFormValues = {
  education: [initialEducationItemFormValues],
};

export const initialAdditionalItemFormValues = {
  title: "",
  details: "",
};

export const initialAdditionalFormValues = {
  additional: [initialAdditionalItemFormValues],
};
