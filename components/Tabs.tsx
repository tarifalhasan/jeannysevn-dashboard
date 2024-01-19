// Tabs.tsx

import React from "react";

interface Tab {
  id: number;
  label: string;
  data: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  onTabClick: (tabId: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="mb-6">
      <ul className="flex flex-wrap lg:flex-nowrap space-x-4">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            className={`tab ${
              tab.id === activeTab ? "tab-active" : ""
            } sm:grow-0 grow  text-center `}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {/* Render content for the active tab based on activeTab and tabs data */}
        {/* {tabs.find((tab) => tab.id === activeTab)?.data} */}
      </div>
    </div>
  );
};

export default Tabs;
