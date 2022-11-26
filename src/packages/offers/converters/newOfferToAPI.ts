import { NewOfferValues, NewOfferAPIValues } from "../models";

export const newOfferToAPI = (data: NewOfferValues): NewOfferAPIValues => ({
  title: data.title,
  companyName: data.companyName,
  location: data.location,
  experience: data.experience,
  bottomPayrange: data.bottomPayrange,
  topPayrange: data.topPayrange,
  currency: data.currency,
  description: data.description,
});
