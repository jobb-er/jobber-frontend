import { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ABOUT, EXPERIENCE, EDUCATION, ADDITIONAL } from "common/constants";
import { Loader } from "common/components";
import { fetchCandidateProfile } from "packages/profile/store/actions/profileActions";
import { About, Experience, Education, Additional } from "./edit";
import { useProfileContext } from "../context";
import {
  CandidateProfileMapState,
  CandidateProfileMapStateReturn,
  CandidateProfileProps,
} from "./types";

const CandidateProfile = ({
  fetchCandidateProfile,
  isFetchingProfile,
}: CandidateProfileProps): ReactElement => {
  const { activeTab } = useProfileContext();

  useEffect(() => {
    fetchCandidateProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderProperTab = (): ReactElement => {
    switch (activeTab) {
      case ABOUT:
        return <About />;
      case EXPERIENCE:
        return <Experience />;
      case EDUCATION:
        return <Education />;
      case ADDITIONAL:
        return <Additional />;
      default:
        return <About />;
    }
  };

  if (isFetchingProfile)
    return (
      <Loader additionalClassName="flex items-center justify-center h-full" />
    );

  return <div className="px-10 h-full">{renderProperTab()}</div>;
};

const mapStateToProps = (
  state: CandidateProfileMapState,
): CandidateProfileMapStateReturn => ({
  isFetchingProfile: state.requestStatuses.isFetchingProfile,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchCandidateProfile: () => dispatch(fetchCandidateProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateProfile);
