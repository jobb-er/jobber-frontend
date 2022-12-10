import { ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { OFFERS } from "../../../../../common/constants";
import { ReactComponent as EmptyOffersIcon } from "../../../../../common/images/offers/emptyOffersGraphic.svg";
import { ReactComponent as AllOffersIcon } from "../../../../../common/images/offers/allOffers.svg";
import { Label, Link, Loader } from "../../../../../common/components";
import { fetchCandidateOffers } from "../../../store/actions/myOffersActions";
import { Offer as OfferModel } from "../../../models";
import {
  CandidateOffersProps,
  CandidateOffersMapState,
  CandidateOffersMapStateReturn,
} from "./types";
import Offer from "./offer";

const CandidateOffers = ({
  offers,
  fetchMyOffers,
  isFetchingMyOffers,
}: CandidateOffersProps): ReactElement => {
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
        <div className="flex flex-col gap-6">
          <Label>{t("myOffers.candidate.didntApply")}</Label>
          <Link
            Icon={AllOffersIcon}
            title={t("myOffers.candidate.startSearching")}
            path={OFFERS}
          />
        </div>
        <EmptyOffersIcon className="self-end absolute bottom-20 right-20" />
      </div>
    );

  return (
    <div className="flex flex-col gap-6 h-85">
      <Label additionalClassName="px-10">
        {t("myOffers.candidate.applied", { number: offers.length })}
      </Label>
      <div className="flex flex-col gap-6 overflow-y-auto px-10 pb-10">
        {offers.map(
          (offer: OfferModel): ReactElement => (
            <Offer key={offer.id} offer={offer} />
          ),
        )}
      </div>
      <Link
        path={OFFERS}
        title={t("myOffers.candidate.searchAndApply")}
        textSize="text-md"
      />
    </div>
  );
};

const mapStateToProps = (
  state: CandidateOffersMapState,
): CandidateOffersMapStateReturn => ({
  offers: state.offers.candidateOffers,
  isFetchingMyOffers: state.requestStatuses.isFetchingMyOffers,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyOffers: () => dispatch(fetchCandidateOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CandidateOffers);
