import { Offer, UpdateOfferAPIValues } from "../models";

export const offerToUpdateOfferAPI = (data: Offer): UpdateOfferAPIValues => ({
  title: data.title,
  companyName: data.companyName,
  location: data.location,
  experience: data.experience,
  bottomPayrange: data.bottomPayrange,
  topPayrange: data.topPayrange,
  currency: data.currency,
  description: data.description,
  status: data.status,
});
