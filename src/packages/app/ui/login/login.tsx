import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as BigLogo } from "../../../../common/images/bigLogo.svg";
import { ReactComponent as Image } from "../../../../common/images/login/image.svg";
import { addAsterisk } from "../../../../common/utils";
import { Input, Button } from "../../../../common/components";

const Login = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary h-screen flex items-center">
      <div className="w-1/2 p-16 flex flex-col gap-20">
        <BigLogo className="w-3/4" />
        <span className="text-2xl text-white select-none">
          {t("login.title")}
        </span>
        <Image className="self-end" />
      </div>
      <div className="bg-white h-screen rounded-l-5xl flex flex-col gap-20 text-primary items-center justify-center w-1/2">
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
      </div>
    </section>
  );
};

export default Login;
