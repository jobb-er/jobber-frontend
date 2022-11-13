import { RegisterValues } from "../../models";

export interface RegisterProps {
  onChangeScreen: () => void;
}

export interface RegisterFormValues extends RegisterValues {
  confirmPassword: string;
  acceptedTerms: boolean;
}
