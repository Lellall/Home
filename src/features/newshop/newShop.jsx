// SliderComponent.js

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReusableCard from "./card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SliderComponent = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.dev.lellall.com/products?page=0&size=10"
        );
        // Set the fetched data in the state
        setProducts(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

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
