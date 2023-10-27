import styled from "styled-components";
import Image from "next/image";
import { RoundedButton } from "./Button/Button";
import { Heading, SubText } from './Text/Text';
import { Container, FlexContainer } from './Container/Container';

const BannerWrapper = styled(FlexContainer)`
  background-image: url("lellal-2.jpg");
  height: 680px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 310px;
  }
`;

const FlexButton = styled(RoundedButton)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;
  width: 200px;
`;


const Banner = () => {
  return (
    <BannerWrapper>
      <Container width="40%" margin="0 20px" minWidth="60%">
        <Heading fontsize='50px' textcolor='#fff'>Shop wherever you like, for whatever you like</Heading>
        <SubText fontsize='18px' textcolor='#fff' margin="22px 0" minMargin="12px 0">
          Lellall is an all-in-one ecommerce store, bringing the market to your
          doorstep. Place an order wherever you are and get your delivery within
          minutes.
        </SubText>
        <FlexButton>
          <span> Visit our store</span>{" "}
          <Image
            src="/images/happyemoji.svg"
            alt="happy"
            height={25}
            width={25}
          />
        </FlexButton>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
