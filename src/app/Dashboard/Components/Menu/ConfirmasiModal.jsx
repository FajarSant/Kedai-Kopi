// src/components/ConfirmationModal.js
import React from "react";

const ConfirmationModal = ({ isOpen, onCancel, onConfirm, product }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Konfirmasi Penghapusan</h2>
        <p>Anda yakin ingin menghapus {product?.ProdukID}?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={onConfirm}
          >
            Ya, Hapus
          </button>
          <button
            className="bg-gray-400 text-white py-2 px-4 rounded ml-2"
            onClick={onCancel}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
