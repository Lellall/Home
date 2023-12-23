/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import {
  ShopDetails,
  Shop,
  ShopImage,
  MainContainer,
  MiniShopImage,
} from "./shop-card.styles";
import { FaStar, FaRegStar } from "react-icons/fa6";

export const MiniShopCard = ({ shop }) => {
  return (
    <MainContainer>
      <div className="shop">
        <MiniShopImage BG="/assets/Image.png" isOpen={shop?.active}>
          <div className="status">
            <p>{shop?.active ? "Open" : "Closed"}</p>
          </div>
          <div className="fav">
            <img src="/assets/fav.svg" />
          </div>
        </MiniShopImage>
        <div className="details">
          <p className="name">{shop?.name}</p>
          <div className="rating">
            <div>
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaStar className="star-icon" />
              <FaRegStar className="star-icon" />
            </div>
            <p className="category">{shop?.category?.name || ''}</p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
const ShopCard = ({ shop }) => {
  console.log(shop,'shop');
  return (
    <Link to={`/shop/${shop?.id}`} style={{textDecoration:"none"}}>
    <ShopDetails>
      <Shop>
        <ShopImage BG={`${shop?.logoUrl}`} isOpen={shop?.active}>
          <div className="status">
            <p>{shop?.status}</p>
          </div>
          <div className="fav">
            <img src="/assets/fav.svg" />
          </div>
        </ShopImage>
        <div className="details">
          <p className="name">{shop?.name}</p>
          <div className="rating">
            <div>
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaRegStar className="icon" />
            </div>
            <p className="category">{shop?.category?.name || ''}</p>
          </div>
        </div>
      </Shop>
    </ShopDetails>
    </Link>
  );
};

export default ShopCard;
