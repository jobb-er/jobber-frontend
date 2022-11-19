import { ReactElement } from "react";
import { withFormik, FormikErrors } from "formik";

import {
  initialSettingsFormValues,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
} from "../../../../common/constants";
import InnerForm from "./innerForm";
import { SettingsFormValues, SettingsFormProps } from "./types";

const SettingsForm = ({
  setNewAccountData,
}: SettingsFormProps): ReactElement => {
  const SettingsFormFormik = withFormik<
    Record<string, any>,
    SettingsFormValues
  >({
    mapPropsToValues: (): SettingsFormValues => initialSettingsFormValues,

    validate: (
      values: SettingsFormValues,
    ): FormikErrors<SettingsFormValues> => {
      let errors: FormikErrors<SettingsFormValues> = {};

      if (values.password && !PASSWORD_REGEXP.test(values.password))
        errors.password = "settings.errors.tooWeakPassword";
      if (values.password !== values.confirmPassword)
        errors.confirmPassword = "settings.errors.notTheSamePassword";
      if (values.email && !EMAIL_REGEXP.test(values.email))
        errors.email = "settings.errors.wrongEmail";

      return errors;
    },

    handleSubmit: (values: SettingsFormValues): void => {
      setNewAccountData(values);
    },
  })(InnerForm);

  return <SettingsFormFormik />;
};

export default SettingsForm;
