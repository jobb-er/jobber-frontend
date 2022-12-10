import { ReactElement } from "react";

import { removeDuplicateWhitespaces } from "../../utils";
import { LabelProps } from "./types";

const Label = ({ children, additionalClassName }: LabelProps): ReactElement => (
  <span
    className={removeDuplicateWhitespaces(
      `text-primary text-xl font-medium select-none ${additionalClassName}`,
    )}
  >
    {children}
  </span>
);

export default Label;
