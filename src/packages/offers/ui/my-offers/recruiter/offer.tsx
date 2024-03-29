import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";

import { MY_OFFERS, OFFERS } from "common/constants";
import { removeDuplicateWhitespaces } from "common/utils";
import { ReactComponent as BuildingIcon } from "common/images/offers/building.svg";
import { ReactComponent as MapPinIcon } from "common/images/offers/mapPin.svg";
import { ReactComponent as PersonIcon } from "common/images/offers/person.svg";
import { ReactComponent as BinIcon } from "common/images/offers/bin.svg";
import { ReactComponent as PenIcon } from "common/images/offers/pen.svg";
import { ReactComponent as RevertIcon } from "common/images/offers/revert.svg";
import { Card, Link } from "common/components";
import {
  updateOffer,
  fetchRecruiterOffers,
  fetchAppliedCandidatesForOffer,
} from "../../../store/actions/myOffersActions";
import { OfferProps, OfferMapState, OfferMapStateReturn } from "./types";
import OfferAppliedCandidates from "./offerAppliedCandidates";

const Offer = ({
  offer,
  setExpandedAppliedCandidatesOffer,
  expandedAppliedCandidatesOffer,
  fetchMyOffers,
  fetchAppliedCandidatesForOffer,
  offerAppliedCandidates,
  isFetchingOfferAppliedCandidates,
}: OfferProps): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isOfferClosed = offer.status === "closed";

  const handleOnClickBin = async (): Promise<void> => {
    const response = await updateOffer({
      ...offer,
      status: isOfferClosed ? "open" : "closed",
    });
    if (response?.status?.toString()?.[0] === "2") return fetchMyOffers();
  };

  const handleOnClickAppliedCandidates = async (): Promise<void> => {
    if (expandedAppliedCandidatesOffer === offer.id)
      return setExpandedAppliedCandidatesOffer("");
    await fetchAppliedCandidatesForOffer(offer.id);
    setExpandedAppliedCandidatesOffer(offer.id);
  };

  return (
    <Card
      additionalClassName={
        isOfferClosed ? "border border-error border-opacity-40" : ""
      }
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div
            className={removeDuplicateWhitespaces(
              `flex items-center gap-20 text-secondary-dark ${
                isOfferClosed ? "opacity-40" : ""
              }`,
            )}
          >
            <Link
              path={`${OFFERS}/${offer.id}`}
              title={offer.title}
              textSize="text-lg"
            />
            <span>
              {`${t("myOffers.recruiter.posted")} ${
                offer.creationDate
                  ? new Date(offer.creationDate).toLocaleDateString()
                  : ""
              }`}
            </span>
            <span className="flex items-center gap-2">
              <BuildingIcon />
              <span>{offer.companyName}</span>
            </span>
            <span className="flex items-center gap-2">
              <MapPinIcon />
              <span>{offer.location}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <PenIcon
              className="text-action h-5 w-5"
              role="button"
              onClick={() => navigate(`${MY_OFFERS}/edit/${offer.id}`)}
            />
            <div className="border-r border-secondary-dark h-6" />
            {isOfferClosed ? (
              <RevertIcon
                className="text-action h-5 w-5 z-10"
                role="button"
                onClick={handleOnClickBin}
              />
            ) : (
              <BinIcon
                className="text-error h-5 w-5 z-10"
                role="button"
                onClick={handleOnClickBin}
              />
            )}
            <div className="border-r border-secondary-dark h-6" />
            <PersonIcon
              className="text-primary h-5 w-5"
              role="button"
              onClick={handleOnClickAppliedCandidates}
            />
          </div>
        </div>
        {!isFetchingOfferAppliedCandidates &&
        offerAppliedCandidates.length &&
        expandedAppliedCandidatesOffer === offer.id ? (
          <OfferAppliedCandidates
            candidates={offerAppliedCandidates}
            offerId={offer.id}
          />
        ) : (
          <></>
        )}
      </div>
    </Card>
  );
};

const mapStateToProps = (state: OfferMapState): OfferMapStateReturn => ({
  offerAppliedCandidates: state.offers.offerAppliedCandidates,
  isFetchingOfferAppliedCandidates:
    state.requestStatuses.isFetchingOfferAppliedCandidates,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyOffers: () => dispatch(fetchRecruiterOffers()),
  fetchAppliedCandidatesForOffer: (offerId: string) =>
    dispatch(fetchAppliedCandidatesForOffer(offerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
