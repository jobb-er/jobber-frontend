import { Auth } from "../../../app";
import { Offer } from "../../models";

export interface OfferProps {
  offer: Offer;
}

export interface AllOffersMapState {
  auth: Auth;
}

export interface AllOffersProps {
  auth?: Auth;
}
