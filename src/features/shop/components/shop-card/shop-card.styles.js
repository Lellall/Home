import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { ViewportWidth } from "../../../../utils/enums";

export const ShopDetails = styled.div`
  padding:20px  0px !important;
  border-radius: 8px !important;
  width: ${(props) => props.width ? props.width : '250px'};
  margin: 0 5px;
  /* border: 1.763px solid #f0f0f0 !important; */
  background: #fff !important;
  box-shadow: 8.81344px 12.33882px 35.25377px 0px rgba(32, 56, 85, 0.08) !important;
  @media (max-width: ${ViewportWidth.md}px) {
    padding: 20.055px 12.535px;
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
  align-items: center;
  gap: 15.152px;

  p {
    margin: 0;
  }

  .details {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 8.813px;
    text-decoration: none;

    .name {
      color: #2f313f;
      font-feature-settings: "clig" off, "liga" off;
      /* font-family: Open Sans; */
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 22.915px;
      text-align: center;
    }

    .rating {
      display: none;
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

export const MiniShopImage = styled.div`
  height: 171.985px;
  width: 100% !important;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  position: relative;
  border-radius: 5px;
  object-fit: contain;

  .status {
    display: flex;
    padding: 5.733px 11.466px;
    align-items: flex-start;
    gap: 11.466px;
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 0px 4.586px 4.586px 4.586px;
    background: #f3f3f8;

    p {
      color: ${(props) => (props.isOpen ? "#00A661" : "#E41749")};
      text-align: right;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Raleway;
      font-size: 11.466px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.905px;
    }
  }

  .fav {
    position: absolute;
    right: 24px;
    bottom: 18px;
    border-radius: 114.656px;
    background: #fff;
    display: flex;
    width: 45.863px;
    height: 45.863px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8.736px;
    box-sizing: border-box;
    padding: 8.736px;

    img {
      width: 17.471px;
      height: 15.724px;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    height: 150px;
    border-radius: 3.131px;

    .status {
      padding: 3.913px 7.827px;
      gap: 7.827px;
      border-radius: 0px 3.131px 3.131px 3.131px;
    }

    .fav {
      width: 31.308px;
      height: 31.308px;
      padding: 5.963px;
      gap: 5.963px;
      border-radius: 78.269px;
      right: 8px;

      img {
        width: 11.927px;
        height: 10.734px;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: 150px;
    border-radius: 4px;

    .status {
      padding: 5px 10px;
      gap: 10px;
      border-radius: 0px 4px 4px 4px;

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
      right: 14px;

      img {
        width: 15.238px;
        height: 13.714px;
        flex-shrink: 0;
      }
    }
  }
`;

export const ShopImage = styled.div`
  width: 80%;
  height: 185px;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  background-position: center;
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
    font-size: 8px;
    p {
      color: ${(props) => (props.isOpen ? "#00A661" : "#E41749")};
      text-align: right;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Raleway;
      font-size: 11px;
      font-style: normal;
      font-weight: 600;
      line-height: 5.915px;
    }
  }

  .fav {
    position: absolute;
    right: 14px;
    bottom: 18px;
    border-radius: 176.269px;
    background: #fff;
    display: flex;
    width: 40.508px;
    height: 40.508px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 13px; */
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

export const MainContainer = styled.div`
  display: flex;
  padding: 18.345px 11.466px;
  align-items: flex-start;
  gap: 11.466px;
  border-radius: 9.173px;
  border: 1.147px solid #f0f0f0;
  background: #fff;
  box-shadow: 5.733px 8.026px 22.931px 0px rgba(32, 56, 85, 0.08);
  min-width: 171.985px;
  box-sizing: border-box;

  p {
    margin: 0;
  }

  .shop {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 13.759px;
    width: 100%;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5.733px;
    width: 100%;

    .name {
      color: #2f313f;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Raleway;
      font-size: 12.612px;
      font-style: normal;
      font-weight: 600;
      line-height: 14.905px;
    }

    .rating {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }

    .star-icon {
      color: #ffb400 !important;
      font-size: 12.958px;
    }
    .category {
      color: rgba(18, 29, 43, 0.6);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Open Sans;
      font-size: 9.173px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.905px;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 12.523px 7.827px;
    gap: 7.827px;
    border-radius: 6.262px;
    border: 0.783px solid #f0f0f0;
    box-shadow: 3.913px 5.479px 15.654px 0px rgba(32, 56, 85, 0.08);
    min-width: 150px;

    .shop {
      gap: 9.392px;
    }

    .details {
      gap: 3.913px;
      .name {
        font-size: 10px;
        line-height: 10.175px;
      }

      .star-icon {
        font-size: 9px;
      }

      .category {
        font-size: 6.262px;
        line-height: 10.175px;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 16px 10px;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    box-shadow: 5px 7px 20px 0px rgba(32, 56, 85, 0.08);
    width: 47%;

    .shop {
      gap: 12px;
    }

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
      .star-icon {
        width: 11.302px;
        height: 10.801px;
      }
    }
  }
`;
