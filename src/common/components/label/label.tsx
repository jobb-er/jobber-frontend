import { ReactElement } from "react";

import { LabelProps } from "./types";

const Label = ({ children }: LabelProps): ReactElement => (
  <span className="text-primary text-xl font-semibold select-none">
    {children}
  </span>
);

export default Label;
