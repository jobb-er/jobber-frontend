import axios from "axios";

import { actionBuilder } from "common/store";
import { axiosHeaders } from "common/constants";
import { offerToNewOfferAPI, offerToUpdateOfferAPI } from "../../converters";
import { Offer, RecruiterResponse } from "../../models";
import ActionTypes from "../actionTypes";

export const createNewOffer = (data: Offer) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}/recruiter/offer`,
    offerToNewOfferAPI(data),
    axiosHeaders,
  );

export const updateOffer = (data: Offer) =>
  axios.patch(
    `${process.env.REACT_APP_API_URL}/recruiter/offer/${data.id}`,
    offerToUpdateOfferAPI(data),
    axiosHeaders,
  );

export const fetchRecruiterOffer = (offerId: string) =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/recruiter/offer/${offerId}`, [
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

export const fetchAppliedCandidatesForOffer = (offerId: string) =>
  actionBuilder(
    `${process.env.REACT_APP_API_URL}/recruiter/offer/${offerId}/candidate`,
    [
      ActionTypes.OFFER_CANDIDATES_REQUEST,
      ActionTypes.OFFER_CANDIDATES_SUCCESS,
      ActionTypes.OFFER_CANDIDATES_FAILURE,
    ],
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

export const changeCandidateStatusOfApplication = (
  offerId: string,
  candidateId: string,
  status: RecruiterResponse,
) =>
  axios.patch(
    `${process.env.REACT_APP_API_URL}/recruiter/offer/${offerId}/apply?status=${status}&idCandidate=${candidateId}`,
    undefined,
    axiosHeaders,
  );
