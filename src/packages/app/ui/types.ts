import { ReactElement } from "react";

import { Auth } from "../models";

export interface ContainerProps {
  children: ReactElement | ReactElement[];
}

export interface AuthContainerProps {
  children: ReactElement;
  auth: Auth;
}

export interface AuthContainerMapState {
  auth: Auth;
}
