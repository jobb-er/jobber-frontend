import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { TopBar } from "../../../common/components";
import { MessagesProps, MessagesMapState } from "./types";

const Messages = ({ auth }: MessagesProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section>
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        <span>Messages</span>
      </TopBar>
    </section>
  );
};

const mapStateToProps = (state: MessagesMapState): MessagesMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Messages);
