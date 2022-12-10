import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { TopBar } from "common/components";
import { CANDIDATE } from "common/constants";
import CandidateProfile from "./candidate";
import RecruiterProfile from "./recruiter";
import { ProfileMapState, ProfileProps } from "./types";

const Profile = ({ auth }: ProfileProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="p-8">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        {auth?.accountType === CANDIDATE ? (
          <CandidateProfile />
        ) : (
          <RecruiterProfile />
        )}
      </TopBar>
    </section>
  );
};

const mapStateToProps = (state: ProfileMapState): ProfileMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
