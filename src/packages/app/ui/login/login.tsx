import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Image } from "../../../../common/images/login/image.svg";
import { addAsterisk } from "../../../../common/utils";
import { Input, Button } from "../../../../common/components";
import LoginRegisterWrapper from "../common";

const Login = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <LoginRegisterWrapper Image={Image}>
      <span className="text-5xl font-semibold select-none">
        {t("login.login")}
      </span>
      <div className="w-1/2 flex flex-col items-center gap-8">
        <Input
          label={addAsterisk(t("login.email"))}
          placeholder={t("login.emailPlaceholder")}
          type="email"
        />
        <Input
          label={addAsterisk(t("login.password"))}
          placeholder={t("login.password")}
          type="password"
        />
        <Button
          onClick={() => {
            // do nth for now
          }}
        >
          {t("login.login")}
        </Button>
      </div>
      <div className="border-b border-primary w-1/2" />
      <span className="flex items-center gap-1.5 font-semibold">
        <p className="select-none">{t("login.noAccount")}</p>
        <p className="text-action">{t("login.register")}</p>
      </span>
    </LoginRegisterWrapper>
  );
};

export default Login;
