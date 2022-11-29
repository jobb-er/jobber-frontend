import { ReactElement } from "react";
import { withFormik, FormikErrors } from "formik";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  initialNewOfferFormValues,
  MY_OFFERS,
} from "../../../../../../common/constants";
import { NewOfferValues } from "../../../../models";
import {
  createNewOffer,
  fetchRecruiterOffers,
} from "../../../../store/actions/myOffersActions";
import InnerForm from "./innerForm";
import { NewOfferFormProps } from "./types";

const requiredPath = "myOffers.recruiter.errors.fieldRequired";

const NewOfferForm = ({ fetchMyOffers }: NewOfferFormProps): ReactElement => {
  const navigate = useNavigate();

  const NewOfferFormFormik = withFormik<Record<string, any>, NewOfferValues>({
    mapPropsToValues: (): NewOfferValues => initialNewOfferFormValues,

    validate: (values: NewOfferValues): FormikErrors<NewOfferValues> => {
      let errors: FormikErrors<NewOfferValues> = {};

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

    handleSubmit: async (values: NewOfferValues): Promise<void> => {
      try {
        const response = await createNewOffer(values);
        if (response?.status?.toString()?.[0] === "2") navigate(MY_OFFERS);
        return fetchMyOffers();
      } catch (error) {
        console.log(error);
      }
    },
  })(InnerForm);

  return <NewOfferFormFormik />;
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchMyOffers: () => dispatch(fetchRecruiterOffers()),
});

export default connect(null, mapDispatchToProps)(NewOfferForm);
