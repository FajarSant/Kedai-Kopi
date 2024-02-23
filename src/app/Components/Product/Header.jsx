// Header.js
import React from 'react';
import ImageCarousel from "./ImageCoursel";

const Header = () => {
  const carouselImages = [
    '/img/promo2.jpg',
    '/img/promo2.jpg',
    '/img/promo2.jpg',
    // Tambahkan path gambar lainnya jika diperlukan
  ];

  return (
    <div>

    <div className="relative items-center justify-center mb-4 p-2 sm:p-4 h-[130px] sm:h-[350px]  bg-center w-[90%] sm:w-full mx-auto rounded-xl  shadow-sm">
      <ImageCarousel images={carouselImages} />
    </div>
    </div>
  );
};

export default Header;
