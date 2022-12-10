import { withFormik, FormikErrors } from "formik";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { initialLoginFormValues, EMAIL_REGEXP } from "common/constants";
import { login } from "../../store/actions/authActions";
import { LoginValues } from "../../models";
import InnerForm from "./innerForm";

const requiredPath = "login.errors.fieldRequired";

const LoginForm = withFormik<Record<string, any>, LoginValues>({
  mapPropsToValues: (): LoginValues => initialLoginFormValues,

  validate: (values: LoginValues): FormikErrors<LoginValues> => {
    let errors: FormikErrors<LoginValues> = {};

    if (!values.password.trim().length) errors.password = requiredPath;
    if (!values.email.trim().length) errors.email = requiredPath;
    if (values.email && !EMAIL_REGEXP.test(values.email))
      errors.email = "login.errors.wrongEmail";

    return errors;
  },

  handleSubmit: async (
    values: LoginValues,
    { props, setErrors },
  ): Promise<void> => {
    try {
      const response = await props.login(values);
      if (response?.error)
        setErrors({ invalid: "login.errors.somethingWentWrong" });
    } catch (error) {
      setErrors({ invalid: "login.errors.somethingWentWrong" });
    }
  },
})(InnerForm);

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  login: (payload: LoginValues) => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
