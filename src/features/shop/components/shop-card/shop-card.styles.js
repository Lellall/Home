import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { ViewportWidth } from "../../../../utils/enums";

export const ShopDetails = styled(Grid)`
  padding: 28px 18px !important;
  border-radius: 8px !important;
  border: 1.763px solid #f0f0f0 !important;
  background: #fff !important;
  box-shadow: 8.81344px 12.33882px 35.25377px 0px rgba(32, 56, 85, 0.08) !important;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 20.055px 12.535px ;
    gap: 12.535px;
    border-radius: 5.641px;
    border: 1.253px solid #f0f0f0;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 16px 10px !important;
    gap: 10px;
    box-shadow: 5px 7px 20px 0px rgba(32, 56, 85, 0.08);
  }
`;

export const Shop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21.152px;

  p {
    margin: 0;
  }

  .details {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 8.813px;

    .name {
      color: #2f313f;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.915px;
    }

    .rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }

    .category {
      color: rgba(18, 29, 43, 0.6);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Open Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.915px;
    }
    .icon {
      color: #ffb400;
      font-size: 19.922px;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    gap: 15.042px;

    .details {
      gap: 6.267px;

      .name {
        font-size: 14.102px;
        line-height: 16.295px;
      }

      .category {
        font-size: 10px;
        line-height: 16.295px;
      }

      .icon {
        font-size: 14.167px;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {

    .details {
      gap: 5px;

      .name {
        font-size: 11px;
        line-height: 13px;
      }

      .category {
        font-size: 8px;
        line-height: 13px;
      }

      .icon {
        font-size: 11.302px;
      }
    }
  }
`;

export const ShopImage = styled.div`
  width: 100%;
  height: 265px;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;
  object-fit: contain;

  .status {
    display: flex;
    padding: 8.813px 17.627px;
    align-items: flex-start;
    gap: 17.627px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 7.051px 7.051px 7.051px;
    background: #f3f3f8;

    p {
      color: ${(props) => (props.isOpen ? "#00A661" : "#E41749")};
      text-align: right;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Raleway;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.915px;
    }
  }

  .fav {
    position: absolute;
    right: 24px;
    bottom: 18px;
    border-radius: 176.269px;
    background: #fff;
    display: flex;
    width: 70.508px;
    height: 70.508px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    box-sizing: border-box;

    img {
      width: 27px;
      height: 24px;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    height: 188.02px;
    border-radius: 5.014px;

    .status {
      padding: 6.267px 12.535px;
      gap: 12.535px;
      border-radius: 0px 5.014px 5.014px 5.014px;

      p {
        font-size: 12.535px;
        line-height: 16.295px;
      }
    }

    .fav {
      width: 50.139px;
      height: 50.139px;
      padding: 9.55px;
      gap: 10px;
      border-radius: 125.347px;
      box-sizing: border-box;
      right: 18px;
      bottom: 14px;

      img {
        width: 19.1px;
        height: 17.19px;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: 150px;

    .status {
      display: flex;
      padding: 5px 10px;
      align-items: flex-start;
      gap: 10px;

      p {
        font-size: 10px;
        line-height: 13px;
      }
    }

    .fav {
      width: 40px;
      height: 40px;
      padding: 7.619px;
      gap: 7.619px;
      box-sizing: border-box;
      right: 14px;
      bottom: 10px;

      img {
        width: 15.238px;
        height: 13.714px;
        flex-shrink: 0;
      }
    }
  }
`;
