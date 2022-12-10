import { Offer, CandidateOffers, CandidateOffersAPIValues } from "../models";

export const candidateOffersFromAPI = (
  data: CandidateOffersAPIValues,
): CandidateOffers =>
  Object.entries(data)
    ?.map(
      ([recruiterResponse, offers]): CandidateOffers =>
        offers.map((offer: Offer) => ({ ...offer, recruiterResponse })),
    )
    .flat();
