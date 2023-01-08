import { ReactElement } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  fetchCandidateProfile,
  updateCandidateProfileEducation,
} from "packages/profile/store/actions/profileActions";
import { CandidateEducationFormValues } from "packages/profile/models/types";
import EducationForm from "./educationForm";
import {
  EducationMapState,
  EducationMapStateReturn,
  EducationProps,
} from "./types";

const Education = ({
  fetchCandidateProfile,
  candidateProfile,
}: EducationProps): ReactElement => {
  const handleOnUpdateProfile = async (updatedObject: {
    education: CandidateEducationFormValues;
  }) => {
    try {
      const response = await updateCandidateProfileEducation(
        updatedObject.education,
      );
      if (response?.status?.toString()?.[0] === "2")
        return fetchCandidateProfile();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EducationForm
      data={{ education: candidateProfile.education }}
      submitAction={handleOnUpdateProfile}
    />
  );
};

const mapStateToProps = (
  state: EducationMapState,
): EducationMapStateReturn => ({
  candidateProfile: state.profile.candidateProfile,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchCandidateProfile: () => dispatch(fetchCandidateProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);
