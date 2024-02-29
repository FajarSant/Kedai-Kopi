// ImageCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Mengaktifkan autoplay
    autoplaySpeed: 3000, // Mengatur kecepatan autoplay (ms)
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="relative sm:p-4 p-2">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className=" w-full h-250px] sm:h-[400px] rounded-lg  object-cover"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
