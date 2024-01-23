// SliderComponent.js

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReusableCard from "./card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useProductStore from "../../app/productStore";

const SliderComponent = () => {
  const navigate = useNavigate()
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  console.log(products,'products');

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log(products,'products');


  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: products?.length > 5 ? 2 : 1,
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
        {products.map((product, index) => (
          <ReusableCard
            key={index}
            title={product?.name}
            price={product?.price}
            discount="20% OFF"
            imageUrl={product?.imageUrl}
            onAddToWishlist={() => navigate(`product/${product?.id}`)}
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

export default SliderComponent;
