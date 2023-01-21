import { ReactElement } from "react";

import { removeDuplicateWhitespaces } from "common/utils";
import { TabsProps, TabProps } from "./types";

const Tabs = ({ tabs, activeTab, onChangeTab }: TabsProps): ReactElement => (
  <div className="flex items-center">
    {tabs.map(
      (tab: TabProps): ReactElement => (
        <button
          key={tab.key}
          className={removeDuplicateWhitespaces(
            `py-1 px-5 capitalize border first:rounded-l-xl last:rounded-r-xl border-primary focus:outline-none ${
              activeTab === tab.key ? "bg-primary text-white" : ""
            }`,
          )}
          onClick={() => onChangeTab(tab.key)}
        >
          {tab.value}
        </button>
      ),
    )}
  </div>
);

export default Tabs;
