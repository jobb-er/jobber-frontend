import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { MESSAGES } from "common/constants";
import { SearchUserItemProps } from "./types";
import Avatar from "common/components/avatar/avatar";

const SearchUserItem = ({ user }: SearchUserItemProps): ReactElement => (
  <NavLink key={user.id} to={`${MESSAGES}/${user.id}`}>
    <li className="flex flex-row group gap-3 text-primary cursor-pointer hover:bg-primary hover:text-white rounded-xl p-2">
      <div className="flex box-content justify-center items-center">
        <div className="w-10 h-10 box-content border border-primary group-hover:border-white rounded-full focus:outline-none">
          <Avatar avatar={user?.avatar} width="w-10" height="h-10" />
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
  </NavLink>
);

export default SearchUserItem;
