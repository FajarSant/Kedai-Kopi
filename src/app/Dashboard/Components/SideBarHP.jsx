import React from "react";
import { FaHome, FaCube, FaInfoCircle, FaUserCircle } from "react-icons/fa";
import { MdTableBar, MdOutlinePayment } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const Sidebar = ({ selectedMenu, onMenuClick }) => {
  const menuItems = [
    { id: "Home", label: "Home", icon: <FaHome size={24} /> },
    { id: "Menu", label: "Menu", icon: <FaCube size={24} /> },
    { id: "Table", label: "Table", icon: <MdTableBar size={24} /> },
    { id: "Payment", label: "Payment", icon: <MdOutlinePayment size={24} /> },
    { id: "Recap", label: "Recap", icon: <TbReportAnalytics size={24} /> },
    // Add more menu items as needed
  ];

  return (
    <div className=" bg-white text-black p-1 flex flex-col border-r rounded-2xl">
      <div className="flex justify-center items-center space-x-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onMenuClick(item.id)}
            className={`cursor-pointer flex items-center p-4 ${
              selectedMenu === item.id
                ? "bg-slate-300 rounded-xl shadow-black"
                : ""
            }`}
          >
            <div className="flex items-center justify-center">{item.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
