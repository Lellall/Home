import styled from "styled-components";
import { FlexContainer, StyledImage } from "./Container/Container";
// import { Heading, SubText } from "./Text/Text";
import { Button, Typography, Container } from "@mui/material";
import { Text } from "./CustomerTypes";

const Wrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  // background-color: red;
  gap: 25px;
  width: 100%;
  align-items: center;
  align-self: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
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
`;

const Heading = styled(Typography)`
  font-size: 24px !important;
  font-weight: 700 !important;
  line-height: 28px !important;
`;
export const SubText = styled(Typography)`
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 30px !important;

  @media (max-width: 768px) {
    font-size: ${(props) => (props.mobileSize ? props.mobileSize : "12px")} !important;
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
`;
// width="50%" padding="0" margin="0" minWidth="49%"

const CustomerType = ({ customer, showType }) => {
  return (
    <Wrapper show={showType} width="90%" margin="0 auto" padding="0">
      <StyledImage
        src={customer?.imageUrl}
        alt={customer.title}
        height="500px"
        width="45%"
        minWidth="45%"
        minHeight="450px"
      />
      <ColContainer>
        <Text variant="h3" color="#2F313F">
          {customer.title}
        </Text>
        <div>
          {customer?.options.map((option) => (
            <div key={option.id}>
              <InnerFlexContainer margin="0" padding="0">
                <ColoredContainer>
                  <p>{option.id}</p>
                </ColoredContainer>
                <Heading variant="h3" color="#2F313F">
                  {option.subTitle}
                </Heading>
              </InnerFlexContainer>
              <SubText color="rgba(18, 29, 43, 0.60)">{option.subText}</SubText>
            </div>
          ))}
        </div>
      </ColContainer>
    </Wrapper>
  );
};

export default CustomerType;
