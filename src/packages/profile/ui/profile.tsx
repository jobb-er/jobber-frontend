import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { TopBar, Tabs } from "common/components";
import { CANDIDATE, TABS, ABOUT } from "common/constants";
import CandidateProfile from "./candidate";
import RecruiterProfile from "./recruiter";
import { ProfileContext } from "./context";
import { ProfileMapState, ProfileProps } from "./types";

const Profile = ({ auth }: ProfileProps): ReactElement => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(ABOUT);

  const isCandidate = auth?.accountType === CANDIDATE;

  const tabKeyValue = TABS.map((tab: string) => ({
    key: tab,
    value: t(`profile.tabs.${tab}`),
  }));

  return (
    <ProfileContext.Provider value={{ setActiveTab, activeTab }}>
      <section className="flex flex-col gap-6 h-full p-8">
        <TopBar
          role={
            auth?.accountType
              ? t(`roles.${auth.accountType.toLowerCase()}`)
              : ""
          }
          name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
          additionalClassName={isCandidate ? "" : "self-end"}
        >
          {isCandidate ? (
            <Tabs
              tabs={tabKeyValue}
              activeTab={activeTab}
              onChangeTab={setActiveTab}
            />
          ) : (
            <></>
          )}
        </TopBar>
        {isCandidate ? <CandidateProfile /> : <RecruiterProfile />}
      </section>
    </ProfileContext.Provider>
  );
};

const mapStateToProps = (state: ProfileMapState): ProfileMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
