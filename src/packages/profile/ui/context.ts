import { createContext, useContext } from "react";

import { ABOUT } from "common/constants";
import { ProfileContextProps } from "./types";

const initialState: ProfileContextProps = {
  activeTab: ABOUT,
  setActiveTab: () => "",
};

export const ProfileContext = createContext<ProfileContextProps>(initialState);

export const useProfileContext = (): ProfileContextProps => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "Profile compound components cannot be rendered outside the Profile component",
    );
  }
  return context;
};
