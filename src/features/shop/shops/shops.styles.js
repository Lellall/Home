import styled from "styled-components";
import { Container, Typography, Button } from "@mui/material";
import { ViewportWidth } from "../../../utils/enums";

export const MainContainer = styled(Container)`
  display: flex !important;
  width: 100% !important;
  max-width: 1440px !important;
  padding: 30px 0px !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 20px !important;

  .category-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 20px !important;
    align-self: stretch !important;
  }

  @media (max-width: ${ViewportWidth.md}px) {
    max-width: 1024px !important;
    padding: 20px 0px !important;
    gap: 28.444px !important;

    .category-container {
      gap: 15px !important;
    }
  }
  @media (max-width: ${ViewportWidth.sm}px) {
    padding-top: 20px !important;
    align-items: center !important;
    gap: 17px !important;
    padding-bottom: 30px !important;
  }
`;

export const ShopsContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 20px !important;
  align-self: stretch !important;

  p {
    margin: 0;
  }

  .title-container {
    display: flex;
    padding: 0px 80px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    font-feature-settings: "clig" off, "liga" off;
    font-style: normal;

    .title {
      color: #000;
      font-family: Raleway;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 35px;
    }

    .link {
      color: #f06d06;
      font-family: Open Sans;
      font-size: 21.333px;
      font-weight: 400;
      line-height: 42.667px;
      cursor: pointer;
    }
  }

  .shops-container {
    display: flex;
    padding: 0px 60px 40px 60px;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
  }

  @media (max-width: ${ViewportWidth.md}px) {
    gap: 0 !important;

    .title-container {
      padding: 0px 56.889px;

      .title {
        font-size: 22px;
        line-height: 28px;
        text-transform: capitalize;
      }
      .link {
        font-size: 16px;
        font-style: normal;
        line-height: 30.341px;
      }
    }

    .shops-container {
      display: flex;
      padding: 0px 40px 20px 40px;
      justify-content: space-between;
      align-items: flex-start;
      align-self: stretch;
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 0px 15px !important;
    align-items: flex-end !important;

    .shops-container {
      display: flex;
      align-items: flex-start;
      padding: 0px;
      gap: 15px;
    }

    .title-container {
      padding: 0 !important;

      .title {
        font-size: 16px;
        line-height: 13.487px;
      }

      .link {
        font-size: 12px;
        font-style: normal;
        line-height: 24px;
      }
    }
  }
`;

export const Heading = styled(Typography)`
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 34px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 46px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 24px !important;
    line-height: 35px !important;
  }
  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 20px !important;
    line-height: 28px !important;
  }
`;

export const CategoryButton = styled(Button)`
  display: flex !important;
  padding: 12px 87px !important;
  justify-content: center !important;
  align-items: center !important;
  border-radius: 30px !important;
  background: #f3f3f8 !important;
  gap: 10px !important;
  color: #0e5d37 !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  text-transform: capitalize !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 16px !important;
    line-height: 17.067px !important;
    padding: 15px 40px !important;
    gap: 7.111px !important;
    border-radius: 25px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 7px 85px !important;
    gap: 10px !important;
    border-radius: 30px !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    line-height: 24px !important;
    letter-spacing: 0.3px !important;
  }
