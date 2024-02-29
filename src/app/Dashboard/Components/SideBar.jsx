// components/Sidebar.js
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
    <div className=" h-full bg-white text-black p-4 flex flex-col border-r rounded-2xl">

      <ul className="flex flex-col space-y-5 py-5">
        {" "}
        {/* Increase space-y value for more space */}
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => onMenuClick(item.id)}
            className={`cursor-pointer flex items-center p-2 ${
              selectedMenu === item.id
                ? "bg-slate-300 rounded-xl shadow-black"
                : ""
            }`}
            style={{ marginBottom: "0.5rem" }}
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <span className="ml-2 text-lg">{item.label}</span>
          </li>
        ))}
        <p className="text-white py-10">Versi 0.0.1</p>
      </ul>
    </div>
  );
};

export default Sidebar;
