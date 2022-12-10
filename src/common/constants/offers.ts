import { Offer } from "packages/offers/models/types";

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
