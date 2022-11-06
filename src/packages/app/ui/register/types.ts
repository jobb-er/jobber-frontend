export interface RegisterProps {
  onChangeScreen: () => void;
}

export interface RegisterApiValues {
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  email: string;
}

export interface RegisterFormValues extends RegisterApiValues {
  confirmPassword: string;
  acceptedTerms: boolean;
}
