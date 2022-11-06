import { ReactElement, useState } from "react";

import Login from "./login";
import Register from "./register";
import { AuthContainerProps } from "./types";

const AuthContainer = ({ children }: AuthContainerProps): ReactElement => {
  const [currentAuthPage, setCurrentAuthPage] = useState<"login" | "register">(
    "login",
  );

  // TODO add authorisation logic and add
  const isAuthorised = false;

  if (isAuthorised) return children;

  return currentAuthPage === "login" ? (
    <Login onChangeScreen={() => setCurrentAuthPage("register")} />
  ) : (
    <Register onChangeScreen={() => setCurrentAuthPage("login")} />
  );
};

export default AuthContainer;
