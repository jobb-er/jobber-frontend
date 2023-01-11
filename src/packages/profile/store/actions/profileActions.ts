import axios from "axios";

import { actionBuilder } from "common/store";
import { axiosHeaders } from "common/constants";
import {
  CandidateAboutFormValues,
  CandidateExperienceFormValues,
  CandidateEducationFormValues,
  CandidateAdditionalFormValues,
  RecruiterProfileFormValues,
} from "packages/profile/models";
import ActionTypes from "../actionTypes";

export const fetchRecruiterProfile = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/user/recruiter`, [
    ActionTypes.RECRUITER_PROFILE_REQUEST,
    ActionTypes.RECRUITER_PROFILE_SUCCESS,
    ActionTypes.RECRUITER_PROFILE_FAILURE,
  ]);

export const updateRecruiterProfile = (
  updatedProfile: RecruiterProfileFormValues,
) =>
  axios.patch(
    `${process.env.REACT_APP_API_URL}/recruiter`,
    updatedProfile,
    axiosHeaders,
  );

export const fetchCandidateProfile = () =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/user/candidate`, [
    ActionTypes.CANDIDATE_PROFILE_REQUEST,
    ActionTypes.CANDIDATE_PROFILE_SUCCESS,
    ActionTypes.CANDIDATE_PROFILE_FAILURE,
  ]);

export const fetchOtherCandidateProfile = (id: string) =>
  actionBuilder(`${process.env.REACT_APP_API_URL}/user/candidate?id=${id}`, [
    ActionTypes.OTHER_CANDIDATE_PROFILE_REQUEST,
    ActionTypes.OTHER_CANDIDATE_PROFILE_SUCCESS,
    ActionTypes.OTHER_CANDIDATE_PROFILE_FAILURE,
  ]);

export const updateCandidateProfileAbout = (
  updatedAbout: CandidateAboutFormValues,
) =>
  axios.patch(
    `${process.env.REACT_APP_API_URL}/candidate`,
    updatedAbout,
    axiosHeaders,
  );

export const updateCandidateProfileExperience = (
  updatedExperience: CandidateExperienceFormValues,
) =>
  axios.put(
    `${process.env.REACT_APP_API_URL}/candidate/experience`,
    updatedExperience,
    axiosHeaders,
  );

export const deleteCandidateProfileExperienceItem = (id: string) =>
  axios.delete(
    `${process.env.REACT_APP_API_URL}/candidate/experience/${id}`,
    axiosHeaders,
  );

export const updateCandidateProfileEducation = (
  updatedEducation: CandidateEducationFormValues,
) =>
  axios.put(
    `${process.env.REACT_APP_API_URL}/candidate/education`,
    updatedEducation,
    axiosHeaders,
  );

export const deleteCandidateProfileEducationItem = (id: string) =>
  axios.delete(
    `${process.env.REACT_APP_API_URL}/candidate/education/${id}`,
    axiosHeaders,
  );

export const updateCandidateProfileAdditional = (
  updatedAdditional: CandidateAdditionalFormValues,
) =>
  axios.put(
    `${process.env.REACT_APP_API_URL}/candidate/additional`,
    updatedAdditional,
    axiosHeaders,
  );

export const deleteCandidateProfileAdditionalItem = (id: string) =>
  axios.delete(
    `${process.env.REACT_APP_API_URL}/candidate/additional/${id}`,
    axiosHeaders,
  );
