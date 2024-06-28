// SliderComponent.js

import React from "react";
import Slider from "react-slick";
import ReusableCard from "./card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const General = (dislay) => {
  const unsplashImages = [
    "https://source.unsplash.com/400x300/?cooking",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?onions",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?apples",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?rice",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?carrot",
    "https://source.unsplash.com/400x300/?peach",
    "https://source.unsplash.com/400x300/?potato",
    "https://source.unsplash.com/400x300/?kitchen",
    // Add more image URLs as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <div style={{ margin: "0 10px", }}>

      <Slider {...settings}>
        {unsplashImages.map((imageUrl, index) => (
          <ReusableCard
            key={index}
            title={`Product ${index + 1}`}
            price="N19.99"
            discount="20% OFF"
            imageUrl={imageUrl}
            onAddToWishlist={() =>
              console.log(`Added to Wishlist: Product ${index + 1}`)
            }
          />
        ))}
      </Slider>
    </div>
  );
};

const TopSnacker = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
`;
const TopSnackerColor = styled.div`
  width: 20px;
  background: orange;
`;

export default General;
