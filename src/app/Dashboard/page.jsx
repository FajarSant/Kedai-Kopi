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
    <div className=" bg-slate-300">
      <div className="flex h-screen p-2 sm:p-4">
        <Sidebar selectedMenu={selectedMenu} onMenuClick={handleMenuClick} />
        <div className="flex-1 flex flex-col px-2">
          <Topbar />
          <MainContent selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
