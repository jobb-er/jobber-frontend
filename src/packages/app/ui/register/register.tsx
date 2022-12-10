import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Image } from "common/images/register/image.svg";
import LoginRegisterWrapper from "../common";
import { RegisterProps } from "./types";
import RegisterForm from "./registerForm";

const Register = ({ onChangeScreen }: RegisterProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <LoginRegisterWrapper Image={Image}>
      <span className="text-5xl font-semibold select-none">
        {t("register.register")}
      </span>
      <RegisterForm />
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
