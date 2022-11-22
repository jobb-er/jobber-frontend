import { withFormik, FormikErrors } from "formik";

import { initialNewOfferFormValues } from "../../../../../../common/constants";
import { NewOfferValues } from "../../../../models";
import { createNewOffer } from "../../../../store/actions/myOffersActions";
import InnerForm from "./innerForm";

const requiredPath = "myOffers.recruiter.errors.fieldRequired";

const NewOfferForm = withFormik<Record<string, any>, NewOfferValues>({
  mapPropsToValues: (): NewOfferValues => initialNewOfferFormValues,

  validate: (values: NewOfferValues): FormikErrors<NewOfferValues> => {
    let errors: FormikErrors<NewOfferValues> = {};

    if (!values.title.trim().length) errors.title = requiredPath;
    if (!values.companyName.trim().length) errors.companyName = requiredPath;
    if (!values.location.trim().length) errors.location = requiredPath;
    if (!values.experience.trim().length) errors.experience = requiredPath;
    if (!values.description.trim().length) errors.description = requiredPath;

    return errors;
  },

  handleSubmit: async (values: NewOfferValues): Promise<void> => {
    try {
      const response = await createNewOffer(values);
      if (response?.status?.toString() === "201")
        return console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
})(InnerForm);

export default NewOfferForm;
