// components/MainContent.js
import React from 'react';
import PaymentContent from './Payment';
import Table from './Table';
import Menu from './MenuTabel';

const HomeContent = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Home Content</h2>
      <p>This is the Home page content.</p>
    </div>
  );
};





const RecapContent = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recap Content</h2>
      <p>This is the Recap page content.</p>
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
