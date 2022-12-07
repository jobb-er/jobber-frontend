export interface NewOfferValues {
  title: string;
  companyName: string;
  location: string;
  experience: string;
  bottomPayrange?: number;
  topPayrange?: number;
  currency?: string;
  description: string;
}

export interface EditOfferValues {
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
  status: string;
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
}

export type Offers = Offer[];
