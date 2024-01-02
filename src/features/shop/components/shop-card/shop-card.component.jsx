/* eslint-disable react/prop-types */
import { useNavigate  } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa6";
import {
  ShopDetails,
  Shop,
  ShopImage,
  MainContainer,
  MiniShopImage,
} from "./shop-card.styles";

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
  const navigate = useNavigate();
  return (
    <ShopDetails onClick={() => navigate(`/shop/${shop.id}`)}>
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
  );
};

export default ShopCard;
