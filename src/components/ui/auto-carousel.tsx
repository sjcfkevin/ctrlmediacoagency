// components/AutoCarousel.tsx
import React from 'react';
import Slider from 'react-slick';

interface AutoCarouselProps {
  images: string[]; // An array of image paths
}

const AutoCarousel: React.FC<AutoCarouselProps> = ({ images }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,  // Time in milliseconds for each slide
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`carousel-image-${index}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoCarousel;
