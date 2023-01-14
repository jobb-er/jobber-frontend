import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { removeDuplicateWhitespaces } from "../../utils";
import { ReactComponent as NoAvatarIcon } from "../../images/top-bar/noAvatar.svg";
import { PROFILE } from "../../constants";
import { TopBarProps } from "./types";

const TopBar = ({
  children,
  role,
  avatar,
  name,
  additionalClassName,
}: TopBarProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <div
      className={removeDuplicateWhitespaces(
        `flex items-center justify-between text-primary h-min px-10 ${additionalClassName}`,
      )}
    >
      {children}
      <div className="flex items-center gap-4 select-none">
        <div className="flex flex-col gap-0.5 capitalize">
          <span className="font-semibold text-lg">{name}</span>
          <span className="text-secondary text-sm">{role}</span>
        </div>
        <button
          className="w-12 h-12 border border-primary rounded-full focus:outline-none"
          onClick={() => navigate(PROFILE)}
        >
          {avatar ? (
            <img
              src={avatar}
              className="w-full h-full rounded-full"
              alt="avatar"
            />
          ) : (
            <NoAvatarIcon className="w-12 h-12 p-3" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
