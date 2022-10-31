import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { removeDuplicateWhitespaces } from "../../utils";
import { MenuTabProps } from "./types";

const MenuTab = ({
  title,
  path,
  Icon,
  isActive,
}: MenuTabProps): ReactElement => (
  <Link
    to={path || "/"}
    className={removeDuplicateWhitespaces(
      `flex items-center gap-4 w-full
      px-4 py-2 rounded-xl focus:outline-none
      ${isActive ? "bg-white text-primary" : "text-white"}`,
    )}
  >
    <Icon className="w-4 h-4" />
    <span>{title}</span>
  </Link>
);

export default MenuTab;
