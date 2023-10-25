"use client";

import { useState } from "react";
import { Wrapper, FlexContainer } from './Container/Container';
import CustomerType from "./CustomerType";
import { RoundedButton } from "./Button/Button";
import { CenteredText } from "./Text/Text";


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
      imageUrl: "/images/new-customer.svg",
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
      imageUrl: "/images/new-rider.svg",
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
      imageUrl: "/images/new-owner.svg",
    },
  ];
  const [showType, setShowType] = useState(1);
  const customerTypeNames = ["Customer", "Courier", "Business Owner"];
  return (
    <Wrapper margin="30px auto">
      <CenteredText>Get all you need with a click of a button</CenteredText>
      <FlexContainer margin="10px auto" width="25%" minWidth="60%">
        {customerTypeNames.map((name, index) => (
          <RoundedButton
            key={index}
            onClick={() => setShowType(index + 1)}
            bgColor={index + 1 !== showType ? "#F4F4F6" : ""}
            textColor={index + 1 !== showType ? "#2F313F" : ""}
          >
            {name}
          </RoundedButton>
        ))}
      </FlexContainer>
      <FlexContainer width="85%" >
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
