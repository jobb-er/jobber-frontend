import { Auth } from "../../app";

export interface ProfileMapState {
  auth: Auth;
}

export interface ProfileProps {
  auth?: Auth;
}
