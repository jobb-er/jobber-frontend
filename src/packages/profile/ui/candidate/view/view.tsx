import { ReactElement } from "react";
import { connect } from "react-redux";

import {
  About,
  Experience,
  Education,
  Additional,
} from "../../common-candidate";
import { ViewMapState, ViewMapStateReturn, ViewProps } from "./types";

const View = ({ candidateProfile }: ViewProps): ReactElement => {
  const { about, education, experience, additional } = candidateProfile;

  return (
    <div className="flex flex-col gap-6 px-10 h-full pb-10 overflow-y-auto text-primary">
      <About about={about} />
      <Experience experience={experience} />
      <Education education={education} />
      <Additional additional={additional} />
    </div>
  );
};

const mapStateToProps = (state: ViewMapState): ViewMapStateReturn => ({
  candidateProfile: state.profile.candidateProfile,
});

export default connect(mapStateToProps)(View);
