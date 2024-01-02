import styled from "styled-components";
import { Typography, Box, Button } from "@mui/material";
import { ViewportWidth } from "../../../utils/enums";

export const MainContainer = styled(Box)`
  display: flex !important;
  padding: 30px 0px !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 20px !important;
  flex: 1 0 0 !important;
  align-self: stretch !important;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 20.898px 0px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 0px 0px 21px !important;
    gap: 0px !important;
  }
`;

export const HeadingText = styled(Typography)`
  color: #2f313f !important;
  text-align: center !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 34px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 46px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 16px !important;
    line-height: 22px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    display: none !important;
  }
`;

export const EmptyState = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  padding-top: 50px !important;

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
      width: 200px !important;
      height: 176px !important;
    }

    p {
      color: #2f313f !important;
      text-align: center !important;
      font-feature-settings: "clig" off, "liga" off !important;
      font-family: Open Sans !important;
      font-size: 24px !important;
      font-style: normal !important;
      font-weight: 400 !important;
      line-height: 38px !important;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    .icon {
      img {
        width: 180px !important;
        height: 150px !important;
      }

      p {
        font-size: 18px !important;
        line-height: 28px !important;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {

    .icon {
      
      img {
        width: 150px !important;
        height: 120px !important;
      }

      p {
        font-size: 14px !important;
        line-height: 22px !important;
      }
    }
  }
  
  
  `;


export const TabContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.715px;
`;

export const StyledButton = styled(Button)`
  display: flex !important;
  padding: 5.658px !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 7.544px !important;
  color: ${(props) => (props.active ? "#F06D06" : "#AAA")} !important;
  text-align: center !important;
  text-transform: capitalize !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 28.289px !important;
  border-radius: 0 !important;
  border-bottom: ${(props) =>
    props.active ? "1.886px solid #F06D06" : ""} !important;


@media (max-width: ${ViewportWidth.sm}px) {
  font-size: 14px !important;
  line-height: 22px !important;
  }
`;

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28.289px;
  width: 100% !important;

  @media (max-width: ${ViewportWidth.md}px) {
    gap: 20.898px !important;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28.289px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    gap: 20.898px !important;
  }
`;
