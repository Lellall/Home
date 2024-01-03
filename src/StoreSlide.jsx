import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card } from "./FavStores";
import NewProducts, { ProdCard } from "./Surface";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShopCard } from "./features/shop/components";

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [shopData, setShopData] = useState([])
  const { shopId } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.dev.lellall.com/shops`)
      .then((res) => setShopData([...res?.data?.data]));
  }, []);

  // console.log(shopData,'shopData');

  return (
    <div style={{ width: '90%', margin: '0 auto', borderRadius: '8px' }}>
      <Slider {...settings}>
        {/* {[...Array(6)].map((_, index) => (
          <div key={index}>
            <Card />
          </div>
        ))} */}
        
        {shopData?.map((shop) => 
          <div style={{marginBottom:'20px', display:"flex", justifyContent:"center"}}>
          <ShopCard width='10px' shop={shop} />
          </div>
        )}
      </Slider>
    </div>
  );
};

const MultipleProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ background: 'transparent', width: '90%', margin: '0 auto', borderRadius: '8px' }}>
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <NewProducts />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { MultipleItems, MultipleProducts };
