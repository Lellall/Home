import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  padding: 28.203px 17.627px;
  align-items: flex-start;
  gap: 17.627px;
  border-radius: 7.932px;
  background: #fcfcfc;
  // background: red;

  p {
    margin: 0;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
  align-self: stretch;
  width: 265px;
`;

export const ProductName = styled.p`
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 600;
`;
export const ProductCategory = styled.p`
  font-size: 14px;
  font-family: Open Sans;
  font-weight: 400;
`;
export const ProductPrice = styled.p`
  font-family: Raleway;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: capitalize;
`;
export const ProductDescription = styled.p`
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ProductImage = styled.div`
  width: 265px;
  height: 265px;
  background: url(${(props) => props.BG});
  background-repeat: no-repeat;
  position: relative;
  border-radius: 8px;

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
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 80px;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const ProductDetails = styled.div`
  display: flex;
  height: 510px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .spacer {
    display: flex;
    height: 60px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;
  }
`;