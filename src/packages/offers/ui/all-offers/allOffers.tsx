import { ReactElement, useEffect, useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { removeDuplicateWhitespaces } from "../../../../common/utils";
import { ReactComponent as SearchIcon } from "../../../../common/images/offers/search.svg";
import { ReactComponent as LocationIcon } from "../../../../common/images/offers/location.svg";
import {
  TopBar,
  Input,
  Select,
  Label,
  Loader,
} from "../../../../common/components";
import { fetchAllOffers } from "../../store/actions/allOffersActions";
import { Offer as OfferModel, Offers } from "../../models";
import styles from "./styles.module.css";
import Offer from "./offer";
import {
  AllOffersMapState,
  AllOffersMapStateReturn,
  AllOffersProps,
} from "./types";

const AllOffers = ({
  auth,
  isFetchingAllOffers,
  allOffers,
  fetchAllOffers,
}: AllOffersProps): ReactElement => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchAllOffers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnSearchOffers = (offers: Offers): Offers =>
    offers.filter((offer: OfferModel) =>
      offer.title
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase()),
    );

  const onlyRecentOffers = allOffers.filter((offer: OfferModel) => offer.isNew);
  const onlyOfferWithSalary = allOffers.filter(
    (offer: OfferModel) =>
      offer.bottomPayrange && offer.topPayrange && offer.currency,
  );

  if (isFetchingAllOffers)
    return (
      <Loader additionalClassName="flex items-center justify-center h-full" />
    );

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
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(event.target.value)
            }
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
          {handleOnSearchOffers(onlyRecentOffers).map(
            (offer: OfferModel): ReactElement => (
              <Offer key={offer.id} offer={offer} />
            ),
          )}
        </div>
        <div className="flex flex-col gap-6">
          <Label>{t("allOffers.salary")}</Label>
          {handleOnSearchOffers(onlyOfferWithSalary).map(
            (offer: OfferModel): ReactElement => (
              <Offer key={offer.id} offer={offer} />
            ),
          )}
        </div>
        <div className="flex flex-col gap-6">
          <Label>{t("allOffers.all")}</Label>
          {handleOnSearchOffers(allOffers).map(
            (offer: OfferModel): ReactElement => (
              <Offer key={offer.id} offer={offer} />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (
  state: AllOffersMapState,
): AllOffersMapStateReturn => ({
  auth: state.auth,
  allOffers: state.offers.allOffers,
  isFetchingAllOffers: state.requestStatuses.isFetchingAllOffers,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchAllOffers: () => dispatch(fetchAllOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllOffers);