`;

export const EarnContainer = styled(Container)`
  background: url("/assets/background.svg") !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-color: lightgray !important;
  position: relative !important;
  height: 33rem !important;
  width: 100% !important;
  object-fit: contain !important;
  max-width: 1440px !important;
  min-width: 100% !important;

  .sub-container {
    display: flex !important;
    padding: 30px !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 30px !important;
    border-radius: 8px !important;
    background: #fcfcfc !important;
    box-shadow: 0px 20px 40px 0px rgba(32, 56, 85, 0.15) !important;
    position: absolute !important;
    margin: auto !important;
    left: 0 !important;
    right: 0 !important;
    box-sizing: border-box !important;
    top: 50% !important;
    text-align: center !important;
    transform: translateY(-50%) !important;
    width: calc(100vw - 56%) !important;

    .text-container {
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;
      gap: 12px !important;
      align-self: stretch !important;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    height: 384px !important;

    .sub-container {
      width: 60% !important;
      padding: 21.333px !important;
      gap: 21.333px !important;

      .text-container {
        gap: 8.533px !important;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    height: 352px !important;

    .sub-container {
      padding: 20px !important;
      gap: 20px !important;
      width: 85% !important;

      .text-container {
        gap: 12px !important;
      }
    }
  }
`;

export const SubText = styled(Typography)`
  color: rgba(18, 29, 43, 0.6) !important;
  text-align: center !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 14px !important;
    line-height: 20px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 12px !important;
    line-height: 20px !important;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: center;
  gap: 15px;
  width: 100%;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 7.111px 0px;
    gap: 10.667px;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 10px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const EarnButton = styled(Button)`
  display: flex !important;
  width: 50% !important;
  padding: 12px 35px !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 10px !important;
  border-radius: 30px !important;
  background: #0e5d37 !important;
  color: #fff !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  text-transform: capitalize !important;
  box-sizing: border-box !important;

  @media (max-width: ${ViewportWidth.md}px) {
    gap: 7.111px !important;
    border-radius: 21.333px !important;
    font-size: 12px !important;
    line-height: 17.067px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    width: 100% !important;
    font-size: 14px !important;
    line-height: 24px !important;
    gap: 10px !important;
    border-radius: 30px !important;
  }
`;

export const PopularShops = styled.div`
  display: flex;
  padding: 40px 80px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  .shops-container {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    box-sizing: border-box !important;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;

    .link {
      color: #f06d06;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 30.341px;
      display: none;
    }
  }

  .link-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 9px;
    align-self: stretch;

    p {
      color: #f06d06;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Open Sans;
      font-size: 21.333px;
      font-style: normal;
      font-weight: 400;
      line-height: 42.667px;
      cursor: pointer;
      margin: 0;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 20px 0px;
    gap: 0px;

    .title-container {
      padding: 20px 40px 0px;

      .link {
        display: block;
      }
    }

    .shops-container {
      padding: 0px 40px 20px;
    }

    .link-container {
      display: none;
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 30px 15px;
    flex-direction: column;
    align-items: flex-end;
    gap: 0px;

    .title-container {
      padding: 0px;
      align-items: center;
    }
    .shops-container {
      padding: 0px;
    }
  }
`;

export const Title = styled(Typography)`
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 24px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 35px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 22px !important;
    line-height: 28px !important;
    text-transform: capitalize !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 16px !important;
    line-height: 13.487px !important;
  }
`;

export const RecommendationsContainer = styled.div`
  display: flex;
  padding-bottom: 60px;
  flex-direction: column;
  gap: 30px;

  .title-container {
    display: flex;
    padding: 10px 80px;
    flex-direction: column;
    align-items: flex-start;
  }

  .link-text {
    display: none;
  }
  .slider-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 13px;
    gap: 10px;

    .icons {
      border-radius: 5.918px;
      background: #eee;
      display: flex;
      height: 91.728px;
      justify-content: center;
      align-items: center;
      gap: 7.397px;
      padding: 0 10px;
      cursor: pointer;
    }

    .icon {
      color: #2f313f !important;
      font-size: 24px;
    }

    .slider {
      display: flex;
      align-items: flex-start;
      gap: 17.198px;
      overflow-x: scroll;
    }

    .slider::-webkit-scrollbar {
      display: none;
    }

    /* Hiding scrollbar for IE, Edge and Firefox */
    .slider {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 0px 30px 20px 30px;
    gap: 20px;
    align-self: stretch;

    .title-container {
      padding: 6.826px 0px;
      align-self: stretch;
    }

    .slider-container {
      padding: 0px;

      .icons {
        height: 62.617px;
        justify-content: center;
        align-items: center;
        gap: 5.05px;
        border-radius: 4.04px;
        padding: 0 8px;
      }

      .slider {
        gap: 11.74px;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 0px 15px 60px;
    gap: 15px;

    .title-container {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }

    .link-text {
      color: #f06d06;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Open Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      display: block;
      margin: 0;
      cursor: pointer;
    }

    .slider-container {
      .icons {
        display: none;
      }

      .slider {
        align-items: flex-start;
        gap: 15px;
        overflow-x: hidden;
        flex-wrap: wrap;
        margin: 0 auto;
      }
    }
  }
`;
