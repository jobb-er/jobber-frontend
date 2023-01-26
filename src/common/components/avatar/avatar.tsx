import { ReactElement } from "react";

import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { AvatarProps } from "./types";

const Avatar = ({
  avatar,
  width = "w-12",
  height = "h-12",
  padding = "p-3",
}: AvatarProps): ReactElement => (
  <>
    {avatar ? (
      <img src={avatar} className="w-full h-full rounded-full" alt="avatar" />
    ) : (
      <NoAvatarIcon className={`${width} ${height} ${padding}`} />
    )}
  </>
);

export default Avatar;
