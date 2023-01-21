import { ReactElement } from "react";
import { CandidateAboutFormValues } from "packages/profile/models";

export interface AboutProps {
  about: CandidateAboutFormValues;
}

export interface IconTextContainerProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  children: ReactElement;
}
