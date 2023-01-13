import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { removeDuplicateWhitespaces } from "../../utils";
import { MenuTabProps } from "./types";

const MenuTab = ({
  children,
  title,
  path,
  Icon,
  isActive,
  onClick,
}: MenuTabProps): ReactElement => (
  <Link
    to={path || "/"}
    className={removeDuplicateWhitespaces(
      `relative flex items-center gap-4 w-full
      px-4 py-2 rounded-xl focus:outline-none
      ${isActive ? "bg-white text-primary" : "text-white"}`,
    )}
    onClick={onClick}
  >
    <Icon className="w-4 h-4" />
    <span>{title}</span>
    {children}
  </Link>
);

export default MenuTab;
