import styled from "styled-components";

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  font-family: open sans;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  width: 60%;
  position: relative;
  max-height: 400px;
  margin-right: 50px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const RightColumn = styled.div`
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LeftColumnImage = styled.img`
  width: 600px;
  position: absolute;
  max-height: 600px;
  float:center;
  right: 50px;
  top: 30px;
  opacity: 0;
  border-radius: 8px;
  transition: all 0.3s ease;

  &.active {
    opacity: 1;
  }
`;

const ProductDescription = styled.div`
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
`;

const ProductDescriptionSpan = styled.span`
  font-size: 12px;
  color: #358ed7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
`;

const ProductDescriptionH1 = styled.h1`
  font-weight: 300;
  font-size: 52px;
  color: #43484d;
  letter-spacing: -2px;
`;

const ProductDescriptionP = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #86939e;
  line-height: 24px;
`;

const ProductColor = styled.div`
  margin-bottom: 30px;
`;

const ColorChooseDiv = styled.div`
  display: inline-block;
`;

const ColorChooseInput = styled.input`
  display: none;
`;

const ColorChooseLabelSpan = styled.label`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: -1px 4px 0 0;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);

  &.red {
    background-color: #c91524;
  }

  &.blue {
    background-color: #314780;
  }

  &.black {
    background-color: #323232;
  }

  &:checked {
    background-image: url(images/check-icn.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const CableChoose = styled.div`
  margin-bottom: 20px;
`;

const CableChooseButton = styled.button`
  border: 2px solid #e1e8ee;
  border-radius: 6px;
  padding: 13px 20px;
  font-size: 14px;
  color: #5e6977;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:active,
  &:focus {
    border: 2px solid #86939e;
    outline: none;
  }
`;

const CableConfig = styled.div`
  border-bottom: 1px solid #e1e8ee;
  margin-bottom: 20px;
`;

const CableConfigA = styled.a`
  color: #358ed7;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  margin: 10px 0;
  display: inline-block;

  &:before {
    content: "?";
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 2px solid rgba(53, 142, 215, 0.5);
    display: inline-block;
    text-align: center;
    line-height: 16px;
    opacity: 0.5;
    margin-right: 5px;
  }
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  //   align-items: space;
`;

const ProductPriceSpan = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #43474d;
//   margin-right: 20px;
`;

const CartButton = styled.a`
  display: inline-block;
  background-color: #7dc855;
  border-radius: 6px;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 30px;
  transition: all 0.5s;

  &:hover {
    background-color: #64af3d;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CircleButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

const CountDisplay = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

export {
  CounterContainer,
  CircleButton,
  CountDisplay,
  Container,
  LeftColumn,
  RightColumn,
  LeftColumnImage,
  ProductDescription,
  ProductDescriptionSpan,
  ProductDescriptionH1,
  ProductDescriptionP,
  ProductColor,
  ColorChooseDiv,
  ColorChooseInput,
  ColorChooseLabelSpan,
  CableChoose,
  CableChooseButton,
  CableConfig,
  CableConfigA,
  ProductPrice,
  ProductPriceSpan,
  CartButton,
};
