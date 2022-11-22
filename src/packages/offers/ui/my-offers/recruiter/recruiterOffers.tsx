import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as EmptyOffersIcon } from "../../../../../common/images/offers/emptyOffersGraphic.svg";
import { Label } from "../../../../../common/components";

const RecruiterOffers = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between gap-10 h-max p-16">
      <Label>{t("myOffers.recruiter.emptyOffers")}</Label>
      <EmptyOffersIcon className="self-end absolute bottom-20 right-20" />
    </div>
  );
};

export default RecruiterOffers;
