import { actionBuilder } from "../../../../common/store";
import ActionTypes from "../actionTypes";

export const fetchAllOffers = () =>
  // TODO change endpoint???
  actionBuilder(`${process.env.REACT_APP_API_URL}/all-offers`, [
    ActionTypes.ALL_OFFERS_REQUEST,
    ActionTypes.ALL_OFFERS_SUCCESS,
    ActionTypes.ALL_OFFERS_FAILURE,
  ]);

export const fetchOffer = (id: string) =>
  // TODO change endpoint???
  actionBuilder(`${process.env.REACT_APP_API_URL}/offer/${id}`, [
    ActionTypes.OFFER_REQUEST,
    ActionTypes.OFFER_SUCCESS,
    ActionTypes.OFFER_FAILURE,
  ]);
