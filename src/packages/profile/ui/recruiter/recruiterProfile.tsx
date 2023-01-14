import { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  fetchRecruiterProfile,
  updateRecruiterProfile,
} from "packages/profile/store/actions/profileActions";
import { fetchAuth } from "packages/app/store/actions/authActions";
import { RecruiterProfileFormValues } from "packages/profile/models";
import Form from "./form";
import {
  RecruiterProfileMapState,
  RecruiterProfileMapStateReturn,
  RecruiterProfileProps,
} from "./types";

const RecruiterProfile = ({
  recruiterProfile,
  fetchRecruiterProfile,
  fetchAuth,
}: RecruiterProfileProps): ReactElement => {
  useEffect(() => {
    fetchRecruiterProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnUpdateProfile = async (
    updatedProfile: RecruiterProfileFormValues,
  ): Promise<void> => {
    try {
      const response = await updateRecruiterProfile(updatedProfile);
      if (response?.status?.toString()?.[0] === "2") {
        await fetchAuth();
        return fetchRecruiterProfile();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Form data={recruiterProfile} submitAction={handleOnUpdateProfile} />;
};

const mapStateToProps = (
  state: RecruiterProfileMapState,
): RecruiterProfileMapStateReturn => ({
  isFetchingProfile: state.requestStatuses.isFetchingProfile,
  recruiterProfile: state.profile.recruiterProfile,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchRecruiterProfile: () => dispatch(fetchRecruiterProfile()),
  fetchAuth: () => dispatch(fetchAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterProfile);
