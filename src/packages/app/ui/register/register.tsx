import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { withFormik, FormikErrors } from "formik";

import { ReactComponent as Image } from "../../../../common/images/register/image.svg";
import {
  initialRegisterFormValues,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
} from "../../../../common/constants";
import LoginRegisterWrapper from "../common";
import { RegisterProps, RegisterFormValues } from "./types";
import InnerForm from "./innerForm";

const requiredPath = "register.errors.fieldRequired";

const RegisterForm = withFormik<Record<string, unknown>, RegisterFormValues>({
  mapPropsToValues: (): RegisterFormValues => initialRegisterFormValues,

  validate: (values: RegisterFormValues): FormikErrors<RegisterFormValues> => {
    let errors: FormikErrors<RegisterFormValues> = {};

    if (!values.firstName.trim().length) errors.firstName = requiredPath;
    if (!values.lastName.trim().length) errors.lastName = requiredPath;
    if (!values.password.trim().length) errors.password = requiredPath;
    if (values.password && !PASSWORD_REGEXP.test(values.password))
      errors.password = "register.errors.tooWeakPassword";
    if (!values.confirmPassword.trim().length && values.password.trim().length)
      errors.confirmPassword = requiredPath;
    if (
      values.password &&
      values.confirmPassword &&
      values.password !== values.confirmPassword
    )
      errors.confirmPassword = "register.errors.notTheSamePassword";
    if (!values.role.trim().length) errors.role = requiredPath;
    if (!values.email.trim().length) errors.email = requiredPath;
    if (values.email && !EMAIL_REGEXP.test(values.email))
      errors.email = "register.errors.wrongEmail";
    if (!values.acceptedTerms)
      errors.acceptedTerms = "register.errors.acceptTerms";

    return errors;
  },

  handleSubmit: (values: RegisterFormValues): void => {
    // TODO change submit - dispatch action to register and automatically login user
    console.log(values);
  },
})(InnerForm);

const Register = ({ onChangeScreen }: RegisterProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <LoginRegisterWrapper Image={Image}>
      <span className="text-5xl font-semibold select-none">
        {t("register.register")}
      </span>
      <RegisterForm t={t} />
      <div className="border-b border-primary w-3/4" />
      <div className="flex items-center gap-1.5 font-semibold select-none">
        {t("register.haveAccount")}
        <button
          className="text-action focus:outline-none"
          onClick={onChangeScreen}
        >
          {t("register.login")}
        </button>
      </div>
    </LoginRegisterWrapper>
  );
};

export default Register;
