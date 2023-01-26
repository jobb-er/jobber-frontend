export interface OfferFormValues {
  title: string;
  companyName: string;
  location: string;
  experience: string;
  bottomPayrange?: number;
  topPayrange?: number;
  currency?: string;
  description: string;
}

export interface NewOfferAPIValues {
  title: string;
  companyName: string;
  location: string;
  experience: string;
  bottomPayrange?: number;
  topPayrange?: number;
  currency?: string;
  description: string;
}

export interface UpdateOfferAPIValues {
  title: string;
  companyName: string;
  location: string;
  experience: string;
  bottomPayrange?: number;
  topPayrange?: number;
  currency?: string;
  description: string;
  status?: string;
}

export interface Offer {
  id: string;
  creationDate?: string;
  title: string;
  companyName: string;
  location: string;
  experience: string;
  bottomPayrange?: number;
  topPayrange?: number;
  currency?: string;
  description: string;
  status: "open" | "closed";
  isNew?: boolean;
  recruiterId?: string;
}

export type Offers = Offer[];

export interface AppliedCandidateAPIValues {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
}

export type RecruiterResponse = "accepted" | "rejected" | "waiting";

export interface AppliedCandidate {
  avatar?: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  recruiterResponse: RecruiterResponse;
}

export type AppliedCandidates = AppliedCandidate[];

export interface AppliedCandidatesAPIValues {
  waiting: AppliedCandidateAPIValues;
  accepted: AppliedCandidateAPIValues;
  rejected: AppliedCandidateAPIValues;
}

export interface CandidateOffersAPIValues {
  waiting: Offers;
  accepted: Offers;
  rejected: Offers;
}

export interface CandidateOffer {
  id: string;
  creationDate?: string;
  title: string;
  companyName: string;
  location: string;
  experience: string;
  bottomPayrange?: number;
  topPayrange?: number;
  currency?: string;
  description: string;
  status: "open" | "closed";
  isNew?: boolean;
  recruiterResponse: RecruiterResponse;
}

export type CandidateOffers = CandidateOffer[];
