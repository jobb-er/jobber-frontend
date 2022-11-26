import axios from "axios";

import { actionBuilder } from "../../../../common/store";
import { axiosHeaders } from "../../../../common/constants";
import { newOfferToAPI } from "../../converters";
import { NewOfferValues } from "../../models";
import ActionTypes from "../actionTypes";

export const createNewOffer = (data: NewOfferValues) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}/recruiter/offer`,
    newOfferToAPI(data),
    axiosHeaders,
  );

export const fetchRecruiterOffers = () =>
  // TODO change endpoint???
  actionBuilder(`${process.env.REACT_APP_API_URL}/recruiter/offers`, [
    ActionTypes.RECRUITER_OFFERS_REQUEST,
    ActionTypes.RECRUITER_OFFERS_SUCCESS,
    ActionTypes.RECRUITER_OFFERS_FAILURE,
  ]);

export const fetchCandidateOffers = () =>
  // TODO change endpoint???
  actionBuilder(`${process.env.REACT_APP_API_URL}/candidate/offers`, [
    ActionTypes.CANDIDATE_OFFERS_REQUEST,
    ActionTypes.CANDIDATE_OFFERS_SUCCESS,
    ActionTypes.CANDIDATE_OFFERS_FAILURE,
  ]);
