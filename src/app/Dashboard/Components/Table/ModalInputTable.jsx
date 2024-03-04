// components/ModalInput.js
import React, { useState } from 'react';

const ModalInput = ({ closeModal, handleFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Add validation logic if needed
    handleFormSubmit(formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 z-50 bg-opacity-70 backdrop-filter backdrop-blur-md">
      <div className="bg-white w-full md:w-96 p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Reservation Form</h2>

        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full md:w-64 border rounded-md py-1 px-2"
          />
        </label>

        <label className="block mb-2">
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full md:w-64 border rounded-md py-1 px-2"
          />
        </label>

        {/* Add more input fields as needed */}
        
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalInput;
