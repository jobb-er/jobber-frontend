import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Image } from "common/images/login/image.svg";
import LoginRegisterWrapper from "../common";
import { LoginProps } from "./types";
import LoginForm from "./loginForm";

const Login = ({ onChangeScreen }: LoginProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <LoginRegisterWrapper Image={Image}>
      <span className="text-5xl font-semibold select-none">
        {t("login.login")}
      </span>
      <LoginForm />
      <div className="border-b border-primary w-1/2" />
      <div className="flex items-center gap-1.5 font-semibold select-none">
        {t("login.noAccount")}
        <button
          className="text-action focus:outline-none"
          onClick={onChangeScreen}
        >
          {t("login.register")}
        </button>
      </div>
    </LoginRegisterWrapper>
  );
};

export default Login;
