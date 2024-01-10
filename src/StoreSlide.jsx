import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card } from "./FavStores";
import NewProducts, { ProdCard } from "./Surface";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShopCard } from "./features/shop/components";
import styled from "styled-components";

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
      .get(`https://api.dev.lellall.com/shops`)
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

const MultipleProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  return (
    <div
      style={{
        background: "transparent",
        width: "100%",
        // margin: "0 auto",
        borderRadius: "8px",
      }}
    >
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <ShopCardNew>
              <InnerCard>
                <h1>Lellall Wuse Market</h1>
                <p>
                  "Discover Unmatched Convenience: Our Doors Are Open 8 Hours a
                  Day <br />
                  to Cater to Your Every Need. Experience the Ultimate Ease with
                  Our Lightning-Fast Delivery,
                  <br /> Guaranteed to Reach You Within a Swift Hour!"
                </p>
                <button>Explore more! </button>
              </InnerCard>
            </ShopCardNew>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { MultipleItems, MultipleProducts };

const ShopCardNew = styled.div`
  background: url(https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-position: center;
  background-size: cover;
  min-height: 55vh;
  margin: 0 10px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  color: #fff
`;

const InnerCard = styled.div`
  position: absolute;
  padding: 30px;
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
color: #fff ;
cursor: pointer

  }
  height: 100%;
  // border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0 100%);
  background-color: #000000c4;
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
  box-shadow: 20px 20px 60px orange, -20px -20px 60px purple;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    border-radius: 0;
    padding: 20px 10px;
    height: 100%;
    border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
  }
  @media only screen and (max-width: 500px) {
    background: transparent;
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    /* padding-top: 10px; */
    box-shadow: none;
  }
`;
