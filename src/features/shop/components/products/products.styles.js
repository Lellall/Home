import styled from "styled-components";
import { ViewportWidth } from "../../../../utils/enums";

export const MainContainer = styled.div`
  display: flex;
  padding: 30px 0px;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 21.396px 0px;
    gap: 20px;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 20px 0px;
    gap: 0px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  padding: 0px 80px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  p {
    margin: 0;
  }

  .heading {
    color: #2f313f;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Raleway;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 72.374px;
  }

  .categories {
    display: flex;
    padding: 13px 10px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  }

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 0px 40px;

    .heading {
      font-size: 17.117px;
      line-height: 51.617px;
    }

    .categories {
      padding: 9.272px 7.132px;
      gap: 7.132px;
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 10px;
    align-items: flex-start;
    gap: 20px;
    flex-direction: column-reverse;
    margin-bottom: 6px;

    .heading {
      font-size: 16px;
      line-height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .categories {
      padding: 0 10px;
      gap: 10px;
    }
  }
`;

export const Category = styled.div`
  display: flex;
  padding: 10px 15px;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  border: ${(props) =>
    props.isActive ? "1px solid #0E5D37" : "1px solid #FFF"};
  background: #f4f4f6;
  color: ${(props) => (props.isActive ? "#0E5D37" : "#aaa")};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Open Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.3px;
  cursor: pointer;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 7.132px 10.698px;
    gap: 7.132px;
    border-radius: 21.396px;
    font-size: 8.558px;
    letter-spacing: 0.214px;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    font-size: 8px;
    padding: 5px 10px;
  }
`;

export const StyledProducts = styled.div`
  padding: 0px 5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 0px 2.5rem;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 10px 15px;
    margin-bottom: 20px;
  }
`;
