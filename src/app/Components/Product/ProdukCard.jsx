"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageSrc = product.image ? `/img/${product.image}` : '/img/notfound.jpg';

  return (
    <div
      className="bg-white shadow-xl sm:h-[300px] h-[270px] rounded-2xl  relative overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute text-sm top-0 right-0 bg-red-600 text-white p-2 rounded-2xl">
        Rp: {product.Harga}
      </div>
      <img
        src={imageSrc}
        alt={product.name}
        className={`rounded w-full object-cover transition-all duration-300 ${isHovered ? 'h-28' : 'h-full'}`}
      />
      {isHovered && (
        <div className="flex flex-col justify-between text-sm flex-grow p-1">
          <div className='pb-2'>
            <h1 className=" sm:text-lg text-xs justify-start text-center font-semibold text-gray-800">
              {product.NamaProduk}
            </h1>
          </div>
          <div className=' sm:h-24 h-20'> 
          <p className="text-gray-600 sm:text-lg text-xs">{product.Deskripsi}</p>
          </div>
          <div className="text-xs py-1 text-center justify-center ">
            <button className="bg-blue-500 text-white rounded p-1 mr-1 sm:p-2 ">
              Buy Now
            </button>
            <Link href={`/Produk/${product.id}`}>
              <span className="bg-gray-500 text-white rounded p-1 sm:p-2 ">
                Detail
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
