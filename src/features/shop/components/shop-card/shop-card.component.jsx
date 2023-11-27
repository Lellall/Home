/* eslint-disable react/prop-types */
import { ShopDetails, Shop, ShopImage } from "./shop-card.styles";
import { FaStar, FaRegStar } from "react-icons/fa6";

const ShopCard = ({ shop }) => {
  return (
    <ShopDetails>
      <Shop>
        <ShopImage BG="assets/Image.png" isOpen={true}>
          <div className="status">
            <p>{shop?.status}</p>
          </div>
          <div className="fav">
            <img
              src="assets/fav.svg"
            />
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
