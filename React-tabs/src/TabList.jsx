import React from "react";

const TabList = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div
      //tabs  style
      style={{
        display: "flex",
        cursor: "pointer",
        borderBottom: "2px solid #fff",
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          style={{
            padding: "10px 20px",
            borderBottom: activeTab === tab.id ? "2px solid yellow" : "none",
            color: activeTab === tab.id ? "#fff" : "#a0c4ff",
          }}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default TabList;
