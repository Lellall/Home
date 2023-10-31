import styled from "styled-components";
import { RoundedButton } from "./Button/Button";
import { FlexContainer, StyledImage } from "./Container/Container";
import { StyledInput } from "./Input/Input";
import { Container, Typography } from "@mui/material";
import { CenteredText } from "./Services";

const InputContainer = styled(FlexContainer)`
  background: #fff;
  border-radius: 8px;
`;

const SubText = styled(Typography)`
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  text-align: center !important;
`;

const ColoredText = styled(SubText)`
  text-align: inherit !important;

  @media (max-width: 912px) {
    text-align: center !important;
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.mobileSize ? props.mobileSize : "14px"} !important;
    text-align: center !important;
  }
`;

const Wrapper = styled(Container)`
  display: flex !important;
  max-width: 1439px !important;
  width: 100% !important;
  padding: 0px !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 57px !important;
  flex-shrink: 0 !important;
  background: #0e5d37 !important;

  @media (max-width: 912px) {
    gap: 5px !important;
    padding-bottom: 30px !important;
  }
  @media (max-width: 768px) {
    gap: 5px !important;
    padding-bottom: 10px !important;
  }
`;

const Cover = styled.div`
  display: flex;
  padding: 60px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px dashed #fff;
  width: 100%;

  @media (max-width: 768px) {
    padding: 30px 20px !important;
  }
`;
const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 0px;
    gap: 8px;
  }
`;

const CoverContainer = styled.div`
  display: flex;
  width: 36%;
  max-width: 750px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media (max-width: 912px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    width: 82%;
    padding: 0px 25px !important;
    gap: 20px;
  }
`;

const ButtomContainer = styled.div`
  display: flex;
  align-items: flex-start !important;
  flex-direction: row !important;
  gap: 80px !important;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 912px) {
    gap: 60px !important;
    flex-direction: column !important;
    width: 90%;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    flex-direction: column !important;
    align-items: center;
    padding: 15px 0px;
    justify-content: center;
    gap: 30px !important;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 48%;

  @media (max-width: 912px) {
    width: 80%;
    margin: 0 auto;
    align-items: center;
    gap: 12px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 96%;
  }
`;

const NavContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 600px) {
    align-items: center;
    gap: 10px;
    border-bottom: 1px dashed #fff;
  }
`;

const SubHeading = styled(Typography)`
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 22px !important;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  width: 45% !important;

  @media (max-width: 912px) {
    width: 88% !important;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100% !important;
  }
`;
const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media (max-width: 600px) {
    flex-direction: row;
    padding: 0px 15px;
    gap: 15px;
    align-self: stretch;
  }
`;
const Footer = () => {
  const navColumns = [
    {
      id: 1,
      heading: "About",
      subTexts: [
        "About us",
        "Blog",
        "Careers",
        "Sign up as a vendor",
        "Sign up as a courier",
      ],
    },
    {
      id: 2,
      heading: "Support",
      subTexts: [
        "Contact us",
        "Online Chat",
        "Whatsapp",
        "Telegram",
        "Ticketing",
      ],
    },
    {
      id: 3,
      heading: "FAQ",
      subTexts: [
        "Account",
        "Manage Deliveries",
        "Orders",
        "Payments",
        "Returns",
      ],
    },
  ];
  return (
    <Wrapper>
      <Cover>
        <CoverContainer>
          <ColContainer>
            <CenteredText color="#fff">Newsletter</CenteredText>
            <SubText color="#fff">
              Be the first one to know about discounts, offers and events weekly
              in your mailbox. Unsubscribe whenever you like with one click.
            </SubText>
          </ColContainer>

          <InputContainer
            padding="5px"
            width="100%"
            minWidth="100%"
            mobilePadding="4px"
          >
            <FlexContainer
              margin="0 12px"
              padding="0"
              width="auto"
              minWidth="20%"
              mobilePadding="0px"
            >
              <img src="/assets/mail.svg" alt="mail" />
              <StyledInput type="text" placeholder="Enter your email" />
            </FlexContainer>
            <RoundedButton outlined round variant="contained">
              Submit
            </RoundedButton>
          </InputContainer>
        </CoverContainer>
      </Cover>
      <ButtomContainer>
        <TextContainer>
          <StyledImage
            alt="lellall"
            src="/assets/lellall.svg"
            height="23px"
            width="120px"
            mobileHeight="23px"
            mobileWidth="120px"
            tabletHeight="23px"
            tabletWidth="120px"
          />
          <ColoredText color="#9a9ea6">
            Léllall, an all-in-one On-demand store, aimed at disrupting the way
            people shop by revolutionizing the online retail industry and
            setting new standards in customer satisfaction, product diversity,
            and technological innovation. Our dream is to redefine convenience,
            accessibility, and the overall shopping experience.
          </ColoredText>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
           <a href='https://www.linkedin.com/company/l%C3%A9llall/about/' target='blank'>
              <img src="/assets/linkedin.svg" />
            </a>
            <a href='https://twitter.com/Lellall_ng' target='blank'>
              <img src="/assets/twitter.svg" />
            </a>
            <a href='https://www.instagram.com/lellall_ng' target='blank'>
              <img src="/assets/instagram.svg" />
            </a>
            <a href='https://tiktok.com/lellall_ng' target='blank'>
              <img src="/assets/tiktok.svg" />
            </a>
            <a href='https://facebook.com/lellall_ng' target='blank'>
            <img src="/assets/facebook.svg" />
            </a>
          </div>
        </TextContainer>
        <InnerContainer>
          {navColumns.map((column) => (
            <NavContainer key={column.id}>
              <SubHeading color="#fff">{column.heading}</SubHeading>
              <NavItems>
                {column.subTexts.map((text, i) => (
                  <ColoredText key={i} color="#9a9ea6" mobileSize="12px">
                    {text}
                  </ColoredText>
                ))}
              </NavItems>
            </NavContainer>
          ))}
        </InnerContainer>
      </ButtomContainer>
      <SubText color="#9a9ea6">© 2023, All Rights Reserved</SubText>
    </Wrapper>
  );
};

export default Footer;
