import styled from "styled-components";


export const Products = styled.div`
  display: flex;
  flex-direction: row;
  // width: 1440px;
  padding: 0px 80px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    display: flex;
    // width: 390px;
    padding: 10px 15px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Stores = styled.div`
  display: flex !important;
  flex-direction: row !important;
  padding: 0px 80px 40px 80px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
  // width: 100%;
`;