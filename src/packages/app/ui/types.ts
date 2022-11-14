import { ReactElement } from "react";

import { Auth } from "../models";

export interface ContainerProps {
  children: ReactElement | ReactElement[];
  auth: Auth;
  fetchAuth: () => void;
}

export interface AuthContainerProps {
  children: ReactElement;
  auth: Auth;
}

export interface AuthContainerMapState {
  auth: Auth;
}

export interface ContainerMapState {
  auth: Auth;
}
