export interface OfferTempModel {
  id: string;
  title: string;
  company: string;
  location?: string;
  bottomPayRange?: number;
  upperPayRange?: number;
  currency?: string;
  isNew?: boolean;
}

export interface OfferProps {
  offer: OfferTempModel;
}
