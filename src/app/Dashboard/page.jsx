"use client"
import React, { useState } from "react";
import Sidebar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import Topbar from "./Components/Topbar";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleMenuClick = (menuId) => {
    setSelectedMenu(menuId);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-slate-300">
      <div className="flex h-screen p-4">
        {isSidebarOpen && <div className="sm:w-1/5">
          <Sidebar selectedMenu={selectedMenu} onMenuClick={handleMenuClick} isOpen={isSidebarOpen} />
        </div>}
        <div className="flex-1 flex flex-col px-2">
          <Topbar onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
          <MainContent selectedMenu={selectedMenu} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
