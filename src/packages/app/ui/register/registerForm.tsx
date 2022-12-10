import { withFormik, FormikErrors } from "formik";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  initialRegisterFormValues,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
} from "common/constants";
import { register, login } from "../../store/actions/authActions";
import { LoginValues } from "../../models";
import { RegisterFormValues } from "./types";
import InnerForm from "./innerForm";

const requiredPath = "register.errors.fieldRequired";

const RegisterForm = withFormik<Record<string, any>, RegisterFormValues>({
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

  handleSubmit: async (
    values: RegisterFormValues,
    { props, setErrors },
  ): Promise<void> => {
    try {
      const registerResponse = await register(values);
      if (
        registerResponse?.status?.toString() === "201" &&
        registerResponse?.data?.id
      )
        return props.login({ email: values.email, password: values.password });
      else setErrors({ acceptedTerms: "register.errors.somethingWentWrong" });
    } catch (error) {
      setErrors({ email: "register.errors.accountExists" });
    }
  },
})(InnerForm);

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  login: (payload: LoginValues) => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(RegisterForm);
