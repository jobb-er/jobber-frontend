import { ReactElement } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { CandidateAboutFormValues } from "packages/profile/models";
import { fetchAuth } from "packages/app/store/actions/authActions";
import {
  updateCandidateProfileAbout,
  fetchCandidateProfile,
} from "packages/profile/store/actions/profileActions";
import AboutForm from "./aboutForm";
import { AboutMapState, AboutMapStateReturn, AboutProps } from "./types";

const About = ({
  candidateProfile,
  fetchCandidateProfile,
  fetchAuth,
}: AboutProps): ReactElement => {
  const handleOnUpdateProfile = async (
    updatedProfile: CandidateAboutFormValues,
  ): Promise<void> => {
    try {
      const response = await updateCandidateProfileAbout(updatedProfile);
      if (response?.status?.toString()?.[0] === "2") {
        await fetchAuth();
        return fetchCandidateProfile();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AboutForm
      data={candidateProfile.about}
      submitAction={handleOnUpdateProfile}
    />
  );
};

const mapStateToProps = (state: AboutMapState): AboutMapStateReturn => ({
  candidateProfile: state.profile.candidateProfile,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchCandidateProfile: () => dispatch(fetchCandidateProfile()),
  fetchAuth: () => dispatch(fetchAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
