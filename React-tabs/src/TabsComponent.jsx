import React, { useState } from "react";
import TabList from "./TabList";
import TabContent from "./TabContent";

function TabsComponent() {
  const tabs = [
    {
      id: 1,
      title: "Html",
      content: "Content 1: This is Html Course.",
    },
    {
      id: 2,
      title: "Css",
      content: "Content 2: This is Css Course.",
    },
    {
      id: 3,
      title: "Javascipt",
      content: "Content 3: This is Javascript Course.",
    },
    {
      id: 4,
      title: "React",
      content: "Content 4: This is React Course.",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  //responsible for rendering all tabs and their content
  //This function is called when a tab is clicked
  //Changes the state of activeTab to the id of the clicked tab

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#0078d4",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      <h2>Tabs Component with React</h2>
      <TabList tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
      <TabContent tabs={tabs} activeTab={activeTab} />
    </div>
  );
}

export default TabsComponent;
