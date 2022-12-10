import { CandidateOffer, CandidateOffers } from "../../../models";

export interface OfferProps {
  offer: CandidateOffer;
}

export interface CandidateOffersProps {
  fetchMyOffers: () => void;
  offers: CandidateOffers;
  isFetchingMyOffers: boolean;
}

export interface CandidateOffersMapState {
  offers: { candidateOffers: CandidateOffers };
  requestStatuses: { isFetchingMyOffers: boolean };
}

export interface CandidateOffersMapStateReturn {
  offers: CandidateOffers;
  isFetchingMyOffers: boolean;
}
