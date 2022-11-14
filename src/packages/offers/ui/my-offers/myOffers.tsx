import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { CANDIDATE } from "../../../../common/constants";
import { TopBar } from "../../../../common/components";
import { MyOffersMapState, MyOffersProps } from "./types";
import CandidateOffers from "./candidate";
import RecruiterOffers from "./recruiter";

const MyOffers = ({ auth }: MyOffersProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section>
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        {auth?.accountType === CANDIDATE ? (
          <CandidateOffers />
        ) : (
          <RecruiterOffers />
        )}
      </TopBar>
    </section>
  );
};

const mapStateToProps = (state: MyOffersMapState): MyOffersMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MyOffers);
