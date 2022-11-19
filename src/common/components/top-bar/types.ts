import { ReactElement } from "react";

export interface TopBarProps {
  children?: ReactElement | ReactElement[];
  avatar?: string;
  role: "recruiter" | "candidate" | "";
  name: string;
  additionalClassName?: string;
}
