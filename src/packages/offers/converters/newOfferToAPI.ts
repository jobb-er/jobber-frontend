import { NewOfferValues, NewOfferAPIValues } from "../models";

export const newOfferToAPI = (data: NewOfferValues): NewOfferAPIValues => ({
  title: data.title,
  companyName: data.companyName,
  location: data.location,
  experience: data.experience,
  bottomPayrange: data.bottomPayrange || 0,
  topPayrange: data.topPayrange || 0,
  currency: data.currency || "",
  description: data.description,
});
