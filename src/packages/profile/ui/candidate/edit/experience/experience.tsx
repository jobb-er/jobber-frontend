import { ReactElement } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  fetchCandidateProfile,
  updateCandidateProfileExperience,
} from "packages/profile/store/actions/profileActions";
import { CandidateExperienceFormValues } from "packages/profile/models";
import ExperienceForm from "./experienceForm";
import {
  ExperienceMapState,
  ExperienceMapStateReturn,
  ExperienceProps,
} from "./types";

const Experience = ({
  candidateProfile,
  fetchCandidateProfile,
}: ExperienceProps): ReactElement => {
  const handleOnUpdateProfile = async (updatedObject: {
    experience: CandidateExperienceFormValues;
  }) => {
    try {
      const response = await updateCandidateProfileExperience(
        updatedObject.experience,
      );
      if (response?.status?.toString()?.[0] === "2")
        return fetchCandidateProfile();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ExperienceForm
      data={{ experience: candidateProfile.experience }}
      submitAction={handleOnUpdateProfile}
    />
  );
};

const mapStateToProps = (
  state: ExperienceMapState,
): ExperienceMapStateReturn => ({
  candidateProfile: state.profile.candidateProfile,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchCandidateProfile: () => dispatch(fetchCandidateProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
