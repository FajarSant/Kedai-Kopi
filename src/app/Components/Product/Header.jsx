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

      <div className=" items-center justify-center mb-4 p-2 sm:p-4   bg-center w-[90%] sm:w-full mx-auto rounded-xl  ">
        <ImageCarousel images={carouselImages} />
      </div>
    </div>
  );
};

export default Header;
