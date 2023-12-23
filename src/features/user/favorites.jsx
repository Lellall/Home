import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { ViewportWidth } from "../../utils/enums";

const MainContainer = styled(Box)`
  display: flex !important;
  padding: 30px 0px !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 20px !important;
  flex: 1 0 0 !important;
  align-self: stretch !important;
`;

const HeadingText = styled(Typography)`
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

const EmptyState = styled(Box)`
  display: flex !important;
flex-direction: column !important;
justify-content: center !important;
align-items: center !important;
  /* padding-top: 60px; */

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
`;

const Main = () => {
  return (
    <MainContainer>
      <HeadingText>Favorites</HeadingText>
      <EmptyState>
        <div className="icon">
          <img src="/assets/user-fav.svg" alt='favorites'/>
          <p>You have no favorites...yet</p>
        </div>
      </EmptyState>
    </MainContainer>
  );
};

export default Main;
