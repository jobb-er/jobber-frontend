import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as BackIcon } from "../../../common/images/back-link/back.svg";
import { BackLinkProps } from "./types";

const BackLink = ({ path, title }: BackLinkProps): ReactElement => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center gap-3 text-primary font-medium hover:underline focus:outline-none"
      onClick={() => navigate(path)}
    >
      <BackIcon className="w-5" />
      {title}
    </button>
  );
};

export default BackLink;
