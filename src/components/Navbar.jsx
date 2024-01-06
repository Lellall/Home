// import { RoundedButton } from "./Button/Button";
// import { ColContainer, FlexContainer, StyledImage } from "./Container/Container";
import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
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
    padding: 10px 40px !important;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
  // background: blue;
  gap: 30px;
  margin-right: 5px;

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
`;
export const LogoCover = styled.div`
  margin-left: 10px;
  img {
    width: 60px;
    height: 60px;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <LogoCover>
        <img src={Logo} alt="Logo" />
      </LogoCover>
      <FlexContainer>
        {/* <RoundButton outlined variant="contained">
          Download Our App
        </RoundButton>
        <RoundButton bgColor="#EAFEF1" textColor="#2F313F">
          Sign Up
        </RoundButton> */}

        {/* <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}> */}
        <Button
          outlined
          style={{
            background: "#0e5d37",
            fontSize: "10px",
          }}
          round
          variant="contained"
          size="10px"
          tabletSize="16px"
          mobileSize="12px"
        >
          <svg
            width="24"
            height="23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
            viewBox="0 0 13 16"
          >
            <path
              d="m6.848 7.641-6.785 7.03.001.004A1.825 1.825 0 0 0 1.834 16c.339 0 .657-.09.93-.246l.022-.013 7.637-4.301L6.848 7.64Z"
              fill="#EA4335"
            ></path>
            <path
              d="m13.713 6.444-.007-.004-3.297-1.866L6.694 7.8l3.728 3.638 3.28-1.847c.575-.303.965-.894.965-1.577 0-.677-.385-1.266-.954-1.57Z"
              fill="#FBBC04"
            ></path>
            <path
              d="M.062 1.33c-.04.146-.062.3-.062.46v12.42c0 .16.021.315.062.46l7.02-6.849L.061 1.33Z"
              fill="#4285F4"
            ></path>
            <path
              d="m6.898 8 3.512-3.427L2.78.256A1.871 1.871 0 0 0 1.834 0C.986 0 .27.563.063 1.327v.002L6.897 8Z"
              fill="#34A853"
            ></path>
          </svg>
          <span style={{ marginLeft: "5px" }}>Get on Google Play</span>
        </Button>
        <Button
          outlined
          style={{
            background: "black",
            fontSize: "10px",
          }}
          round
          variant="contained"
          size="10px"
          tabletSize="16px"
          mobileSize="12px"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            class="mr-1.5"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
          </svg>
          <span style={{ marginLeft: "5px" }}>Get on Apple store</span>
        </Button>
      </FlexContainer>
      <MobileContainer>
        <ColContainer>
          <SubText>Delivery to</SubText>
          <StyledSelect name="location">
            <option>Abuja</option>
          </StyledSelect>
        </ColContainer>

        <RxHamburgerMenu style={{ fontSize: "24px" }} />
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
