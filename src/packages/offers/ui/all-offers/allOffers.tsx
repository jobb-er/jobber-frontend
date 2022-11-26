import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { removeDuplicateWhitespaces } from "../../../../common/utils";
import { ReactComponent as SearchIcon } from "../../../../common/images/offers/search.svg";
import { ReactComponent as LocationIcon } from "../../../../common/images/offers/location.svg";
import { TopBar, Input, Select, Label } from "../../../../common/components";
import { Offer as OfferModel } from "../../models";
import styles from "./styles.module.css";
import Offer from "./offer";

import { AllOffersMapState, AllOffersProps } from "./types";
import { mockData } from "./mock";

const AllOffers = ({ auth }: AllOffersProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 h-full">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        <div className="flex items-center gap-3 w-1/2">
          <Input
            height="h-min"
            placeholder={t("allOffers.search")}
            Icon={SearchIcon}
          />
          <Select
            options={[]}
            value=""
            onChange={() => {
              // do nth
            }}
            Icon={LocationIcon}
            placeholder={t("allOffers.location")}
            height="h-min"
          />
        </div>
      </TopBar>
      <div
        className={removeDuplicateWhitespaces(
          `grid gap-8 h-full ${styles.offersContainer}`,
        )}
      >
        <div className="flex flex-col gap-6">
          <Label>{t("allOffers.recently")}</Label>
          {mockData.map(
            (offer: OfferModel): ReactElement => (
              <Offer key={offer.id} offer={offer} />
            ),
          )}
        </div>
        <div className="flex flex-col gap-6">
          <Label>{t("allOffers.salary")}</Label>
          {mockData.map(
            (offer: OfferModel): ReactElement => (
              <Offer key={offer.id} offer={offer} />
            ),
          )}
        </div>
        <div className="flex flex-col gap-6">
          <Label>{t("allOffers.all")}</Label>
          {mockData.map(
            (offer: OfferModel): ReactElement => (
              <Offer key={offer.id} offer={offer} />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: AllOffersMapState): AllOffersMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AllOffers);
