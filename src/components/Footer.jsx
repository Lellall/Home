"use client";

import styled from "styled-components";
import Image from "next/image";
import { SemiRoundButton } from "./Button/Button";
import { CenteredText, SubText, Heading } from "./Text/Text";
import { Wrapper, Container, FlexContainer } from "./Container/Container";
import { StyledInput } from "./Input/Input";

const InputContainer = styled(FlexContainer)`
  background: #fff;
  border-radius: 8px;
`;

const ColoredText = styled(SubText)`
  color: #9a9ea6;
  margin: 10px 0;
`;

const StyledHr = styled.hr`
  width: 100%;
  color: #fff;
  margin: 8px 0;
  border: 1px dashed;
`;
//minFontsize="12px"
const Footer = () => {
  return (
    <Wrapper bgColor="#0e5d37">
      <Container padding="35px">
        <CenteredText textcolor="#fff">Newsletter</CenteredText>
        <SubText margin="14px 0" textcolor="#fff" minMargin="14px 0">
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </SubText>
        <InputContainer padding="5px" width="72%" minWidth="75%" minPadding="4px">
          <FlexContainer margin="0 12px" padding="0" width="auto" minWidth="20%" minPadding="0px">
            <Image src="/images/mail.svg" height={20} width={20} alt="mail" />
            <StyledInput type="text" placeholder="Enter your email" />
          </FlexContainer>
          <SemiRoundButton>Submit</SemiRoundButton>
        </InputContainer>
      </Container>
      <StyledHr />

      <FlexContainer padding="35px" flexDirection="column">
        <Container width="40%" margin="0">
          <Heading textcolor="#fff" fontsize="24px">
            Lellall
          </Heading>

          <ColoredText>
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat... Read More
          </ColoredText>
        </Container>
        <FlexContainer padding="5px" width="55%" margin="0" minWidth="88%">
          <Container padding="0" margin="0">
            <Heading fontsize="16px" textcolor="#fff">
              About
            </Heading>

            <ColoredText>About us</ColoredText>
            <ColoredText>Blog</ColoredText>
            <ColoredText>Careers</ColoredText>
            <ColoredText>Sign up as a driver</ColoredText>
            <ColoredText>Sign up as a vendor</ColoredText>
          </Container>
          <Container padding="0" margin="0">
            <Heading fontsize="16px" textcolor="#fff">
              Support
            </Heading>

            <ColoredText>Contact us</ColoredText>
            <ColoredText>Online Chat</ColoredText>
            <ColoredText>Whatsapp</ColoredText>
            <ColoredText>Telegram</ColoredText>
            <ColoredText>Ticketing</ColoredText>
          </Container>
          <Container padding="0" margin="0">
            <Heading fontsize="16px" textcolor="#fff">
              FAQ
            </Heading>

            <ColoredText>Account</ColoredText>
            <ColoredText>Manage Deliveries</ColoredText>
            <ColoredText>Orders</ColoredText>
            <ColoredText>Payments</ColoredText>
            <ColoredText>Returns</ColoredText>
          </Container>
        </FlexContainer>
      </FlexContainer>
      <CenteredText textcolor="#9a9ea6" fontsize="16px" minFontsize="14px">
        © 2023, All Rights Reserved
      </CenteredText>
    </Wrapper>
  );
};

export default Footer;
