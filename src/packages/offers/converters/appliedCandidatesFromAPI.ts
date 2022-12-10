import {
  AppliedCandidatesAPIValues,
  AppliedCandidates,
  AppliedCandidateAPIValues,
} from "../models";

export const appliedCandidatesFromAPI = (
  data: AppliedCandidatesAPIValues,
): AppliedCandidates =>
  Object.entries(data)
    ?.map(
      ([recruiterResponse, candidates]): AppliedCandidates =>
        candidates.map((candidate: AppliedCandidateAPIValues) => ({
          ...candidate,
          recruiterResponse,
        })),
    )
    .flat();
