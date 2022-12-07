import { ReactElement } from "react";
import { withFormik, FormikErrors } from "formik";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { MY_OFFERS } from "common/constants";
import { Offer, EditOfferValues } from "packages/offers/models";
import {
  updateOffer,
  fetchRecruiterOffers,
} from "packages/offers/store/actions/myOffersActions";
import InnerForm from "./innerForm";
import { EditOfferFormProps, EditOfferFormValues } from "./types";

const requiredPath = "myOffers.recruiter.errors.fieldRequired";

const isEmptyString = (value: any) => {
  return value === "";
};

const EditOfferForm = ({
  recruiterOffer,
  fetchMyOffers,
}: EditOfferFormProps): ReactElement => {
  const navigate = useNavigate();

  const EditOfferFormFormik = withFormik<EditOfferFormValues, EditOfferValues>({
    mapPropsToValues: (props): EditOfferValues => {
      return {
        title: props.recruiterOffer.title,
        companyName: props.recruiterOffer.companyName,
        location: props.recruiterOffer.location,
        experience: props.recruiterOffer.experience,
        bottomPayrange: props.recruiterOffer.bottomPayrange,
        topPayrange: props.recruiterOffer.topPayrange,
        currency: props.recruiterOffer.currency,
        description: props.recruiterOffer.description,
      };
    },

    validate: (values: EditOfferValues): FormikErrors<EditOfferValues> => {
      let errors: FormikErrors<EditOfferValues> = {};

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

    handleSubmit: async (values: EditOfferValues): Promise<void> => {
      try {
        const updatedRecruiterOffer: Offer = {
          ...recruiterOffer,
          ...values,
          bottomPayrange: isEmptyString(values.bottomPayrange)
            ? 0
            : values.bottomPayrange,
          topPayrange: isEmptyString(values.topPayrange)
            ? 0
            : values.topPayrange,
        };
        const response = await updateOffer(updatedRecruiterOffer);
        if (response?.status?.toString()?.[0] === "2") navigate(MY_OFFERS);
        return fetchMyOffers();
      } catch (error) {
        console.log(error);
      }
    },
  })(InnerForm);

  return <EditOfferFormFormik recruiterOffer={recruiterOffer} />;
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyOffers: () => dispatch(fetchRecruiterOffers()),
});

export default connect(null, mapDispatchToProps)(EditOfferForm);
