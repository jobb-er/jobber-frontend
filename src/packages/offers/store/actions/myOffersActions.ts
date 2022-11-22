import axios from "axios";

import { axiosHeaders } from "../../../../common/constants";
import { newOfferToAPI } from "../../converters";
import { NewOfferValues } from "../../models";

export const createNewOffer = (data: NewOfferValues) =>
  axios.post(
    `${process.env.REACT_APP_API_URL}/recruiter/offer`,
    newOfferToAPI(data),
    axiosHeaders,
  );
