import { Auth } from "../../../app";
import { Offer, Offers } from "../../models";

export interface OfferProps {
  offer: Offer;
}

export interface AllOffersMapState {
  auth: Auth;
  offers: { allOffers: Offers };
  requestStatuses: { isFetchingAllOffers: boolean };
}

export interface AllOffersMapStateReturn {
  auth: Auth;
  allOffers: Offers;
  isFetchingAllOffers: boolean;
}

export interface AllOffersProps {
  auth?: Auth;
  allOffers: Offers;
  isFetchingAllOffers: boolean;
  fetchAllOffers: () => void;
}
