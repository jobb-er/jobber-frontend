import { ReactElement, useState } from "react";
import { useTranslation, TFunction } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import i18n from "../../../../common/translations/i18n";
import { EN, PL } from "../../../../common/constants";
import { TopBar, Select, Label, Input } from "../../../../common/components";
import { ReactComponent as Graphic } from "../../../../common/images/settings/graphic.svg";
import { ReactComponent as WarningIcon } from "../../../../common/images/settings/warning.svg";
import { deleteAccount, logout } from "../../store/actions/authActions";
import { SettingsMapState, SettingsProps } from "./types";

const Settings = ({
  auth,
  logout,
  resetStore,
}: SettingsProps): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [language, setLanguage] = useState<string>(i18n.language);

  const handleChangeLanguage = (
    newLanguage: string,
  ): Promise<TFunction<"translation", undefined>> => {
    switch (newLanguage) {
      case t(`languages.${EN}`):
        setLanguage(EN);
        return i18n.changeLanguage(EN);
      case t(`languages.${PL}`):
        setLanguage(PL);
        return i18n.changeLanguage(PL);
      default:
        setLanguage(EN);
        return i18n.changeLanguage(EN);
    }
  };

  const handleDeleteAccount = async (): Promise<void> => {
    const isConfirmed = window.confirm(t("settings.alert"));

    try {
      if (isConfirmed) {
        const response = await deleteAccount();
        if (response?.status?.toString() === "200") {
          await logout();
          await resetStore();
          navigate("/");
        }
      }
    } catch (error: unknown) {
      alert(t("settings.errorAlert"));
    }
  };

  return (
    <section className="flex flex-col gap-6 h-full">
      <TopBar
        role={
          auth?.accountType ? t(`roles.${auth.accountType.toLowerCase()}`) : ""
        }
        name={`${auth?.firstName || ""} ${auth?.lastName || ""}`}
        additionalClassName="self-end"
      />
      <div className="flex justify-between gap-3 w-full h-full">
        <div className="w-3/4 2xl:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Label>{t("settings.app")}</Label>
            <Select
              value={t(`languages.${language}`)}
              onChange={handleChangeLanguage}
              options={[t(`languages.${EN}`), t(`languages.${PL}`)]}
              label={t("settings.language")}
              additionalClassName="w-1/2"
            />
          </div>
          <div className="border-b border-primary" />
          <div className="flex flex-col gap-5">
            <Label>{t("settings.account")}</Label>
            <div className="flex items-center gap-5">
              <Input
                onChange={() => {
                  // do nth
                }}
                label={t("settings.changePassword")}
                placeholder={t("settings.password")}
              />
              <Input
                onChange={() => {
                  // do nth
                }}
                label={t("settings.confirmPassword")}
                placeholder={t("settings.password")}
              />
            </div>
            <Input
              onChange={() => {
                // do nth
              }}
              label={t("settings.changeEmail")}
              placeholder={t("settings.email")}
              width="w-1/2"
            />
          </div>
          <div className="border-b border-primary" />
          <button
            className="flex items-center gap-3 text-error font-medium hover:underline focus:outline-none"
            onClick={handleDeleteAccount}
          >
            <span>{t("settings.deactivate")}</span>
            <WarningIcon />
          </button>
        </div>
        <Graphic className="self-end mr-10 mb-20" />
      </div>
    </section>
  );
};

const mapStateToProps = (state: SettingsMapState): SettingsMapState => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  logout: () => dispatch(logout()),
  resetStore: () => dispatch({ type: "RESET_STORE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
