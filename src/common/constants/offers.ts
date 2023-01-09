import { Offer } from "packages/offers/models";

export const initialNewOfferFormValues: Offer = {
  id: "",
  title: "",
  companyName: "",
  location: "",
  experience: "",
  bottomPayrange: undefined,
  topPayrange: undefined,
  currency: undefined,
  description: "",
  status: "open",
  isNew: true,
};
