"use client";
import React, { useState } from "react";
import Sidebar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import Topbar from "./Components/Topbar";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
  };

  return (
    <div>
      <Topbar />
      <div className="flex h-screen ">
        <Sidebar selectedMenu={selectedMenu} onMenuClick={handleMenuClick} />
        <div className="flex-1 flex flex-col   bg-white ">
          <MainContent selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
