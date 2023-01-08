import { ReactElement } from "react";
import { withFormik, FormikErrors } from "formik";

import { EMAIL_REGEXP, URL_REGEXP } from "common/constants";
import { CandidateAboutFormValues } from "packages/profile/models/types";
import InnerForm from "./innerForm";
import { AboutFormikProps, AboutFormProps } from "./types";

const requiredPath = "profile.errors.fieldRequired";

const AboutForm = ({ data, submitAction }: AboutFormProps): ReactElement => {
  const AboutFormFormik = withFormik<
    AboutFormikProps,
    CandidateAboutFormValues
  >({
    mapPropsToValues: ({ data }): CandidateAboutFormValues => ({ ...data }),

    validate: (
      values: CandidateAboutFormValues,
    ): FormikErrors<CandidateAboutFormValues> => {
      let errors: FormikErrors<CandidateAboutFormValues> = {};

      if (!values.firstName.trim().length) errors.firstName = requiredPath;
      if (!values.lastName.trim().length) errors.lastName = requiredPath;
      if (!values.email.trim().length) errors.email = requiredPath;
      if (values.email && !EMAIL_REGEXP.test(values.email))
        errors.email = "profile.errors.wrongEmail";
      if (!values.phoneNumber.trim().length) errors.phoneNumber = requiredPath;
      if (!values.country.trim().length) errors.country = requiredPath;
      if (values.linkedin && !URL_REGEXP.test(values.linkedin))
        errors.linkedin = "profile.errors.wrongUrl";
      if (values.portfolio && !URL_REGEXP.test(values.portfolio))
        errors.portfolio = "profile.errors.wrongUrl";

      return errors;
    },

    handleSubmit: async (values: CandidateAboutFormValues): Promise<void> =>
      submitAction(values),
  })(InnerForm);

  return <AboutFormFormik data={data} />;
};

export default AboutForm;
