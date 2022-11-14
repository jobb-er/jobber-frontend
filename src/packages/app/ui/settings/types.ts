import { Auth } from "../../models";

export interface SettingsMapState {
  auth: Auth;
}

export interface SettingsProps {
  auth?: Auth;
}
