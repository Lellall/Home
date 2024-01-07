// SliderComponent.js

import React from 'react';
import Slider from 'react-slick';
import ReusableCard from './card';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const unsplashImages = [
    'https://source.unsplash.com/400x300/?product',
    'https://source.unsplash.com/400x300/?technology',
    'https://source.unsplash.com/400x300/?fashion',
    'https://source.unsplash.com/400x300/?nature',
    'https://source.unsplash.com/400x300/?fashion',
    'https://source.unsplash.com/400x300/?nature',
    'https://source.unsplash.com/400x300/?fashion',
    'https://source.unsplash.com/400x300/?nature',
    'https://source.unsplash.com/400x300/?fashion',
    'https://source.unsplash.com/400x300/?nature',
    'https://source.unsplash.com/400x300/?fashion',
    'https://source.unsplash.com/400x300/?nature',
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2   ,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {unsplashImages.map((imageUrl, index) => (
        <ReusableCard
          key={index}
          title={`Product ${index + 1}`}
          price="$19.99"
          discount="20% OFF"
          imageUrl={imageUrl}
          onAddToWishlist={() => console.log(`Added to Wishlist: Product ${index + 1}`)}
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;
