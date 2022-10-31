import { ReactElement } from "react";

import Menu from "./menu";
import styles from "./styles.module.css";
import { ContainerProps } from "./types";

const Container = ({ children }: ContainerProps): ReactElement => (
  <div className={styles.container}>
    <Menu />
    <div className="bg-white h-screen p-8">{children}</div>
  </div>
);

export default Container;
