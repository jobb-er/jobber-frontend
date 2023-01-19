import { ReactElement } from "react";
import { ConversationsListItemProps } from "./types";
import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { NavLink, useLocation } from "react-router-dom";

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
      className={`flex flex-row justify-between items-stretch rounded-xl text-primary p-4 gap-4 ${
        isActive ? "bg-secondary-light" : ""
      }`}
    >
      <div className="flex box-content justify-center items-center w-16 h-16">
        <div className="box-content border border-primary rounded-full focus:outline-none">
          {user.avatar || <NoAvatarIcon className="w-16 h-16 p-3" />}
        </div>
      </div>
      <div className="flex flex-col grow justify-center truncate">
        <div className="h-6 text-msg-conv-list-title font-medium truncate capitalize">
          <span>{user.firstName}</span>
          <span> {user.lastName}</span>
        </div>
        <div className="h-5 text-msg-conv-list-msg truncate">
          <span className="capitalize">
            {latestMessage.received ? user.firstName : "You"}:{" "}
          </span>
          <span>{latestMessage.message}</span>
        </div>
      </div>
      <div
        className={`flex justify-center items-center ${markAsRead && "hidden"}`}
      >
        <div className="bg-action h-4 w-4 rounded-lg"></div>
      </div>
    </NavLink>
  );
};

export default ConversationsListItem;
