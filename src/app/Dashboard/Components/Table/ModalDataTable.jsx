// components/ModalDataTable.js
import React from 'react';

const ModalDataTable = ({ closeModal, reservationData, handleCompleteOrder }) => {
  const completeOrder = () => {
    handleCompleteOrder(reservationData);
    closeModal();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      onClick={closeModal}
    >
      <div className="bg-white w-1/2 p-6 rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4">Reservation Details</h2>
        {reservationData ? (
          <div>
            <p>
              <span className="font-bold">Table Name:</span> {reservationData.name}
            </p>
            <p>
              <span className="font-bold">Phone Number:</span> {reservationData.phoneNumber}
            </p>
            {/* Add more fields as needed */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
              onClick={completeOrder}
            >
              Complete Order
            </button>
          </div>
        ) : (
          <p>No reservation data available.</p>
        )}
      </div>
    </div>
  );
};

export default ModalDataTable;
