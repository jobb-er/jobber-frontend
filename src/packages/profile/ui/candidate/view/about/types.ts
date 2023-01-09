import { ReactElement } from "react";
import { CandidateProfile } from "packages/profile/models";

export interface AboutMapState {
  profile: { candidateProfile: CandidateProfile };
}

export interface AboutMapStateReturn {
  candidateProfile: CandidateProfile;
}

export interface AboutProps {
  candidateProfile: CandidateProfile;
}

export interface IconTextContainerProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  children: ReactElement;
}
