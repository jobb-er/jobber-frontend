import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { removeDuplicateWhitespaces } from "../../utils";
import { LoaderProps } from "./types";
import styles from "./styles.module.css";

const dotStyles = removeDuplicateWhitespaces(
  `absolute w-10 h-10 ${styles.dot}`,
);

const Loader = ({
  size = "text-7xl",
  additionalClassName = "",
}: LoaderProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <div
      className={removeDuplicateWhitespaces(
        `flex flex-col gap-4 font-semibold ${additionalClassName}`,
      )}
    >
      <span className="ml-32 text-primary text-xl">
        {t("loader.pleaseWait")}
      </span>
      <span className="ml-20 mb-12 text-secondary-dark">
        {t("loader.optimising")}
      </span>
      <div className={removeDuplicateWhitespaces(`relative ${size}`)}>
        <div className={`${dotStyles} ${styles.dot1}`} />
        <div className={`${dotStyles} ${styles.dot2}`} />
        <div className={`${dotStyles} ${styles.dot3}`} />
        <div className={`${dotStyles} ${styles.dot4}`} />
        <div className={`${dotStyles} ${styles.dot5}`} />
        <div className={`${dotStyles} ${styles.dot6}`} />
      </div>
    </div>
  );
};

export default Loader;
