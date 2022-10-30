export interface RegisterProps {
  onChangeScreen: () => void;
}

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  role: string;
  email: string;
  acceptedTerms: boolean;
}
