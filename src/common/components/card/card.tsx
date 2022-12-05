import { ReactElement } from "react";

import { removeDuplicateWhitespaces } from "../../utils";
import { CardProps } from "./types";

const Card = ({
  children,
  onClick,
  additionalClassName,
}: CardProps): ReactElement => (
  <div
    className={removeDuplicateWhitespaces(
      `bg-white p-3 rounded-xl drop-shadow-md text-primary ${additionalClassName}`,
    )}
    role={onClick ? "button" : "presentation"}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Card;
