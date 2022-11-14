import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { OFFERS } from "../../../../common/constants";
import { TopBar, BackLink } from "../../../../common/components";
import { OfferDetailsMapState, OfferDetailsProps } from "./types";

const OfferDetails = ({ auth }: OfferDetailsProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 h-full">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        <BackLink path={OFFERS} title={t("offer.goBack")} />
      </TopBar>
      <span>Offer details</span>
    </section>
  );
};
const mapStateToProps = (
  state: OfferDetailsMapState,
): OfferDetailsMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(OfferDetails);
