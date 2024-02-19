import React from 'react';

const ShoppingCartModal = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-4 md:p-8 rounded-md">
        {/* Konten modal, seperti daftar belanja atau tombol tutup */}
        <h2 className="text-xl md:text-2xl">Your Shopping Cart</h2>
        {/* ... Isi dengan konten shopcart */}
        <button onClick={onClose} className="bg-green-500 text-white p-2 mt-4">Close</button>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
