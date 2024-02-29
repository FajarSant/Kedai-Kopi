// Topbar.js
import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const UserIcon = () => {
  return (
    <div className="flex items-center">
      <FaUserCircle size={24} />
    </div>
  );
};

const RealtimeClock = () => {
  const [currentTime, setCurrentTime] = useState('Loading...');

  useEffect(() => {
    // Check if code is running on the client
    const isClient = typeof window !== 'undefined';

    // Set waktu awal saat komponen pertama kali dimount pada client
    if (isClient) {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000); // Setiap detik
      return () => clearInterval(intervalId); // Membersihkan interval saat komponen unmount
    }
  }, []); // Tidak ada dependensi, sehingga useEffect hanya dijalankan sekali

  return (
    <div className="flex items-center text-center">
      {currentTime}
    </div>
  );
};

const Topbar = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <div className="flex bg-white justify-between p-3 mb-4 rounded-2xl">
        {isSidebarOpen ? (
          <RxCross2 size={24} onClick={onToggleSidebar} style={{ cursor: 'pointer' }} />
        ) : (
          <FaBars size={24} onClick={onToggleSidebar} style={{ cursor: 'pointer' }} />
        )}
      <p className=' block sm:hidden'></p>
      <RealtimeClock />
      <UserIcon />
    </div>
  );
};

export default Topbar;
