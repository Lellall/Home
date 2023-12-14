/* eslint-disable react/prop-types */
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
            <p className="category">{shop?.category}</p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
const ShopCard = ({ shop }) => {
  return (
    <ShopDetails>
      <Shop>
        <ShopImage BG="/assets/Image.png" isOpen={shop?.active}>
          <div className="status">
            <p>{shop?.active ? "Open" : "Closed"}</p>
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
            <p className="category">{shop?.category}</p>
          </div>
        </div>
      </Shop>
    </ShopDetails>
  );
};

export default ShopCard;
