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
      className={`flex flex-row justify-between items-stretch rounded-xl text-primary ${
        isActive ? "bg-secondary-light" : ""
      }`}
    >
      <div className="flex justify-center items-center w-24 h-24 p-4">
        <div className="w-16 h-16 border border-primary rounded-full focus:outline-none">
          {user.avatar || <NoAvatarIcon className="w-16 h-16 p-3" />}
        </div>
      </div>
      <div className="flex flex-col grow justify-between pt-5 pb-7 truncate">
        <div className="h-6 text-msg-conv-list-title font-medium truncate">
          {user.firstName} {user.lastName}
        </div>
        <div className="h-5 text-msg-conv-list-msg truncate">
          {latestMessage.received ? user.firstName : "You"}:{" "}
          {latestMessage.message}
        </div>
      </div>
      <div
        className={`flex justify-center items-center px-4 ${
          markAsRead && "hidden"
        }`}
      >
        <div className="bg-action h-4 w-4 rounded-lg"></div>
      </div>
    </NavLink>
  );
};

export default ConversationsListItem;
