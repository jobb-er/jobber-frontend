import { Offer, Offers } from "../../../models";

export interface OfferProps {
  offer: Offer;
  fetchMyOffers: () => void;
}

export interface RecruiterOffersProps {
  fetchMyOffers: () => void;
  offers: Offers;
  isFetchingMyOffers: boolean;
}

export interface RecruiterOffersMapState {
  offers: { recruiterOffers: Offers };
  requestStatuses: { isFetchingMyOffers: boolean };
}

export interface RecruiterOffersMapStateReturn {
  offers: Offers;
  isFetchingMyOffers: boolean;
}
