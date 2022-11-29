import { Offer, Offers } from "../../../models";

export interface OfferProps {
  offer: Offer;
}

export interface CandidateOffersProps {
  fetchMyOffers: () => void;
  offers: Offers;
  isFetchingMyOffers: boolean;
}

export interface CandidateOffersMapState {
  offers: { candidateOffers: Offers };
  requestStatuses: { isFetchingMyOffers: boolean };
}

export interface CandidateOffersMapStateReturn {
  offers: Offers;
  isFetchingMyOffers: boolean;
}
