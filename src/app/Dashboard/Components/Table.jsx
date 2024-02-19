// components/MainContentTable.js
import React, { useState } from 'react';
import { FaTable } from 'react-icons/fa';
import ModalInput from './ModalTableInput';
import ModalDataTable from './ModelDataTable';

const MainContentTable = () => {
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const [isDataTableModalOpen, setIsDataTableModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationData, setReservationData] = useState({});

  const openInputModal = () => {
    setIsInputModalOpen(true);
  };

  const closeInputModal = () => {
    setIsInputModalOpen(false);
  };

  const openDataTableModal = () => {
    setIsDataTableModalOpen(true);
  };

  const closeDataTableModal = () => {
    setIsDataTableModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    setReservationData((prevData) => ({
      ...prevData,
      [selectedTable]: data,
    }));
    setSelectedTable(null);
    closeInputModal();
  };

  const handleCompleteOrder = () => {
    // Add logic to handle completing the order for the selected table
    setReservationData((prevData) => {
      const newData = { ...prevData };
      delete newData[selectedTable];
      return newData;
    });
    setSelectedTable(null);
    closeDataTableModal();
  };

  // Assuming you want to display 12 tables
  const tableCount = 12;
  const tables = Array.from({ length: tableCount }, (_, index) => index + 1);

  return (
    <div className="flex flex-wrap justify-center p-4 bg-gray-100">
      {tables.map((tableNumber) => (
        <div
          key={tableNumber}
          className={`w-1/5 p-4 cursor-pointer mb-4 mx-2 border rounded-md ${
            reservationData[tableNumber] ? 'bg-green-100' : 'bg-white shadow-md hover:shadow-lg'
          }`}
          onClick={() => {
            setSelectedTable(tableNumber);
            reservationData[tableNumber] ? openDataTableModal() : openInputModal();
          }}
        >
          <div className="flex items-center justify-center">
            <FaTable className="text-4xl mb-2" />
          </div>
          <p className="text-center text-xl font-bold mb-2">Table {tableNumber}</p>
          <p
            className={`text-center text-sm ${
              reservationData[tableNumber] ? 'text-green-500' : ''
            }`}
          >
            {reservationData[tableNumber] ? 'Status: Reserved' : 'Status: Available'}
          </p>
        </div>
      ))}
      {/* Modals */}
      {isInputModalOpen && (
        <ModalInput
          closeModal={closeInputModal}
          handleFormSubmit={(data) => handleFormSubmit(data)}
        />
      )}
      {isDataTableModalOpen && (
        <ModalDataTable
          closeModal={closeDataTableModal}
          reservationData={reservationData[selectedTable]}
          handleCompleteOrder={handleCompleteOrder}
        />
      )}
    </div>
  );
};

export default MainContentTable;
