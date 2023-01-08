import { ReactElement } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  fetchCandidateProfile,
  updateCandidateProfileAdditional,
} from "packages/profile/store/actions/profileActions";
import { CandidateAdditionalFormValues } from "packages/profile/models/types";
import AdditionalForm from "./additionalForm";
import {
  AdditionalMapState,
  AdditionalMapStateReturn,
  AdditionalProps,
} from "./types";

const Additional = ({
  candidateProfile,
  fetchCandidateProfile,
}: AdditionalProps): ReactElement => {
  const handleOnUpdateProfile = async (updatedObject: {
    additional: CandidateAdditionalFormValues;
  }) => {
    try {
      const response = await updateCandidateProfileAdditional(
        updatedObject.additional,
      );
      if (response?.status?.toString()?.[0] === "2")
        return fetchCandidateProfile();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdditionalForm
      data={{ additional: candidateProfile.additional }}
      submitAction={handleOnUpdateProfile}
    />
  );
};

const mapStateToProps = (
  state: AdditionalMapState,
): AdditionalMapStateReturn => ({
  candidateProfile: state.profile.candidateProfile,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchCandidateProfile: () => dispatch(fetchCandidateProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Additional);
