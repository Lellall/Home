/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FlexContainer, StyledImage } from "./Container/Container";
import { Typography, Container } from "@mui/material";
import { Text } from "./CustomerTypes";

const Wrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  gap: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin: 0 auto;

  @media (max-width: 912px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const InnerFlexContainer = styled(FlexContainer)`
  justify-content: flex-start;
`;

const ColoredContainer = styled(Container)`
  border-radius: 100px;
  background: #00a661;
  padding: 5px !important;
  text-align: center;
  display: flex !important;
  flex-direction: column;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 3px !important;
  height: 30px !important;
  width: 30px !important;

  p {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    color: #fff;
  }

  @media (max-width: 912px) {
    margin: 0px !important;
    margin-right: 3px !important;
    height: 21px !important;
    width: 21px !important;

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    margin: 0px !important;
    margin-right: 3px !important;
    height: 21px !important;
    width: 21px !important;

    p {
      font-size: 12px;
    }
  }
`;

const Heading = styled(Typography)`
  font-size: 24px !important;
  font-weight: 700 !important;
  line-height: 28px !important;

  @media (max-width: 912px) {
    font-size: 16px !important;
    line-height: 22px !important;
  }

  @media (max-width: 768px) {
    font-size: 16px !important;
    line-height: 22px !important;
  }
`;

export const SubText = styled(Typography)`
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 30px !important;

  @media (max-width: 912px) {
    font-size: ${(props) =>
      props.tabletSize ? props.tabletSize : "14px"} !important;
    line-height: 18px !important;
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.mobileSize ? props.mobileSize : "12px"} !important;
    line-height: 15px !important;
  }
`;
const ColContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: flex-start !important;
  gap: 20px !important;
  align-self: stretch !important;
  width: 50% !important;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;
const OptionsContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  gap: 20px !important;
  padding: 0 20px;
  width: 100% !important;

  @media (max-width: 912px) {
    gap: 14px !important;
    padding: 0 10px !important;
  }


  @media (max-width: 768px) {
    gap: 12px !important;
    padding: 0 5px !important;
  }
`;

const CustomerType = ({ customer, showType }) => {
  return (
    <Wrapper show={showType}>
      <StyledImage
        src={customer?.imageUrl}
        alt={customer.title}
        height="500px"
        width="45%"
        mobileWidth="300px"
        mobileHeight="300px"
        tabletWidth="50%"
        tabletHeight="454px"
      />
      <ColContainer>
        <Text variant="h3" color="#2F313F">
          {customer.title}
        </Text>
        <OptionsContainer>
          {customer?.options.map((option) => (
            <div key={option.id}>
              <InnerFlexContainer margin="0" padding="0" mobilePadding="0">
                <ColoredContainer>
                  <p>{option.id}</p>
                </ColoredContainer>
                <Heading variant="h3" color="#2F313F">
                  {option.subTitle}
                </Heading>
              </InnerFlexContainer>
              <SubText color="rgba(18, 29, 43, 0.60)" mobileSize="10px" tabletSize="12px">
                {option.subText}
              </SubText>
            </div>
          ))}
        </OptionsContainer>
      </ColContainer>
    </Wrapper>
  );
};

export default CustomerType;
