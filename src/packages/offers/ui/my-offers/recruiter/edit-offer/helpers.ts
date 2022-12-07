import { Offer } from "packages/offers/models";
import { isEmptyString } from "common/utils";
import { updateOffer } from "packages/offers/store/actions/myOffersActions";

export const editOfferFormSubmit = async (updatedOffer: Offer) => {
  const { bottomPayrange, topPayrange } = updatedOffer;

  const updatedRecruiterOffer: Offer = {
    ...updatedOffer,
    bottomPayrange: isEmptyString(bottomPayrange) ? 0 : bottomPayrange,
    topPayrange: isEmptyString(topPayrange) ? 0 : topPayrange,
  };

  return await updateOffer(updatedRecruiterOffer);
};
