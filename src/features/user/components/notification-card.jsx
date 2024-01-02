/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { ViewportWidth } from "../../../utils/enums";

const MainContainer = styled(Box)`
  display: flex !important;
  padding-bottom: 15px !important;
  align-items: center !important;
  gap: 10px !important;
  border-bottom: 1px solid #e5e5e5 !important;
  width: 100% !important;

  img {
    width: 55.508px !important;
    height: 55.513px !important;
    border-radius: 55.513px !important;
  }

  .info-details {
    display: flex !important;
    flex-direction: column !important;
  }

  @media (max-width: ${ViewportWidth.md}px) {
    img {
      width: 39.721px !important;
      height: 39.724px !important;
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    img {
      width: 55.508px !important;
      height: 55.513px !important;
      border-radius: 55.513px !important;
    }
  }
`;

const Message = styled(Typography)`
  color: ${(props) =>
    props.active ? "#2F313F" : "rgba(18, 29, 43, 0.6)"} !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: ${(props) => (props.active ? 700 : 400)} !important;
  line-height: 30px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 14.312px !important;
    line-height: 21.468px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 14px !important;
    line-height: 22px !important;
  }
`;
const Main = ({ text, time, imgSrc, isUnRead }) => {
  return (
    <MainContainer>
      <img src={imgSrc} alt="" />
      <div className="info-details">
        <Message active={isUnRead}>{text}</Message>
        <Message active={isUnRead}>{time}</Message>
      </div>
    </MainContainer>
  );
};

export default Main;
