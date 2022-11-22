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

export interface NewOfferAPIValues {
  title: string;
  companyName: string;
  location: string;
  experience: string;
  bottomPayrange: number;
  topPayrange: number;
  currency: string;
  description: string;
}
