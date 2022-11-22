import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { TopBar, BackLink, Card } from "../../../../../../common/components";
import { MY_OFFERS } from "../../../../../../common/constants";
import { NewOfferMapState, NewOfferProps } from "./types";
import NewOfferForm from "./newOfferForm";

const NewOffer = ({ auth }: NewOfferProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 h-full">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
      >
        <BackLink path={MY_OFFERS} title={t("myOffers.recruiter.goBack")} />
      </TopBar>
      <Card additionalClassName="h-full p-0">
        <NewOfferForm />
      </Card>
    </section>
  );
};

const mapStateToProps = (state: NewOfferMapState): NewOfferMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(NewOffer);
