// import { RoundedButton } from "./Button/Button";
// import { ColContainer, FlexContainer, StyledImage } from "./Container/Container";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx"
import { Container, Button } from "@mui/material";

import { StyledSelect } from "./Input/Input";
import { SubText } from "./Text/Text";
// import { RoundButton } from "../App";
import Logo from "../../assets/Logo.svg";

const Wrapper = styled(Container)`
  display: flex !important;
  max-width: 1440px !important;
  flex-direction: row !important;
  // background: red;
  width: 100% !important;
  padding: 17px 64px !important;
  justify-content: space-between !important;
  align-items: center !important;


  @media (max-width: 600px) {
    padding: 10px 20px !important;
  }

`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
  // background: blue;
  gap: 30px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const MobileContainer = styled.div`
display: none;
  justify-content: space-between !important;
  align-items: center !important;
  // background: blue;
  gap: 30px;

  @media (max-width: 600px) {
    display: flex;
  }
`;

const RoundButton = styled(Button)`
border-radius: 31px !important;
background-color: ${(props) =>
  props.bgColor ? props.bgColor : "#0e5d37"} !important;
color: ${(props) => (props.textColor ? props.textColor : "")} !important;
text-transform: none !important;
display: flex;
justify-content: center;
// padding: ${(props) => (props.pad ? props.pad : 0)} !important;
padding: 8px 16px;
align-items: center;
gap: 8px !important;
font-size: 16px;

`

const Navbar = () => {
  return (
    <Wrapper>
      <img src={Logo} alt="Logo" />
      <FlexContainer>
        <RoundButton outlined variant="contained">
          Download Our App
        </RoundButton>
        <RoundButton bgColor="#EAFEF1" textColor="#2F313F">
          Sign Up
        </RoundButton>
        <ColContainer>
          <SubText>Delivery to</SubText>
          <StyledSelect name="location">
            <option>Abuja</option>
          </StyledSelect>
        </ColContainer>
      </FlexContainer>
      <MobileContainer>
      <ColContainer>
          <SubText>Delivery to</SubText>
          <StyledSelect name="location">
            <option>Abuja</option>
          </StyledSelect>
        </ColContainer>

        <RxHamburgerMenu style={{ fontSize: '24px' }}/>
      </MobileContainer>
    </Wrapper>
  );
};

export default Navbar;

{
  /* <FlexContainer width="90%" padding="10px" margin="5px auto" minWidth="85%" minPadding="0px">
 <StyledImage src="/logo.svg" alt='logo' width="49px" height="48px"/> 
<img src={Logo} alt="Logo" />

<FlexContainer width="35%" margin="0" padding="0" minWidth="50%">
  <RoundButton outlined variant="contained">
      Download Our App
        </RoundButton>
  <RoundButton bgColor="#EAFEF1" textColor="#2F313F">
    Sign Up
  </RoundButton>
   <Image src="/images/menu.svg" alt="menu" height={25} width={25} />
  <ColContainer margin="0" padding="0" width="auto" minWidth="60%">
    <SubText>Delivery to</SubText>
      <StyledSelect name="location">
    <option>Abuja</option>
  </StyledSelect>
  </ColContainer>
</FlexContainer>
</FlexContainer> */
}
