import { Auth } from "../../../app";
import { Offer } from "../../models";

export interface OfferDetailsMapState {
  auth: Auth;
  offers: { offer: Offer };
  requestStatuses: { isFetchingOffer: boolean };
}

export interface OfferDetailsMapStateReturn {
  auth: Auth;
  offer: Offer;
  isFetchingOffer: boolean;
}

export interface OfferDetailsProps {
  auth?: Auth;
  offer: Offer;
  isFetchingOffer: boolean;
  fetchOffer: (id: string) => void;
}

export interface OfferContentProps {
  offer: Offer;
}
