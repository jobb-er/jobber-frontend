import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { OFFERS } from "../../../../../common/constants";
import { ReactComponent as BuildingIcon } from "../../../../../common/images/offers/building.svg";
import { ReactComponent as MapPinIcon } from "../../../../../common/images/offers/mapPin.svg";
import { Card } from "../../../../../common/components";
import { OfferProps } from "./types";

const Offer = ({ offer }: OfferProps): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`${OFFERS}/${offer.id}`)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-20 text-secondary-dark">
          <span className="font-md text-lg text-primary min-w-48">
            {offer.title}
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
        <div className="text-secondary-light text-2xl font-semibold mr-5">
          {t("myOffers.candidate.statuses.applied")}
        </div>
      </div>
    </Card>
  );
};

export default Offer;
