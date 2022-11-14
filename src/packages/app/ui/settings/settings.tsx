import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { TopBar } from "../../../../common/components";
import { SettingsMapState, SettingsProps } from "./types";

const Settings = ({ auth }: SettingsProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section>
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        <span>Settings</span>
      </TopBar>
    </section>
  );
};

const mapStateToProps = (state: SettingsMapState): SettingsMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Settings);
