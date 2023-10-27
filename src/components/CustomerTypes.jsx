import { useState } from "react";
// import { Wrapper, FlexContainer } from './Container/Container';
import CustomerType from "./CustomerType";
import { RoundedButton } from "./Button/Button";
import { CenteredText } from "./Text/Text";
// import { RoundButton } from '../App';
import { Container, Typography } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: flex !important;
  max-width: 1439px !important;
  width: 100% !important;
  padding: 60px 80px !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: flex-start !important;
  gap: 60px !important;
  // background: blue !important;

  @media (max-width: 912px) {
    font-size: 12px !important;
  }
  @media (max-width: 768px) {
    padding: 30px 20px !important;
  }
`;

export const Text = styled(Typography)`
  text-align: center !important;
  font-size: 34px !important;
  font-weight: 700 !important;
  line-height: 46px !important;
`;

export const ColContainer = styled(Container)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 15px !important;
  // background: red !important;

  @media (max-width: 768px) {
    gap: ${(props) => (props.mobileGap ? props.mobileGap : "8px")} !important;
  }
`

// const ButtonContainer = styled(Container)`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// `
// margin="10px auto" width="25%" minWidth="60%"

const FlexContainer = styled(Container)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
  width: ${(props) => (props.width ? props.width : "100%")} !important;
  margin: ${(props) => (props.margin ? props.margin : "0 auto")};
  padding: ${(props) => (props.padding ? props.padding : 0)};
  // background: red !important;
  gap: ${(props) => (props.gap ? props.gap : "15px")} !important;

  @media (max-width: 912px) {
    width: ${(props) => props.tablet};
  }

  @media (max-width: 768px) {
    width: ${(props) => props.mobile};
  }
`;

  // @media (max-width: 768px) {
    //   width: ${(props) => (props.minWidth ? props.minWidth : "100%")};
    //   padding: ${(props) => (props.minPadding ? props.minPadding : "12px")};
    //   flex-direction: ${(props) =>
    //     props.flexDirection ? props.flexDirection : "row"};
    // } margin="10px auto" width="85%"
const CustomerTypes = () => {
  const customerTypes = [
    {
      id: 1,
      title: "Convenience at your fingertip",
      options: [
        {
          id: 1,
          subTitle: "Wide Selection",
          subText:
            "Lellaill boasts a vast and diverse range of products, including items that may be difficult to find in local stores. You can access a global marketplace with a wide variety of brands and styles.",
        },
        {
          id: 2,
          subTitle: "No Crowds No Hassle",
          subText:
            "With just a few clicks, you can browse a vast selection of products, compare prices, read reviews, and make secure transactions. So sit back, relax, and let leave it to us. Lellall has you covered.",
        },
        {
          id: 3,
          subTitle: "100% Refund Policy",
          subText:
            "If the product you received falls short of your expectations or arrives damaged or defective, you typically have the option to initiate a return or request a refund.",
        },
      ],
      imageUrl: "/assets/new-customer.svg",
    },
    {
      id: 2,
      title: "Drive and earn with us",
      options: [
        {
          id: 1,
          subTitle: "Earn as you drive",
          subText:
            "Our customers are there to keep you busy with plenty of courier requests. Transform your time on the road into a money-making opportunity.",
        },
        {
          id: 2,
          subTitle: "Flexible Hours",
          subText:
            "You decide when and how much you want to work. No set schedules, no boss – just freedom and flexibility.",
        },
        {
          id: 3,
          subTitle: "Any Vehicle",
          subText: `Own a car, bike, or scooter? We welcome all types of vehicles. It's not about what you drive; it's about how you drive!`,
        },
      ],
      imageUrl: "/assets/new-rider.svg",
    },
    {
      id: 3,
      title: "Increase your sales",
      options: [
        {
          id: 1,
          subTitle: "Reach new customers",
          subText:
            "Millions of our customers are in need of your product, turn them into lifelong fans right now.",
        },
        {
          id: 2,
          subTitle: "Increase your earnings",
          subText:
            "With our large network of users to turn into customers, more business will come to you.",
        },
        {
          id: 3,
          subTitle: "Let us handle delivery",
          subText:
            "Just focus on running your business and we will take care of delivering your products to customers.",
        },
      ],
      imageUrl: "/assets/new-owner.svg",
    },
  ];
  const [showType, setShowType] = useState(1);
  const customerTypeNames = ["Customer", "Courier", "Business Owner"];
  return (
    <Wrapper>
      <ColContainer>
      <Text variant="h3" color="#2F313F">
        Get all you need with a click of a button
      </Text>
      <FlexContainer width="40%" minWidth="60%">
        {customerTypeNames.map((name, index) => (
          <RoundedButton
            key={index}
            onClick={() => setShowType(index + 1)}
            bgColor={index + 1 !== showType ? "#F4F4F6" : ""}
            textColor={index + 1 !== showType ? "#2F313F" : ""}
            outlined
            round
            variant="contained"
          >
            {name}
          </RoundedButton>
        ))}
      </FlexContainer>    
      </ColContainer>
 
      <FlexContainer>
        {customerTypes.map((type) => (
          <CustomerType
            key={type.id}
            customer={type}
            showType={showType === type.id}
          />
        ))}
      </FlexContainer>
    </Wrapper>
  );
};

export default CustomerTypes;
