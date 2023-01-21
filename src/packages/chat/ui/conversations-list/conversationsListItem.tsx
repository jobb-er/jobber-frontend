import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { removeDuplicateWhitespaces } from "common/utils";
import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { ConversationsListItemProps } from "./types";

const ConversationsListItem = ({
  user,
  latestMessage,
  markAsRead,
}: ConversationsListItemProps): ReactElement => {
  const { pathname } = useLocation();
  const isActive = pathname.includes(user.id);

  return (
    <NavLink
      to={`/messages/${user.id}`}
      className={`${removeDuplicateWhitespaces(
        `flex flex-row justify-between items-stretch rounded-xl text-primary p-4 gap-4 ${
          isActive ? "bg-secondary-light" : ""
        }`,
      )}`}
    >
      <div className="flex box-content justify-center items-center w-12 h-12">
        <div className="box-content border border-primary w-12 h-12 rounded-full focus:outline-none">
          {user?.avatar ? (
            <img
              src={user.avatar}
              className="w-12 h-12 rounded-full"
              alt="avatar"
            />
          ) : (
            <NoAvatarIcon className="w-12 h-12 p-3" />
          )}
        </div>
      </div>
      <div className="flex flex-col grow justify-center truncate">
        <div className="h-6 text-lg font-medium truncate capitalize">
          <span>{user.firstName}</span>
          <span> {user.lastName}</span>
        </div>
        <div className="h-5 text-base truncate">
          <div className="capitalize inline-block">
            {latestMessage.received ? user.firstName : "You"}:{" "}
          </div>
          <div className="w-16 inline-block">&nbsp;{latestMessage.message}</div>
        </div>
      </div>
      <div
        className={`${removeDuplicateWhitespaces(
          `flex justify-center items-center ${markAsRead && "hidden"}`,
        )}`}
      >
        <div className="bg-action h-4 w-4 rounded-lg"></div>
      </div>
    </NavLink>
  );
};

export default ConversationsListItem;
