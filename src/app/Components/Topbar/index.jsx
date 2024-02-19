// TopBar.jsx
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import UserActionsButton from './UserActionsButton';
import SearchBar from './Searchbar'; 
const TopBar = () => {
  return (
    <div className="bg-green-500 text-2xl md:text-xl lg:text-3xl xl:text-3xl text-white p-3 md:p-3x flex justify-between items-center">
      <div className="font-bold text-lg md:text-xl lg:text-3xl xl:text-3xl hidden sm:block">
        Your Brand
      </div>
      <SearchBar />
      <div className="flex items-center text-lg md:text-xl lg:text-3xl  xl:text-3xl space-x-4 lg:mr-5 xl:mr-5">
        <Link href="/Shop">
          <span className="hover:text-gray-400">
            <FiShoppingCart />
          </span>
        </Link>
        <UserActionsButton />
      </div>
    </div>
  );
};

export default TopBar;
