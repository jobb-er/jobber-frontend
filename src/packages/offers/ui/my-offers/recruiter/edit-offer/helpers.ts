import { Offer } from "packages/offers/models";
import { updateOffer } from "packages/offers/store/actions/myOffersActions";

export const editOfferFormSubmit = async (updatedOffer: Offer) => {
  const { bottomPayrange, topPayrange, currency } = updatedOffer;

  const updatedRecruiterOffer: Offer = {
    ...updatedOffer,
    bottomPayrange: bottomPayrange || 0,
    topPayrange: topPayrange || 0,
    currency: currency || "",
  };

  return await updateOffer(updatedRecruiterOffer);
};
