import React from 'react';
import { MdTableBar } from "react-icons/md";

const Table = () => {
  return (
    <div className='bg-white p-4 rounded-xl h-auto w-auto'>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center text-center">
        <div className='bg-slate-200 rounded-lg p-4'>
          <div className='flex items-center justify-center mb-2'>
            <MdTableBar className='text-4xl text-gray-700' />
          </div>
          <h1 className='text-xl font-semibold mb-2'>Tabel</h1>
          <p className='text-gray-600'>Status:</p>
        </div>
        <div className='bg-slate-200 rounded-lg p-4'>
          <div className='flex items-center justify-center mb-2'>
            <MdTableBar className='text-4xl text-gray-700' />
          </div>
          <h1 className='text-xl font-semibold mb-2'>Tabel</h1>
          <p className='text-gray-600'>Status:</p>
        </div>
      </div>
    </div>
  );
}

export default Table;
