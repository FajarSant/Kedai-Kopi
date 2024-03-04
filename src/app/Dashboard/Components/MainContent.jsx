// components/MainContent.js
import React from 'react';
import PaymentContent from './Payment';
import Table from './Table/Table';
import Menu from '../Components/Tabel/index';

const HomeContent = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold justify-start text-center mb-4">Home Content</h2>
      <p className='justify-center text-center'>Halaman ini Belum Tersedia.</p>
    </div>
  );
};





const RecapContent = () => {
  return (
    <div className=''>
      <h2 className="text-2xl font-bold justify-start text-center mb-4">Recap Content</h2>
      <p className='justify-center text-center'>Halaman ini Belum Tersedia.</p>
    </div>
  );
};


const MainContent = ({ selectedMenu }) => {
  switch (selectedMenu) {
    case 'Home':
      return <HomeContent />;
    case 'Menu':
      return <Menu />;
    case 'Table':
      return <Table />;
    case 'Payment':
      return <PaymentContent />;
    case 'Recap':
      return <RecapContent />;
    default:
      return <p>No content available for this menu item.</p>;
  }
};

export default MainContent;
