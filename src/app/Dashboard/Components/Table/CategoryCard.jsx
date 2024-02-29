// components/KategoriCards.js
import React, { useEffect, useState } from 'react';

const KategoriCards = () => {
  const [kategoriData, setKategoriData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/product/Kategori');
        const data = await response.json();
        setKategoriData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-white p-2 mb-2 sm:p-4 sm:mb-4 rounded-2xl'>
  <div className="grid grid-cols-2 sm:grid-cols-7 sm:gap-2 gap-1">
    {kategoriData.map((kategori) => (
      <div key={kategori.kategori} className="bg-red-700 p-4 rounded shadow text-white w-full h-full">
        <div className="sm:text-lg text-xs justify-center text-center font-bold">{kategori.kategori}</div>
        <div className="text-gray-100 text-xs sm:text-lg justify-start text-center">{kategori.jumlahProduk} Produk</div>
      </div>
    ))}
  </div>
</div>

  );
};

export default KategoriCards;
