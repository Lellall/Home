import styled from "styled-components";

import { ViewportWidth } from "../../../../utils/enums";

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
    box-sizing: border-box;
    right: 75px;
    background: #f3f3f8;
    top: 36px;

    p {
      color: ${(props) => (props.isOpen ? "#00A661" : "#E41749")};
      text-align: center;
      font-feature-settings: "clig" off, "liga" off;
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
    box-sizing: border-box;
  }

  .shop-logo {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      width: 54px;
      height: 54px;
      border-radius: 54px;
    }

    p {
      font-family: Raleway;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 35px;
    }
  }

  .shop-logo-mobile {
    display: none;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 15px;
    left: 15px;
    color: #fff;

    img {
      width: 35px;
      height: 35px;
      border-radius: 35px;
    }

    p {
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
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
      color: #2f313f;
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

  @media (max-width: ${ViewportWidth.md}px) {
    height: 341px;
    
    .shop-status {
      padding: 7.111px 14.222px;
      border-radius: 5.689px;
      width: 70px;
      top: 26px;
      right: 53px;

      p {
        font-size: 14.222px;
        line-height: 16.295px;
      }
    }

    .shop-details {
      padding: 10.667px 28.444px;
      border-radius: 51.911px;
      background: #fff;
    }

    .shop-logo {
      gap: 10.667px;

      img {
        width: 38.13px;
        height: 38.13px;
        border-radius: 38.13px;
      }

      p {
        font-size: 17.067px;
        line-height: 24.889px;
      }
    }

    .shop-info {
      .info {
        text-align: center;
        font-size: 10.667px !important;
      }

      .detail {
        font-size: 14.222px !important;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: 180px;

    .shop-status {
      top: 15px;
      right: 23px;
      width: 70px;
      box-sizing: border-box;
      padding: 6px 15px;
      border-radius: 8px;
      border: 1px solid #fff;
      background: #fff;

      p {
        font-size: 15px;
        font-weight: 600;
        line-height: 22.915px;
      }
    }

    .shop-logo {
      display: none;
    }

    .shop-logo-mobile {
      display: flex;
    }

    .shop-details {
      bottom: 0;
      background: #f4f4f6;
      width: 100%;
      border-radius: 0px;
      padding: 10px 20px;
    }

    .shop-info {
      .detail {
        font-size: 12px !important;
        color: rgba(18, 29, 43, 0.6);
      }

      .info {
        font-size: 10px !important;
      }
    }
  }
`;
export const SubBanner = styled.div`
  background: url("/assets/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: lightgray;
  position: relative;
  height: 8.4375rem;
  width: 100%;
  object-fit: contain;

  @media (max-width: ${ViewportWidth.md}px) {
    height: 112px;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: 60px;
  }
`;
