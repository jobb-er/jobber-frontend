import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as NoAvatarIcon } from "common/images/top-bar/noAvatar.svg";
import { SearchUserItemProps } from "./types";

const SearchUserItem = ({user}: SearchUserItemProps): ReactElement => {
    return <NavLink key={user.id} to={`/messages/${user.id}`}>
    <li className="flex flex-row group gap-3 text-primary cursor-pointer hover:bg-primary hover:text-white rounded-xl p-2">
      <div className="flex box-content justify-center items-center">
        <div className="w-10 h-10 box-content border border-primary group-hover:border-white rounded-full focus:outline-none">
          {user?.avatar ? (
            <img
              src={user.avatar}
              className="w-full h-full rounded-full"
              alt="avatar"
            />
          ) : (
            <NoAvatarIcon className="w-10 h-10 p-3" />
          )}
        </div>
      </div>
      <div className="flex flex-col flex-auto justify-center truncate">
        <div className="font-medium truncate capitalize">
          <span>{user.firstName}</span>
          <span> {user.lastName}</span>
        </div>
        <div className="text-sm truncate">{user.email}</div>
      </div>
    </li>
  </NavLink>;
};

export default SearchUserItem;
