import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from "./FavStores";
import NewProducts, { ProdCard } from "./Surface";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 3,
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
      <div  style={{background: 'orange', width:'90%', margin:'0 auto', borderRadius:'8px'}}>
        <Slider {...settings}>
          <div><Card ></Card></div>
          <div><Card ></Card></div>
          <div><Card ></Card></div>
          <div><Card ></Card></div>
          <div><Card ></Card></div>
          <div><Card ></Card></div>
        </Slider>
      </div>
    );
  }
}
export class MultipleProducts extends Component {
  render() {
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
      <div  style={{background: 'transparent', width:'90%', margin:'0 auto', borderRadius:'8px'}}>
        <Slider {...settings}>
          <div><NewProducts ></NewProducts></div>
          <div><NewProducts ></NewProducts></div>
          <div><NewProducts ></NewProducts></div>
          <div><NewProducts ></NewProducts></div>
          <div><NewProducts ></NewProducts></div>
          <div><NewProducts ></NewProducts></div>
        </Slider>
      </div>
    );
  }
}