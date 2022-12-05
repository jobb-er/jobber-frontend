import axios from "axios";

import { actionBuilder } from "../../../../common/store";
import { axiosHeaders } from "../../../../common/constants";
import { newOfferToAPI, updateOfferToAPI } from "../../converters";
import { NewOfferValues, Offer } from "../../models";
import ActionTypes from "../actionTypes";

export const createNewOffer = (data: NewOfferValues) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}/recruiter/offer`,
    newOfferToAPI(data),
    axiosHeaders,
  );

export const fetchRecruiterOffers = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/recruiter/offer`, [
    ActionTypes.RECRUITER_OFFERS_REQUEST,
    ActionTypes.RECRUITER_OFFERS_SUCCESS,
    ActionTypes.RECRUITER_OFFERS_FAILURE,
  ]);

export const updateOffer = (data: Offer) =>
  axios.patch(
    `${process.env.REACT_APP_API_URL}/recruiter/offer/${data.id}`,
    updateOfferToAPI(data),
    axiosHeaders,
  );

export const fetchCandidateOffers = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/candidate/offer`, [
    ActionTypes.CANDIDATE_OFFERS_REQUEST,
    ActionTypes.CANDIDATE_OFFERS_SUCCESS,
    ActionTypes.CANDIDATE_OFFERS_FAILURE,
  ]);

export const applyForOffer = (offerId: string) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}/candidate/offer/${offerId}/apply`,
    undefined,
    axiosHeaders,
  );
