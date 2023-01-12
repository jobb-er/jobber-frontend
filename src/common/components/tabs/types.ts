export interface TabProps {
  key: string;
  value: string;
}

export interface TabsProps {
  tabs: TabProps[];
  activeTab: string;
  onChangeTab: (newTab: string) => void;
}
