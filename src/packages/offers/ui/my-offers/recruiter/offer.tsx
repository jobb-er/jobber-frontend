import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { OFFERS } from "../../../../../common/constants";
import { removeDuplicateWhitespaces } from "../../../../../common/utils";
import { ReactComponent as BuildingIcon } from "../../../../../common/images/offers/building.svg";
import { ReactComponent as MapPinIcon } from "../../../../../common/images/offers/mapPin.svg";
import { ReactComponent as PersonIcon } from "../../../../../common/images/offers/person.svg";
import { ReactComponent as BinIcon } from "../../../../../common/images/offers/bin.svg";
import { ReactComponent as PenIcon } from "../../../../../common/images/offers/pen.svg";
import { ReactComponent as RevertIcon } from "../../../../../common/images/offers/revert.svg";
import { Card, Link } from "../../../../../common/components";
import {
  updateOffer,
  fetchRecruiterOffers,
} from "../../../store/actions/myOffersActions";
import { OfferProps } from "./types";

const Offer = ({ offer, fetchMyOffers }: OfferProps): ReactElement => {
  const { t } = useTranslation();

  const isOfferClosed = offer.status === "closed";

  const handleOnClickBin = async (): Promise<void> => {
    const response = await updateOffer({
      ...offer,
      status: isOfferClosed ? "open" : "closed",
    });
    if (response?.status?.toString()?.[0] === "2") return fetchMyOffers();
  };

  return (
    <Card
      additionalClassName={
        isOfferClosed ? "border border-error border-opacity-40" : ""
      }
    >
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
          <PenIcon className="text-action h-5 w-5" role="button" />
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
          <PersonIcon className="text-primary h-5 w-5" role="button" />
        </div>
      </div>
    </Card>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyOffers: () => dispatch(fetchRecruiterOffers()),
});

export default connect(null, mapDispatchToProps)(Offer);
