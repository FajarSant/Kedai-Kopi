// AddModal.js
import React, { useState } from 'react';

const AddModal = ({ isOpen, onClose, onAdd }) => {
  const [newData, setNewData] = useState({
    NamaProduk: '',
    Deskripsi: '',
    Harga: '',
    Stok: '',
    Kategori: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = () => {
    onAdd(newData);
    setNewData({
      NamaProduk: '',
      Deskripsi: '',
      Harga: '',
      Stok: '',
      Kategori: '',
    });
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-content bg-slate-200 w-1/3 p-4 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button className="text-red-500 hover:text-red-700" onClick={onClose}>
              Close
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center justify-center underline mb-4">Tambahkan Produk</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Nama Produk:</label>
              <input
                type="text"
                name="NamaProduk"
                value={newData.NamaProduk}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Deskripsi:</label>
              <input
                type="text"
                name="Deskripsi"
                value={newData.Deskripsi}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Harga:</label>
              <input
                type="text"
                name="Harga"
                value={newData.Harga}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Stok:</label>
              <input
                type="text"
                name="Stok"
                value={newData.Stok}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium">Kategori:</label>
              <input
                type="text"
                name="Kategori"
                value={newData.Kategori}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleAdd}
            >
              Tambah Produk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
