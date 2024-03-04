// src/components/ConfirmationModal.js
import React from "react";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm, product }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex w-full h-full items-center justify-center z-50 bg-black bg-opacity-70 backdrop-filter backdrop-blur-md">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        <p>{`Apakah anda yakin akan menghapus ini, ${product?.NamaProduk}?`}</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>
          <button
            className="bg-gray-400 text-white py-2 px-4 rounded ml-2"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
