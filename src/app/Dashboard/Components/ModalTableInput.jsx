// components/MenuModal.js
import React, { useState, useEffect } from "react";

const MenuModal = ({ isOpen, closeModal, addMenu }) => {
  const [newMenu, setNewMenu] = useState({ name: "", category: "", price: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMenu({ ...newMenu, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMenu(newMenu);
    closeModal();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && e.target.classList.contains("modal-overlay")) {
        closeModal();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  return (
    <div className={`modal ${isOpen ? "flex" : "hidden"} mt-10 justify-center fixed inset-0 z-30`}>
      <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-96 mx-auto mt-10 p-4 rounded-lg shadow-lg fixed">
        <div className="flex justify-end">
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nama Menu
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="name"
              name="name"
              value={newMenu.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Kategori
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="category"
              name="category"
              value={newMenu.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Harga
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="number"
              id="price"
              name="price"
              value={newMenu.price}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 py-2 px-4 text-white rounded-lg hover:bg-green-700"
          >
            Tambahkan Menu
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuModal;
