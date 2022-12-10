import { AxiosResponse } from "axios";
import { Offer } from "packages/offers/models";

export interface OfferFormikProps {
  offer: Offer;
}

export interface OfferFormProps {
  offer: Offer;
  submitAction: (updatedOffer: Offer) => Promise<AxiosResponse<any, any>>;
  fetchMyOffers: () => void;
}
