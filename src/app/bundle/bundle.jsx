import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BaseUrl } from "../../utils/config";
import { useNavigate } from "react-router-dom";

import ReusableCard from "../../features/newshop/card";
import styled from "styled-components";
import Card from "./card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProductCarousel = ({ productsPerPage, products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  //   const totalPages = Math.ceil(products.length / productsPerPage);
  const totalPages = 3;
  const [shopsData, setShopsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/bundles`);
        // Set the fetched data in the state
        setShopsData(response?.data?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  console.log(shopsData, "shopsData");

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        borderRadius: "8px",
        // background: "red",
        // marginTop: "10px",
      }}
    >
      <Slider {...settings}>
        {shopsData.map((product, index) => (
          <>
            <Card
              key={index}
              title={product?.name}
              price={product?.price}
              discount="20% OFF"
              imageUrl={product?.coverImageUrl}
              // isShopClose={isShopsClose}
              onAddToWishlist={() => navigate(`product/${product?.id}`)}
            />
          </>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
