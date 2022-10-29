import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ReactComponent as BigLogo } from "../../../../common/images/bigLogo.svg";
import { LoginRegisterWrapperProps } from "./types";

const LoginRegisterWrapper = ({
  children,
  Image,
}: LoginRegisterWrapperProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary h-screen flex items-center">
      <div className="w-1/2 p-16 flex flex-col gap-20">
        <BigLogo className="w-3/4" />
        <span className="text-2xl text-white select-none">
          {t("loginRegisterWrapper.title")}
        </span>
        <Image className="self-end" />
      </div>
      <div className="bg-white h-screen rounded-l-5xl flex flex-col gap-20 text-primary items-center justify-center w-1/2">
        {children}
      </div>
    </section>
  );
};

export default LoginRegisterWrapper;
