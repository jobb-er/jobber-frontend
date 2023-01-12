import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { ReactComponent as PencilIcon } from "common/images/profile/pencil.svg";
import { TopBar, Tabs, Button } from "common/components";
import { CANDIDATE, TABS, ABOUT } from "common/constants";
import CandidateProfile from "./candidate";
import RecruiterProfile from "./recruiter";
import { ProfileContext } from "./context";
import { ProfileMapState, ProfileProps } from "./types";

const Profile = ({ auth }: ProfileProps): ReactElement => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(ABOUT);
  const [mode, setMode] = useState<"edit" | "view">("view");

  const isCandidate = auth?.accountType === CANDIDATE;

  const tabKeyValue = TABS.map((tab: string) => ({
    key: tab,
    value: t(`profile.tabs.${tab}`),
  }));

  const renderCandidateTopBarChildren = (): ReactElement => {
    if (mode === "view")
      return (
        <Button onClick={() => setMode("edit")}>
          <div className="flex items-center gap-3">
            <PencilIcon className="w-4 h-4" />
            {t("profile.edit")}
          </div>
        </Button>
      );

    return (
      <Tabs
        tabs={tabKeyValue}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />
    );
  };

  if (!auth?.id) return <></>;

  return (
    <ProfileContext.Provider value={{ setActiveTab, activeTab, mode, setMode }}>
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
          {isCandidate ? renderCandidateTopBarChildren() : <></>}
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
