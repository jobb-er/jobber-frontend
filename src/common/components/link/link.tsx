import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { removeDuplicateWhitespaces } from "../../utils";
import { LinkProps } from "./types";

const Link = ({
  Icon,
  title,
  path,
  onClick,
  textSize = "text-2xl",
  textColor = "text-action",
  additionalClassName,
}: LinkProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <button
      className={removeDuplicateWhitespaces(
        `flex items-center gap-3 font-medium underline hover:opacity-90 focus:outline-none ${textSize} ${textColor} ${additionalClassName}`,
      )}
      type="button"
      onClick={() => (path ? navigate(path) : onClick?.())}
    >
      {Icon ? <Icon className="w-6" /> : <></>}
      {title}
    </button>
  );
};

export default Link;
