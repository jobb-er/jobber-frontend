import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Card } from "common/components";
import { OFFERS } from "common/constants";
import { ReactComponent as BuildingIcon } from "common/images/offers/building.svg";
import { ReactComponent as MapPinIcon } from "common/images/offers/mapPin.svg";
import { ReactComponent as MoneyIcon } from "common/images/offers/money.svg";
import { OfferProps } from "./types";

const Offer = ({ offer }: OfferProps): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Card
      additionalClassName="flex flex-col gap-2.5 w-full"
      onClick={() => navigate(`${OFFERS}/${offer.id}`)}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">{offer.title}</span>
        {offer?.isNew ? (
          <span className="rounded-xl bg-secondary-light px-3 w-max font-medium">
            {t("allOffers.new")}
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center gap-6 text-secondary-dark">
        <div className="flex items-center gap-2">
          <BuildingIcon className="w-5 h-5" />
          <span>{offer.companyName}</span>
        </div>
        {offer?.location ? (
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5" />
            <span>{offer.location}</span>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex items-center gap-2 text-action font-semibold">
        <MoneyIcon className="w-5 h-5" />
        <span>
          {offer?.bottomPayrange && offer?.topPayrange && offer?.currency
            ? `${offer.bottomPayrange} - ${offer.topPayrange} ${offer.currency}`
            : t("allOffers.notProvided")}
        </span>
      </div>
    </Card>
  );
};

export default Offer;
