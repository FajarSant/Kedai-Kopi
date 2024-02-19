// components/PaymentContent.js
import React, { useState } from 'react';
import { FaClipboard, FaTable } from 'react-icons/fa';

const orderedProducts = [
  { id: 1, name: 'Product A', price: 20, quantity: 2 },
  { id: 2, name: 'Product B', price: 15, quantity: 1 },
  { id: 3, name: 'Product C', price: 25, quantity: 3 },
  // Add more ordered products as needed
];

const PaymentContent = () => {
  const [discount, setDiscount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);

  const totalQuantity = orderedProducts.reduce((sum, product) => sum + product.quantity, 0);
  const totalPrice = orderedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const orderNumber = '12345'; // Replace with actual order number
  const tableNumber = 'Meja 1'; // Replace with actual table number

  const handleBayarSekarang = () => {
    // Add logic to handle payment
    const change = paidAmount - (totalPrice - discount);
    if (change >= 0) {
      alert(`Pembayaran berhasil! Kembalian: ${change}`);
    } else {
      alert('Jumlah pembayaran tidak mencukupi.');
    }
  };

  const handleBatalkanOrder = () => {
    // Add logic to cancel order
    alert('Order berhasil dibatalkan!');
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      {/* Top Bar */}
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <FaClipboard className="text-lg mr-2" />
          <p className="text-sm font-bold">Nomor Order: {orderNumber}</p>
        </div>
        <div className="flex items-center">
          <FaTable className="text-lg mr-2" />
          <p className="text-sm font-bold">Meja: {tableNumber}</p>
        </div>
        {/* Waktu dihapus dari sini */}
      </div>

      {/* Content Containers */}
      <div className="flex flex-1">
        {/* Ordered Products Table */}
        <div className="w-3/4 bg-white rounded-md p-4 mr-4 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Produk yang Dipesan</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Nama</th>
                <th className="py-2 text-left">Jumlah</th>
                <th className="py-2 text-left">Harga Satuan</th>
                <th className="py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderedProducts.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-2">{product.name}</td>
                  <td className="py-2">{product.quantity}</td>
                  <td className="py-2">${product.price}</td>
                  <td className="py-2">${product.price * product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 my-10 rounded-md"
              onClick={handleBatalkanOrder}
            >
              Batalkan Order
            </button>
          </div>
        </div>

        {/* Summary Container (Total Quantity and Total Price) */}
        <div className="w-1/4 bg-gray-200 rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Pembayaran</h2>
          {orderedProducts.map((product) => (
            <div key={product.id} className="flex justify-between mb-2">
              <span>{product.name} x {product.quantity}</span>
              <span>${product.price} each</span>
              <span>${product.price * product.quantity}</span>
            </div>
          ))}
         
          <div className="flex justify-between">
            <span className="font-bold">SubTotal:</span>
            <span className="font-bold">${totalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="font-bold">Diskon:</span>
            <input
              type="number"
              className="border p-1"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
            />
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <span className="font-bold">Total Harga:</span>
            <span className="font-bold">${totalPrice - discount}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">Uang yang Dibayar:</span>
            <input
              type="number"
              className="border p-1"
              value={paidAmount}
              onChange={(e) => setPaidAmount(parseFloat(e.target.value))}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-bold">Kembalian:</span>
            <span className="font-bold">${paidAmount - (totalPrice - discount)}</span>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleBayarSekarang}
          >
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentContent;
