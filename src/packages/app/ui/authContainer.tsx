import { ReactElement } from "react";

import Login from "./login";
import { AuthContainerProps } from "./types";

const AuthContainer = ({ children }: AuthContainerProps): ReactElement => {
  // TODO add authorisation logic and add
  const isAuthorised = false;

  if (isAuthorised) return children;

  return <Login />;
};

export default AuthContainer;
