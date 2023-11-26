/* eslint-disable react/prop-types */
import { ShopDetails, Shop, ShopImage } from "./shop-card.styles";
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
              style={{ width: "27px", height: "24px", flexShrink: 0 }}
            />
          </div>
        </ShopImage>
        <div className="details">
          <p className="name">{shop?.name}</p>
          <div className="rating">
            <p className="category">{shop?.category}</p>
          </div>
        </div>
      </Shop>
    </ShopDetails>
  );
};

export default ShopCard;
