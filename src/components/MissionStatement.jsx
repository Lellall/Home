import { StyledImage } from "./Container/Container";
import { CenteredText } from './Services';
import { SubText } from './CustomerType';
import { Wrapper, ColContainer } from './CustomerTypes';
import styled from "styled-components";

const Text = styled(SubText)`
  text-align: center;

  @media (max-width: 912px) {
    font-size: 12px !important;
    line-height: 20px !important;
  }
  @media (max-width: 768px) {
    font-size: 10px !important;
    line-height: 20px !important;
  }
`

const MissionStatement = () => {
  return (
    <Wrapper>
      <ColContainer>
      <CenteredText>Our Mission</CenteredText>
        <Text color="rgba(18, 29, 43, 0.60)">
        Léllall is on a mission to revolutionize the shopping experience. We are  offering a better alternative for the Nigerian market place.  No hassle, no fuss, all your needs delivered to you whenever and wherever you want. Starting in the heart of Nigeria, we are committed to expanding all across Nigeria, until our name is on the lips of every Nigerian.
        </Text>
      </ColContainer>
      <StyledImage
        src="/assets/ng.svg"
        alt="Nigeria"
        height="725px"
        width="76%"
        margin="0 auto"
        mobileWidth="350px"
        mobileHeight="300px"
        tabletWidth="665px"
        tabletHeight="540px"
        mobileMargin="0 auto"
        tabletMargin="0 auto"
        objectFit="contain"
      />
    </Wrapper>
  );
};

export default MissionStatement;
