import { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { OFFERS } from "../../../../common/constants";
import { TopBar, BackLink, Card, Loader } from "../../../../common/components";
import { fetchOffer } from "../../store/actions/allOffersActions";
import {
  OfferDetailsMapState,
  OfferDetailsMapStateReturn,
  OfferDetailsProps,
} from "./types";
import OfferContent from "./offerContent";

const OfferDetails = ({
  auth,
  offer,
  isFetchingOffer,
  fetchOffer,
}: OfferDetailsProps): ReactElement => {
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchOffer(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isFetchingOffer)
    return (
      <Loader additionalClassName="flex items-center justify-center h-full" />
    );

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
      <Card additionalClassName="h-full p-0 overflow-hidden">
        <OfferContent offer={offer} />
      </Card>
    </section>
  );
};

const mapStateToProps = (
  state: OfferDetailsMapState,
): OfferDetailsMapStateReturn => ({
  auth: state.auth,
  offer: state.offers.offer,
  isFetchingOffer: state.requestStatuses.isFetchingOffer,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchOffer: (id: string) => dispatch(fetchOffer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
