import { Offer } from "packages/offers/models";
import { createNewOffer } from "packages/offers/store/actions/myOffersActions";

export const newOfferFormSubmit = async (offer: Offer) => {
  return await createNewOffer(offer);
};
