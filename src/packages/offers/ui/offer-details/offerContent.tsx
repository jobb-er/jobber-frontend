import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { MESSAGES } from "common/constants";
import { Button } from "common/components";
import { ReactComponent as BuildingIcon } from "common/images/offers/building.svg";
import { ReactComponent as MapPinIcon } from "common/images/offers/mapPin.svg";
import { ReactComponent as MoneyIcon } from "common/images/offers/money.svg";
import { ReactComponent as CheckMarkIcon } from "common/images/offers/checkMark.svg";
import { ReactComponent as MessageIcon } from "common/images/offers/message.svg";
import { applyForOffer } from "../../store/actions/myOffersActions";
import { OfferContentProps } from "./types";

const OfferContent = ({
  offer,
  isCandidate,
  onApplySuccess,
}: OfferContentProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-5 h-full text-primary">
      <div className="flex items-center justify-between px-6 pt-6">
        <span className="font-md text-3xl">{offer.title}</span>
        {offer?.isNew ? (
          <span className="rounded-xl bg-secondary-light px-3 w-max font-medium">
            {t("offer.new")}
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className="flex items-center gap-16 text-secondary-dark text-lg px-6">
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
        <div className="flex items-center gap-2 text-action font-semibold">
          <MoneyIcon className="w-5 h-5" />
          <span>
            {offer?.bottomPayrange && offer?.topPayrange && offer?.currency
              ? `${offer.bottomPayrange} - ${offer.topPayrange} ${offer.currency}`
              : t("offer.notProvided")}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 h-full overflow-y-auto px-6">
        <span className="font-semibold">{t("offer.description")}</span>
        <span className="whitespace-pre-wrap">{offer.description}</span>
      </div>
      <span className="text-secondary flex items-center gap-1 px-6 text-sm font-semibold">
        {t("offer.added")}
        <span className="underline">
          {offer.creationDate
            ? new Date(offer.creationDate).toLocaleDateString()
            : ""}
        </span>
      </span>
      {isCandidate ? (
        <div className="flex items-center gap-3 justify-end bg-secondary-light w-full h-16 px-6 py-3 rounded-b-xl">
          <NavLink to={`${MESSAGES}/${offer.recruiterId}`}>
            <Button variant="secondary">
              <div className="flex items-center gap-3">
                <MessageIcon className="w-5 h-5" />
                {t("offer.message")}
              </div>
            </Button>
          </NavLink>
          <Button
            type="submit"
            onClick={() => {
              applyForOffer(offer.id);
              onApplySuccess();
            }}
          >
            <div className="flex items-center gap-3">
              <CheckMarkIcon className="w-5 h-5" />
              {t("offer.apply")}
            </div>
          </Button>
        </div>
      ) : (
        <span className="py-3" />
      )}
    </section>
  );
};

export default OfferContent;
