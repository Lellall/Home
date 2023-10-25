import { CenteredText, SubText } from "./Text/Text";
import { Wrapper, Container, StyledImage } from "./Container/Container";

const MissionStatement = () => {
  return (
    <Wrapper padding="35px" minPadding="15px">
      <CenteredText>Our Mission</CenteredText>
      <Container width="65%" margin="10px auto" padding="0" minWidth="82%">
        <SubText fontsize="18px">
          Lellall is on a mission to revolutionize the shopping experience. We
          are offering a better alternative for the Nigerian market place. No
          hassle, no fuss, all your needs delivered to you whenever and wherever
          you want. Starting in the heart of Nigeria, we are committed to
          expanding all across Nigerian, until our name is on the lips of every
          Nigerian.
        </SubText>
      </Container>
      <StyledImage
        src="/images/ng.svg"
        alt="Nigeria"
        height="700px"
        width="100%"
        margin="15px auto"
        minWidth="100%"
        minHeight="700px"
      />
    </Wrapper>
  );
};

export default MissionStatement;
