import styled from "styled-components";

export const ShopBannerBg = styled.div`
  background: url(${(props) => props.shopBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgray;
  position: relative;
  height: 480px;
  width: 100%;

  p {
    margin: 0;
  }

  .shop-status {
    width: 92px;
    padding: 10px 20px;
    border-radius: 8px;
    position: absolute;
    right: 75px;
    background: #f3f3f8;
    top: 36px;

    p {
      color: #00a661;
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Raleway;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 23px;
    }
  }

  .shop-details {
    display: flex;
    width: calc(100vw - 11%);
    margin: 0 auto;
    position: absolute;
    bottom: 36px;
    left: 0;
    right: 0;
    padding: 15px 40px;
    justify-content: space-between;
    align-items: center;
    border-radius: 73px;
    background: #fff;
  }

  .shop-logo {
    display: flex;
    align-items: center;
    gap: 15px;

    p {
      font-family: Raleway;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 35px;
    }
  }

  .shop-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .detail {
      font-family: Raleway !important;
      font-size: 20px !important;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .info {
      font-family: Open Sans !important;
      font-size: 15px !important;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: #aaa;
    }
  }
`;
export const SubBanner = styled.div`
  background: url("/assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgray;
  position: relative;
  height: 270px;
  width: 100%;
  object-fit: contain;
`;