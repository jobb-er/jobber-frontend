import { Dispatch, SetStateAction } from "react";

import { Auth } from "../../models";

export interface SettingsMapState {
  auth: Auth;
}

export interface SettingsProps {
  auth?: Auth;
  logout: () => any;
  resetStore: () => any;
}

export interface SettingsFormValues {
  password: string;
  confirmPassword: string;
  email: string;
}

export interface SettingsFormProps {
  setNewAccountData: Dispatch<SetStateAction<SettingsFormValues>>;
}
