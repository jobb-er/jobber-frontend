import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { Label, Link } from "common/components";
import { MY_OFFERS } from "common/constants";
import { ReactComponent as SuccessfulApplyIcon } from "common/images/offers/successApply.svg";

const SuccessfulApply = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <Label additionalClassName="text-4xl">{t("offer.successTitle")}</Label>
      <Link
        path={MY_OFFERS}
        title={t("offer.goToMyOffers")}
        textSize="text-2xl"
        additionalClassName="px-10"
      />
      <SuccessfulApplyIcon className="w-1/2 h-3/4" />
    </div>
  );
};

export default SuccessfulApply;
