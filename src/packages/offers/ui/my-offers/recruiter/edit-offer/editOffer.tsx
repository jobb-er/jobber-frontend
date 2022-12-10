import { ReactElement, useEffect } from "react";
import { Dispatch } from "redux";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { TopBar, BackLink, Card, Loader } from "common/components";
import { fetchRecruiterOffer } from "packages/offers/store/actions/myOffersActions";
import {
  EditOfferMapState,
  EditOfferMapStateReturn,
  EditOfferProps,
} from "./types";
import OfferForm from "../offer-form";
import { editOfferFormSubmit } from "./helpers";

const EditOffer = ({
  auth,
  recruiterOffer,
  isFetchingMyOffer,
  fetchRecruiterOffer,
}: EditOfferProps): ReactElement => {
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    if (id) fetchRecruiterOffer(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetchingMyOffer)
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
        <BackLink title={t("myOffers.recruiter.goBack")} />
      </TopBar>
      <Card additionalClassName="h-full p-0">
        {recruiterOffer ? (
          <OfferForm
            offer={recruiterOffer}
            submitAction={editOfferFormSubmit}
          />
        ) : (
          <></>
        )}
      </Card>
    </section>
  );
};

const mapStateToProps = (
  state: EditOfferMapState,
): EditOfferMapStateReturn => ({
  auth: state.auth,
  recruiterOffer: state.offers.recruiterOffer,
  isFetchingMyOffer: state.requestStatuses.isFetchingMyOffer,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchRecruiterOffer: (id: string) => dispatch(fetchRecruiterOffer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditOffer);
