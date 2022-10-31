import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { OFFERS } from "../../../../common/constants";
import { TopBar, BackLink } from "../../../../common/components";

const OfferDetails = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 h-full">
      <TopBar role="recruiter" name="Jakub Kołosowski">
        <BackLink path={OFFERS} title={t("offer.goBack")} />
      </TopBar>
      <span>Offer details</span>
    </section>
  );
};

export default OfferDetails;
