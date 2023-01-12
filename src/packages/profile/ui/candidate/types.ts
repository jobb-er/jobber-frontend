export interface CandidateProfileMapState {
  requestStatuses: { isFetchingProfile: boolean };
}

export interface CandidateProfileMapStateReturn {
  isFetchingProfile: boolean;
}

export interface CandidateProfileProps {
  isFetchingProfile: boolean;
  fetchCandidateProfile: () => void;
}
