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

  const handleCardSwipe = (direction, index) => {
    // Handle card swipe logic here
    // You can use CSS transitions or a library like react-spring for smoother animations
    // Update kategoriData state based on the swipe direction and index
  };

  return (
    <div className='bg-white p-2 mb-2 sm:p-4 sm:mb-4 rounded-2xl overflow-hidden'>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2">
        {kategoriData.map((kategori, index) => (
          <div
            key={kategori.kategori}
            className="bg-red-700 p-4 rounded shadow text-white"
            draggable="true"
            onDragEnd={() => handleCardSwipe('right', index)}
            onDragStart={(e) => e.dataTransfer.setData('text/plain', 'Dragging')}
          >
            <div className="sm:text-lg text-xs justify-center text-center font-bold">{kategori.kategori}</div>
            <div className="text-gray-100 text-xs sm:text-lg justify-start text-center">{kategori.jumlahProduk} Produk</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KategoriCards;
