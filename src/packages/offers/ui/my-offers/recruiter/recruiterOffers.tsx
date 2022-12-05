import { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ReactComponent as EmptyOffersIcon } from "../../../../../common/images/offers/emptyOffersGraphic.svg";
import { Label, Loader } from "../../../../../common/components";
import { fetchRecruiterOffers } from "../../../store/actions/myOffersActions";
import { Offer as OfferModel } from "../../../models";
import Offer from "./offer";
import {
  RecruiterOffersProps,
  RecruiterOffersMapState,
  RecruiterOffersMapStateReturn,
} from "./types";

const RecruiterOffers = ({
  fetchMyOffers,
  offers,
  isFetchingMyOffers,
}: RecruiterOffersProps): ReactElement => {
  const { t } = useTranslation();

  useEffect(() => {
    fetchMyOffers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetchingMyOffers)
    return (
      <Loader additionalClassName="flex items-center justify-center h-full" />
    );

  if (!offers.length)
    return (
      <div className="flex justify-between gap-10 h-max p-16">
        <Label>{t("myOffers.recruiter.emptyOffers")}</Label>
        <EmptyOffersIcon className="self-end absolute bottom-20 right-20" />
      </div>
    );

  return (
    <div className="flex flex-col gap-6 h-85">
      <Label>{t("myOffers.recruiter.createdByYou")}</Label>
        <div className="flex flex-col gap-6 overflow-y-auto p-6 ">
          {offers.map(
            (offer: OfferModel): ReactElement => (
              <Offer key={offer.id} offer={offer} />
            ),
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: RecruiterOffersMapState,
): RecruiterOffersMapStateReturn => ({
  offers: state.offers.recruiterOffers,
  isFetchingMyOffers: state.requestStatuses.isFetchingMyOffers,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyOffers: () => dispatch(fetchRecruiterOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterOffers);
