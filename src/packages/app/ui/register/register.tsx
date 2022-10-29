import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as Image } from "../../../../common/images/register/image.svg";
import { addAsterisk } from "../../../../common/utils";
import { Input, Button, Select, Checkbox } from "../../../../common/components";
import LoginRegisterWrapper from "../common";
import { RegisterProps } from "./types";

const Register = ({ onChangeScreen }: RegisterProps): ReactElement => {
  const { t } = useTranslation();

  const roleOptions = [t("roles.candidate"), t("roles.recruiter")];

  return (
    <LoginRegisterWrapper Image={Image}>
      <span className="text-5xl font-semibold select-none">
        {t("register.register")}
      </span>
      <div className="flex flex-col gap-3 w-full items-center">
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 w-3/4">
          <Input
            label={addAsterisk(t("register.firstName"))}
            placeholder={t("register.firstNamePlaceholder")}
          />
          <Input
            label={addAsterisk(t("register.lastName"))}
            placeholder={t("register.lastNamePlaceholder")}
          />
          <Input
            label={addAsterisk(t("register.password"))}
            placeholder={t("register.password")}
            type="password"
          />
          <Input
            label={addAsterisk(t("register.confirmPassword"))}
            placeholder={t("register.password")}
            type="password"
          />
          <Select
            label={addAsterisk(t("register.role"))}
            placeholder={t("register.rolePlaceholder")}
            value=""
            onChange={() => {
              // do nth
            }}
            options={roleOptions}
          />
          <Input
            label={addAsterisk(t("register.email"))}
            placeholder={t("register.emailPlaceholder")}
            type="email"
          />
          <Checkbox
            isChecked={false}
            onCheck={() => {
              // do nth
            }}
            additionalClassName="col-span-2"
            label={t("register.acceptTerms")}
          />
        </div>
        <Button
          onClick={() => {
            // do nth for now
          }}
        >
          {t("register.register")}
        </Button>
      </div>
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
