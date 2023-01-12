import { ReactElement } from "react";
import { withFormik, FormikErrors } from "formik";

import { EMAIL_REGEXP, URL_REGEXP } from "common/constants";
import { RecruiterProfileFormValues } from "packages/profile/models";
import InnerForm from "./innerForm";
import { FormProps, FormikProps } from "./types";

const requiredPath = "profile.errors.fieldRequired";

const Form = ({ data, submitAction }: FormProps): ReactElement => {
  const FormFormik = withFormik<FormikProps, RecruiterProfileFormValues>({
    mapPropsToValues: ({ data }): RecruiterProfileFormValues => ({ ...data }),

    validate: (
      values: RecruiterProfileFormValues,
    ): FormikErrors<RecruiterProfileFormValues> => {
      let errors: FormikErrors<RecruiterProfileFormValues> = {};

      if (!values.firstName.trim().length) errors.firstName = requiredPath;
      if (!values.lastName.trim().length) errors.lastName = requiredPath;
      if (!values.email.trim().length) errors.email = requiredPath;
      if (values.email && !EMAIL_REGEXP.test(values.email))
        errors.email = "profile.errors.wrongEmail";
      if (!values?.phoneNumber?.trim().length)
        errors.phoneNumber = requiredPath;
      if (!values?.country?.trim().length) errors.country = requiredPath;
      if (values?.linkedin && !URL_REGEXP.test(values.linkedin))
        errors.linkedin = "profile.errors.wrongUrl";

      return errors;
    },

    handleSubmit: async (values: RecruiterProfileFormValues): Promise<void> =>
      submitAction(values),
  })(InnerForm);

  return <FormFormik data={data} />;
};

export default Form;
