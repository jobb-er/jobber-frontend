import { ReactElement } from "react";
import { withFormik, FormikErrors } from "formik";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { MY_OFFERS } from "common/constants";
import { OfferFormValues } from "packages/offers/models";
import { fetchRecruiterOffers } from "packages/offers/store/actions/myOffersActions";
import InnerForm from "./innerForm";
import { OfferFormProps, OfferFormikProps } from "./types";

const requiredPath = "myOffers.recruiter.errors.fieldRequired";

const OfferForm = ({
  offer,
  submitAction,
  fetchMyOffers,
}: OfferFormProps): ReactElement => {
  const navigate = useNavigate();

  const OfferFormFormik = withFormik<OfferFormikProps, OfferFormValues>({
    mapPropsToValues: ({ offer }): OfferFormValues => {
      return { ...offer };
    },

    validate: (values: OfferFormValues): FormikErrors<OfferFormValues> => {
      let errors: FormikErrors<OfferFormValues> = {};

      if (!values.title.trim().length) errors.title = requiredPath;
      if (!values.companyName.trim().length) errors.companyName = requiredPath;
      if (!values.location.trim().length) errors.location = requiredPath;
      if (!values.experience.trim().length) errors.experience = requiredPath;
      if (!values.description.trim().length) errors.description = requiredPath;
      if (!values.bottomPayrange && (values.topPayrange || values.currency))
        errors.bottomPayrange = requiredPath;
      if (!values.topPayrange && (values.bottomPayrange || values.currency))
        errors.topPayrange = requiredPath;
      if (
        !values.currency?.trim().length &&
        (values.bottomPayrange || values.topPayrange)
      )
        errors.currency = requiredPath;

      return errors;
    },

    handleSubmit: async (values: OfferFormValues): Promise<void> => {
      try {
        const response = await submitAction({ ...offer, ...values });
        if (response?.status?.toString()?.[0] === "2") navigate(MY_OFFERS);
        return fetchMyOffers();
      } catch (error) {
        console.log(error);
      }
    },
  })(InnerForm);

  return <OfferFormFormik offer={offer} />;
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyOffers: () => dispatch(fetchRecruiterOffers()),
});

export default connect(null, mapDispatchToProps)(OfferForm);
