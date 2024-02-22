// EditModal.js
import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, onEdit, product }) => {
  const [editedData, setEditedData] = useState({
    NamaProduk: product ? product.NamaProduk : '',
    Deskripsi: product ? product.Deskripsi : '',
    Harga: product ? product.Harga : '',
    Stok: product ? product.Stok : '',
    Kategori: product ? product.Kategori : '',
  });
  useEffect(() => {
    if (product) {
      // Mengisi formulir dengan data produk yang akan diubah
      setEditedData({
        NamaProduk: product.NamaProduk,
        Deskripsi: product.Deskripsi,
        Harga: product.Harga,
        Stok: product.Stok,
        Kategori: product.Kategori,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEdit = () => {
    onEdit(editedData);
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="modal-content bg-white w-1/2 p-4 rounded-md">
          <div className="flex justify-end">
            <button className="text-red-500 hover:text-red-700" onClick={onClose}>
              Close
            </button>
          </div>
          <h2 className="text-2xl font-bold text-center justify-center p-2 underline mb-4">Edit Product</h2>
          <form className="mt-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NamaProduk">
      Nama Produk:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="NamaProduk"
      type="text"
      name="NamaProduk"
      value={editedData.NamaProduk}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Deskripsi">
      Deskripsi:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Deskripsi"
      type="text"
      name="Deskripsi"
      value={editedData.Deskripsi}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Harga">
      Harga:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Harga"
      type="text"
      name="Harga"
      value={editedData.Harga}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Stok">
      Stok:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Stok"
      type="text"
      name="Stok"
      value={editedData.Stok}
      onChange={handleChange}
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Kategori">
      Kategori:
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="Kategori"
      type="text"
      name="Kategori"
      value={editedData.Kategori}
      onChange={handleChange}
    />
  </div>
  <button
    type="button"
    className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    onClick={handleEdit}
  >
    Simpan
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default EditModal;
