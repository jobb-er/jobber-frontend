import { ReactElement } from "react";

export interface LoginRegisterWrapperProps {
  children: ReactElement[];
  Image: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
}
