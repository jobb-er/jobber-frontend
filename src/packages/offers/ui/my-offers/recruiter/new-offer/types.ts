import { Auth } from "../../../../../app";

export interface NewOfferMapState {
  auth: Auth;
}

export interface NewOfferProps {
  auth?: Auth;
}

export interface NewOfferFormProps {
  fetchMyOffers: () => void;
}
