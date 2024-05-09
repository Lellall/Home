import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card } from "./FavStores";
import NewProducts, { ProdCard } from "./Surface";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ShopCard } from "./features/shop/components";
import styled from "styled-components";
import { BaseUrl } from "./utils/config";

const MultipleItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [shopData, setShopData] = useState([]);
  const { shopId } = useParams();
  useEffect(() => {
    axios
      .get(`${BaseUrl}/shops`)
      .then((res) => setShopData([...res?.data?.data]));
  }, []);

  // console.log(shopData,'shopData');

  return (
    <div style={{ width: "90%", margin: "0 auto", borderRadius: "8px" }}>
      <Slider {...settings}>
        {/* {[...Array(6)].map((_, index) => (
          <div key={index}>
            <Card />
          </div>
        ))} */}

        {shopData?.map((shop) => (
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ShopCard width="10px" shop={shop} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Slider from 'react-slick'; // Make sure to import the Slider component from 'react-slick'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

const MultipleProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed according to your preference
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [shopsData, setShopsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/products`);
        // Set the fetched data in the state
        setShopsData(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div
      style={{
        background: "transparent",
        width: "100%",
        borderRadius: "8px",
      }}
    >
      <Slider {...settings}>
        {shopsData.map((shop, index) => (
          <div key={index}>
            <ShopCardNew style={{ backgroundImage: `url(${shop.imageUrl})` }}>
              <InnerCard>
                <StyledText style={{ fontSize: "25px" }}>
                  {shop.name}
                </StyledText>
                <StyledText>{shop?.description}</StyledText>
                <button
                  style={{ marginLeft:'15px' }}
                  onClick={() => navigate(`product/${shop?.id}`)}
                >
                  Buy Now!
                </button>
              </InnerCard>
            </ShopCardNew>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleProducts;

export { MultipleItems, MultipleProducts };

export const ShopCardNew = styled.div`
  // background-image: url(https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-position: center;
  // background: tomato;
  background-size: cover;
  min-height: 60vh;
  margin: 0 10px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  color: #fff;
  @media (max-width: 1044px) {
    min-height: 30vh;
  }
`;

export const InnerCard = styled.div`
  position: absolute;
  padding: 30px;
  border-radius: 0% 100% 100% 0% / 58% 0% 100% 88%;
  margin: 0;
  width: 60%;
  z-index: 1;
  button {
    // font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: #fff;
    cursor: pointer;
  }
  height: 100%;
  // border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
  // clip-path: polygon(0 0, 100% 0%, 75% 100%, 0 100%);
  background-color: #3a1900b0;
  // background-color: #ffffffcc;
  h1 {
    color: #fff;

    /* Heading/48PX SemiBold */
    // font-family: Inter;
    z-index: 1;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px; /* 125% */
    letter-spacing: 1.92px;
  }
  // box-shadow: 20px 20px 60px orange, -20px -20px 60px purple;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    border-radius: 0;
    padding: 20px 10px;
    padding: 20px;
    height: 100%;
    border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
    font-size: 13px;
  }
  @media only screen and (max-width: 500px) {
    // background: red;
    font-size: 13px;
    padding: 0 5 0px;
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    /* padding-top: 10px; */
    box-shadow: none;
    border-radius: 0;
  }
`;

const StyledText = styled.div`
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
  padding: 20px;
  font-weight: 500;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    padding: 5px;
  }
`;
