import { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { fetchAuth } from "../store/actions/authActions";
import Menu from "./menu";
import styles from "./styles.module.css";
import { ContainerProps, ContainerMapState } from "./types";

const Container = ({
  children,
  auth,
  fetchAuth,
}: ContainerProps): ReactElement => {
  useEffect(() => {
    if (!auth?.id) fetchAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Menu />
      <div className="bg-white h-screen p-8">{children}</div>
    </div>
  );
};

const mapStateToProps = (state: ContainerMapState): ContainerMapState => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchAuth: () => dispatch(fetchAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
