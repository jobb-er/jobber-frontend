import { Dispatch, SetStateAction } from "react";

import { Offer, Offers, AppliedCandidates } from "../../../models";

export interface OfferProps {
  offer: Offer;
  fetchMyOffers: () => void;
  fetchAppliedCandidatesForOffer: any;
  offerAppliedCandidates: AppliedCandidates;
  isFetchingOfferAppliedCandidates: boolean;
  expandedAppliedCandidatesOffer: string;
  setExpandedAppliedCandidatesOffer: Dispatch<SetStateAction<string>>;
}

export interface OfferMapState {
  offers: { offerAppliedCandidates: AppliedCandidates };
  requestStatuses: { isFetchingOfferAppliedCandidates: boolean };
}

export interface OfferMapStateReturn {
  offerAppliedCandidates: AppliedCandidates;
  isFetchingOfferAppliedCandidates: boolean;
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

export interface OfferAppliedCandidatesProps {
  candidates: AppliedCandidates;
  offerId: string;
  fetchAppliedCandidatesForOffer: any;
}
