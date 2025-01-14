import React, { useState } from 'react';
import './Tabs.css'; // Adjust or create this CSS file

const Tabs = ({ tabs, onTabSelect }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].tabId);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    onTabSelect(tabId);
  };

  return (
    <div className="portfolio-nav">
      {tabs.map(tab => (
        <button
          key={tab.tabId}
          className={activeTab === tab.tabId ? 'active' : ''}
          onClick={() => handleClick(tab.tabId)}
        >
          {tab.displayText}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

