import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CANDIDATE, MY_OFFERS } from "../../../../common/constants";
import { TopBar } from "../../../../common/components";
import { ReactComponent as NewIcon } from "../../../../common/images/offers/new.svg";
import { MyOffersMapState, MyOffersProps } from "./types";
import CandidateOffers from "./candidate";
import RecruiterOffers from "./recruiter";

const MyOffers = ({ auth }: MyOffersProps): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isCandidate = auth?.accountType === CANDIDATE;

  return (
    <section>
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        {isCandidate ? (
          <div />
        ) : (
          <button
            className="flex items-center gap-3 text-primary font-medium hover:underline focus:outline-none"
            onClick={() => navigate(`${MY_OFFERS}/new`)}
          >
            <NewIcon className="bg-action text-white rounded-full p-2" />
            <span>{t("myOffers.recruiter.addNew")}</span>
          </button>
        )}
      </TopBar>
      {isCandidate ? <CandidateOffers /> : <RecruiterOffers />}
    </section>
  );
};

const mapStateToProps = (state: MyOffersMapState): MyOffersMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MyOffers);
