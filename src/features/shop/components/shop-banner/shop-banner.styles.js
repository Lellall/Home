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
      width: 50px;
      height: 50px;
      border-radius: 50px;
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
      color: #2F313F;
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

  @media (max-width: 600px) {
    height: 180px;

    .shop-status {
      top: 15px;
      right: 15px;
      width: 73px;
      box-sizing: border-box;
      padding: 4px 22px;
      border-radius: 30px;
      border: 1px solid #fff;
      background: #fff;

      p {
        font-size: 12px;
        font-weight: 400;
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
      // width: 100%;
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
  /* height: 270px; */
  height: 8.4375rem;
  width: 100%;
  object-fit: contain;

  @media (max-width: 600px) {
    height: 60px;
  }
`;
