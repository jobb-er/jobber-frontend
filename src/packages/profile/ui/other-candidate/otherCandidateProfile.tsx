import { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Loader, TopBar, BackLink } from "common/components";
import { fetchOtherCandidateProfile } from "packages/profile/store/actions/profileActions";
import { About, Experience, Education, Additional } from "../common-candidate";
import {
  OtherCandidateProfileMapState,
  OtherCandidateProfileMapStateReturn,
  OtherCandidateProfileProps,
} from "./types";

const OtherCandidateProfile = ({
  fetchOtherCandidateProfile,
  otherCandidateProfile,
  isFetchingProfile,
  auth,
}: OtherCandidateProfileProps): ReactElement => {
  const { id } = useParams();
  const { t } = useTranslation();

  const { about, experience, education, additional } = otherCandidateProfile;

  useEffect(() => {
    if (id) fetchOtherCandidateProfile(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!auth?.id || !id) return <></>;

  if (isFetchingProfile)
    return (
      <Loader additionalClassName="flex items-center justify-center h-full" />
    );

  return (
    <section className="flex flex-col gap-6 h-full p-8">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        avatar={auth?.avatar}
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        <BackLink title={t("profile.goBack")} />
      </TopBar>
      <div className="flex flex-col gap-6 px-10 h-full pb-10 overflow-y-auto text-primary">
        <About about={about} />
        <Experience experience={experience} />
        <Education education={education} />
        <Additional additional={additional} />
      </div>
    </section>
  );
};

const mapStateToProps = (
  state: OtherCandidateProfileMapState,
): OtherCandidateProfileMapStateReturn => ({
  auth: state.auth,
  isFetchingProfile: state.requestStatuses.isFetchingProfile,
  otherCandidateProfile: state.profile.otherCandidateProfile,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchOtherCandidateProfile: (id: string) =>
    dispatch(fetchOtherCandidateProfile(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtherCandidateProfile);
