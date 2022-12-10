import { ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { ReactComponent as Logo } from "common/images/logo.svg";
import { ReactComponent as OffersIcon } from "common/images/menu/offers.svg";
import { ReactComponent as MessagesIcon } from "common/images/menu/messages.svg";
import { ReactComponent as MyOffersIcon } from "common/images/menu/myoffers.svg";
import { ReactComponent as ProfileIcon } from "common/images/menu/profile.svg";
import { ReactComponent as SettingsIcon } from "common/images/menu/settings.svg";
import { ReactComponent as LogoutIcon } from "common/images/menu/logout.svg";
import { MenuTab } from "common/components";
import {
  OFFERS,
  MESSAGES,
  MY_OFFERS,
  PROFILE,
  SETTINGS,
} from "common/constants";
import { logout } from "../../store/actions/authActions";
import { MenuProps } from "./types";

const Menu = ({ logout, resetStore }: MenuProps): ReactElement => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 justify-start bg-primary px-4 h-full">
      <Logo className="w-full mt-8" />
      <div className="flex flex-col gap-5">
        <MenuTab
          path={OFFERS}
          title={t("menu.offers")}
          Icon={OffersIcon}
          isActive={pathname.includes(OFFERS)}
        />
        <MenuTab
          path={MESSAGES}
          title={t("menu.messages")}
          Icon={MessagesIcon}
          isActive={pathname.includes(MESSAGES)}
        />
        <MenuTab
          path={MY_OFFERS}
          title={t("menu.myOffers")}
          Icon={MyOffersIcon}
          isActive={pathname.includes(MY_OFFERS)}
        />
        <div className="border-b border-white rounded-xl" />
        <MenuTab
          path={PROFILE}
          title={t("menu.profile")}
          Icon={ProfileIcon}
          isActive={pathname.includes(PROFILE)}
        />
        <MenuTab
          path={SETTINGS}
          title={t("menu.settings")}
          Icon={SettingsIcon}
          isActive={pathname.includes(SETTINGS)}
        />
        <MenuTab
          path="/"
          title={t("menu.logout")}
          onClick={async () => {
            await logout();
            await resetStore();
            navigate("/");
          }}
          Icon={LogoutIcon}
          isActive={false}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  logout: () => dispatch(logout()),
  resetStore: () => dispatch({ type: "RESET_STORE" }),
});

export default connect(null, mapDispatchToProps)(Menu);
