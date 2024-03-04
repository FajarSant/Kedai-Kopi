// Kategori.js
import React from 'react';
import Link from 'next/link';

const Kategori = () => {
  return (
    <div className="flex justify-center text-center ">
      <div className='grid grid-cols-3 sm:grid-cols-6 gap-6'>
      <Link href="/Produk/Makanan">
        <div className=" bg-transparent p-2 rounded-lg shadow-lg text-center text-sm transition-transform transform hover:scale-110 w-20 h-20">
          <div className="rounded-md mb-2 flex items-center justify-center">
            <img
              src="/img/Makanan.png"
              alt="Minuman"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <span className="">Makanan</span>
        </div>
      </Link>
      <Link href="/Produk/Minuman">
        <div className=" bg-transparent p-2 rounded-lg shadow-lg text-center text-sm transition-transform transform hover:scale-110 w-20 h-20">
          <div className="rounded-md mb-2 flex items-center justify-center">
            <img
              src="/img/Minuman.png"
              alt="Minuman"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <span className="">Minuman</span>
        </div>
      </Link>
      <Link href="/Produk/IceDrink">
        <div className=" bg-transparent p-2 rounded-lg shadow-lg text-center text-sm transition-transform transform hover:scale-110 w-20 h-20">
          <div className="rounded-md mb-2 flex items-center justify-center">
            <img
              src="/img/Ice_Drink.png"
              alt="Minuman"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <span className="">Ice Drink</span>
        </div>
      </Link>
      <Link href="/Produk/Coffe">
        <div className=" bg-transparent p-2 rounded-lg shadow-lg text-center text-sm transition-transform transform hover:scale-110 w-20 h-20">
          <div className="rounded-md mb-2 flex items-center justify-center">
            <img
              src="/img/Coffee.png"
              alt="Minuman"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <span className="">Coffee</span>
        </div>
      </Link>
      <Link href="/Produk/Snack">
        <div className=" bg-transparent p-2 rounded-lg shadow-lg text-center text-sm transition-transform transform hover:scale-110 w-20 h-20">
          <div className="rounded-md mb-2 flex items-center justify-center">
            <img
              src="/img/Snack.png"
              alt="Minuman"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <span className="">Snack</span>
        </div>
      </Link>
      <Link href="/Produk/Paket">
        <div className=" bg-transparent p-2 rounded-lg shadow-lg text-center text-sm transition-transform transform hover:scale-110 w-20 h-20">
          <div className="rounded-md mb-2 flex items-center justify-center">
            <img
              src="/img/Paket.png"
              alt="Minuman"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <span className="">Paket</span>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Kategori;
