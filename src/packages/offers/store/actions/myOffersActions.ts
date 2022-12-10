import axios from "axios";

import { actionBuilder } from "../../../../common/store";
import { axiosHeaders } from "../../../../common/constants";
import { offerToNewOfferAPI, offerToUpdateOfferAPI } from "../../converters";
import { Offer } from "../../models";
import ActionTypes from "../actionTypes";

export const createNewOffer = (data: Offer) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}/recruiter/offer`,
    offerToNewOfferAPI(data),
    axiosHeaders,
  );

export const fetchRecruiterOffer = (id: string) =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/recruiter/offer/${id}`, [
    ActionTypes.RECRUITER_OFFER_REQUEST,
    ActionTypes.RECRUITER_OFFER_SUCCESS,
    ActionTypes.RECRUITER_OFFER_FAILURE,
  ]);

export const fetchRecruiterOffers = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/recruiter/offer`, [
    ActionTypes.RECRUITER_OFFERS_REQUEST,
    ActionTypes.RECRUITER_OFFERS_SUCCESS,
    ActionTypes.RECRUITER_OFFERS_FAILURE,
  ]);

export const updateOffer = (data: Offer) =>
  axios.patch(
    `${process.env.REACT_APP_API_URL}/recruiter/offer/${data.id}`,
    offerToUpdateOfferAPI(data),
    axiosHeaders,
  );

export const fetchCandidateOffers = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/candidate/offer`, [
    ActionTypes.CANDIDATE_OFFERS_REQUEST,
    ActionTypes.CANDIDATE_OFFERS_SUCCESS,
    ActionTypes.CANDIDATE_OFFERS_FAILURE,
  ]);
