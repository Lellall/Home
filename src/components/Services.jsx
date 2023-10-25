"use client";

import styled from "styled-components";

import { CenteredText, SubText, Heading } from "./Text/Text";
import {
  Wrapper,
  Container,
  FlexContainer,
  StyledImage,
} from "./Container/Container";

const ServiceContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  width: 355px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 6px 10px 0px #2f313f1a;

  @media (max-width: 768px) {
    width: 225px;
  }
`;

const Services = ({ services }) => {
  return (
    <Wrapper
      bgColor="#eafef1"
      textcolor="#2f313f"
      padding="35px"
      minPadding="12px"
    >
      <CenteredText>Our Services</CenteredText>
      <FlexContainer width="80%" margin="20px auto">
        {services.map((service) => (
          <ServiceContainer key={service.id}>
            <Container width="60%" padding="0" margin="0">
              <Heading fontsize="24px" minFontsize="18px">
                {service.title}
              </Heading>
              <SubText fontsize="18px" minFontsize="12px">{service.subtext}</SubText>
            </Container>
            <StyledImage
              src={service.imageUrl}
              alt={service.title}
              height="150px"
              width="150px"
              margin="15px 0px 0px"
              minWidth="85px"
              minHeight="85px"
              minMargin="0px"
            />
          </ServiceContainer>
        ))}
      </FlexContainer>
    </Wrapper>
  );
};

export default Services;
