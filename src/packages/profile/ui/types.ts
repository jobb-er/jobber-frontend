import { Dispatch, SetStateAction } from "react";

import { Auth } from "../../app";

export interface ProfileMapState {
  auth: Auth;
}

export interface ProfileProps {
  auth?: Auth;
}

export interface ProfileContextProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  mode: "view" | "edit";
  setMode: Dispatch<SetStateAction<"view" | "edit">>;
}
