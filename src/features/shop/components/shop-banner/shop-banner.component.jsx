/* eslint-disable react/prop-types */
import { ShopBannerBg, SubBanner } from "./shop-banner.styles";

const ShopBanner = ({ shop }) => {
  return (
    <div>
      <ShopBannerBg shopBG="assets/store-logo.jpg">
        <div className="shop-status">
          <p>{shop?.status}</p>
        </div>
        <div className="shop-details">
          <div className="shop-logo">
            <img src="/assets/Logo.png" alt={shop?.name} />
            <p>{shop?.name}</p>
          </div>
          <div className="shop-info">
            <p className="info">Estimated Delivery Time</p>
            <p className="detail">35 - 45 Minutes</p>
          </div>
          <div className="shop-info">
            <p className="info">Open / Close Time</p>
            <p className="detail">9am - 8pm</p>
          </div>
          <div className="shop-info">
            <p className="info">Minimum Price</p>
            <p className="detail">₦1,400</p>
          </div>
        </div>
      </ShopBannerBg>
      <SubBanner />
    </div>
  );
};

export default ShopBanner;
