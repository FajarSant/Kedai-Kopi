"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(`Search for: ${query}`);
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="px-2 py-2 border text-black border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg w-full md:w-64 lg:w-80 xl:w-96 text-sm md:text-base lg:text-lg xl:text-xl"
        />
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 px-2 text-black bg-white-blur"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
