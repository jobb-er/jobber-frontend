import { ReactElement } from "react";

export interface CardProps {
  children: ReactElement | ReactElement[];
  onClick?: () => void;
  additionalClassName?: string;
}
