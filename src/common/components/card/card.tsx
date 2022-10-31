import { ReactElement } from "react";

import { CardProps } from "./types";

const Card = ({ children }: CardProps): ReactElement => (
  <div className="bg-white p-3 rounded-xl drop-shadow text-primary">
    {children}
  </div>
);

export default Card;
