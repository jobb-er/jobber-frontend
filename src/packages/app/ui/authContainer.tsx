import { ReactElement, useState, useEffect } from "react";
import { connect } from "react-redux";

import { CLIENT_SESSION } from "common/constants";
import Login from "./login";
import Register from "./register";
import { AuthContainerProps, AuthContainerMapState } from "./types";

const AuthContainer = ({
  children,
  auth,
}: AuthContainerProps): ReactElement => {
  useEffect(() => {}, [auth]);

  const [currentAuthPage, setCurrentAuthPage] = useState<"login" | "register">(
    "login",
  );

  const loginExpirationDate = localStorage.getItem(CLIENT_SESSION);

  if (
    loginExpirationDate &&
    Date.parse(loginExpirationDate) > Date.parse(new Date().toString())
  )
    return children;

  return currentAuthPage === "login" ? (
    <Login onChangeScreen={() => setCurrentAuthPage("register")} />
  ) : (
    <Register onChangeScreen={() => setCurrentAuthPage("login")} />
  );
};

const mapStateToProps = (
  state: AuthContainerMapState,
): AuthContainerMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AuthContainer);
