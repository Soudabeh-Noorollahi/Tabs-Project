import React from "react";

const TabContent = ({ tabs, activeTab }) => {
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        backgroundColor: "#005ba1",
        borderRadius: "8px",
      }}
    >
      {activeContent}
    </div>
  );
};

export default TabContent;
