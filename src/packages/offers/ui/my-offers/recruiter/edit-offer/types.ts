import { Offer } from "packages/offers/models";
import { Auth } from "packages/app";

export interface EditOfferFormValues {
  recruiterOffer: Offer;
}

export interface EditOfferMapState {
  auth: Auth;
  offers: { recruiterOffer: Offer };
  requestStatuses: { isFetchingMyOffer: boolean };
}

export interface EditOfferMapStateReturn {
  auth: Auth;
  recruiterOffer: Offer;
  isFetchingMyOffer: boolean;
}

export interface EditOfferProps {
  auth: Auth;
  recruiterOffer: Offer;
  isFetchingMyOffer: boolean;
  fetchRecruiterOffer: (id: string) => void;
}

export interface EditOfferFormProps {
  recruiterOffer: Offer;
  fetchMyOffers: () => void;
}
