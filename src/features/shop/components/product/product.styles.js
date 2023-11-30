import styled from "styled-components";
import { Typography } from "@mui/material";
import { ViewportWidth } from "../../../../utils/enums";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 15px 20px 0px rgba(32, 56, 85, 0.15);
  }

  .quantity-clicked {
    box-shadow: 0px 15px 20px 0px rgba(32, 56, 85, 0.15);
  }

  p {
    margin: 0 !important;
  }

  @media (max-width: ${ViewportWidth.md}px) {
    gap: 57.056px;
    border-radius: 5.706px;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    &:hover {
      box-shadow: none;
    }

    .quantity-clicked {
      box-shadow: none;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  padding: 28px 18px;
  align-items: flex-start;
  gap: 18px;
  border-radius: 8px;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 20.114px 12.571px;
    gap: 12.571px;
    border-radius: 5.657px;
    /* background: #FCFCFC; */
  }
  @media (max-width: ${ViewportWidth.sm}px) {
    display: flex;
    padding: 0px 0px 16px;
    width: 100%;
    justify-content: space-between !important;
    align-items: center;
    align-self: stretch;
    border-bottom: 1px solid #ececec;
    border-radius: 0px;
  }
`;

export const Product = styled.div`
  display: flex;
  height: 510px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 264px;

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 21px;
    align-self: stretch;

    .container {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }

    .name-category {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      align-self: stretch;
    }

    .price-description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      align-self: stretch;
    }
  }

  .cart-container {
    display: flex;
    height: 60px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;
    border-radius: 8px;
    cursor: pointer;

    p {
      color: #f06d06;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Open Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.652px;
      display: none;
    }

    .cart {
      display: none;
    }

    &:hover {
      border: 1px solid #ececec;
      background: #f3f3f8;

      p {
        display: block;
      }

      .cart {
        display: block;
      }
    }
  }

  .cart-container-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    align-self: ${(props) => (props.stretch ? "stretch" : "center")};

    .cart {
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 50px;
      background: #f3f3f8;
      box-sizing: border-box;

      img {
        width: 20px;
        height: 20px;
      }
    }

    .cart-small {
      display: flex;
      padding: 6.444px;
      justify-content: center;
      align-items: center;
      gap: 8.056px;
      background: #f3f3f8;
      border-radius: 40.278px;
      box-sizing: border-box;

      img {
        width: 16.111px;
        height: 16.111px;
      }
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    height: 364px;
    width: 189px !important;

    .details {
      gap: 15px;

      .container {
        gap: 15px;
      }

      .price-description {
        gap: 3.566px;
      }
    }

    .cart-container {
      height: 42.545px;
      padding: 7.132px;
      gap: 7.132px;
      border-radius: 6px;
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: auto;
    flex-direction: row;
    display: flex;
    width: 100% !important;
    justify-content: space-between !important;

    .details {
      flex-direction: row;
      align-items: flex-start;
      gap: 12px;

      .container {
        gap: 5px !important;
        align-items: flex-start;
      }

      .price-description {
        gap: 0px;
        word-wrap: break-word !important;
        white-space: pre-wrap !important;
        word-break: break-word !important;
      }
    }
  }
`;

export const ProductImage = styled.div`
  width: 264.403px;
  height: 264.403px;
  border-radius: 7.051px;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  position: relative;
  object-fit: contain;

  div {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    position: absolute;
    right: 18px;
    bottom: 18px;
    border-radius: 100px;
    background: #fff;
    box-sizing: border-box;

    img {
      width: 15.238px;
      height: 13.714px;
      flex-shrink: 0;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    width: 189px !important;
    height: 189px !important;
    border-radius: 5px;

    div {
      width: 28.528px;
      height: 28.528px;
      padding: 5.434px;
      gap: 5.434px;

      img {
        width: 10.868px;
        height: 9.781px;
        flex-shrink: 0;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    max-width: 80px !important;
    max-height: 80px !important;
    border-radius: 10px;

    div {
      display: none;
    }
  }
`;

export const ProductName = styled(Typography)`
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 23px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 14.143px !important;
    line-height: 16.343px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 12px !important;
    font-weight: 700 !important;
    line-height: 17px !important;
  }
`;

export const ProductCategory = styled(Typography)`
  color: rgba(18, 29, 43, 0.6) !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 22.915px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 10px !important;
    line-height: 16.343px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    display: none;
  }
`;

export const ProductPrice = styled(Typography)`
  color: #2f313f !important;
  text-align: center !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 22px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 28px !important;
  text-transform: capitalize !important;

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 16px !important;
    line-height: normal !important;
  }
`;

export const ProductDescription = styled(Typography)`
  align-self: stretch;
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: normal !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 10px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 10px !important;
    text-wrap: wrap !important;
  }
`;