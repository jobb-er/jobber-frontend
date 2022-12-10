import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { removeDuplicateWhitespaces } from "../../utils";
import { LinkProps } from "./types";

const Link = ({
  Icon,
  title,
  path,
  textSize = "text-2xl",
  additionalClassName,
}: LinkProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <button
      className={removeDuplicateWhitespaces(
        `flex items-center gap-3 text-action font-medium underline hover:opacity-90 focus:outline-none ${textSize} ${additionalClassName}`,
      )}
      onClick={() => navigate(path)}
    >
      {Icon ? <Icon className="w-6" /> : <></>}
      {title}
    </button>
  );
};

export default Link;
