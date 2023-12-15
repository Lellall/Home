/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { ViewportWidth } from "../../../utils/enums";

const CategoryContainer = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 8.09px !important;
  flex-shrink: 0 !important;
  align-self: stretch !important;

  img {
    width: 65px !important;
    height: 65px !important;
    border-radius: 56.629px;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    img {
      width: 50px !important;
      height: 50px !important;
      border-radius: 42px !important;
    }
  }
`;

const CategoryTitle = styled(Typography)`
  color: #2f313f !important;
  text-align: center !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 16.18px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 17.396px !important;

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 12px !important;
    line-height: 12.902px !important;
  }
`;

const Main = ({ src, name }) => {
  return (
    <CategoryContainer>
      <img src={src} alt={name} />
      <CategoryTitle>{name}</CategoryTitle>
    </CategoryContainer>
  );
};

export default Main;
