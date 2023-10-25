import { RoundedButton } from "./Button/Button";
import { ColContainer, FlexContainer, StyledImage } from "./Container/Container";
import { StyledSelect } from './Input/Input';
import { Heading, SubText } from "./Text/Text";
import Image from "next/image";
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <main>

    <FlexContainer width="90%" padding="10px" margin="5px auto" minWidth="85%" minPadding="0px">
      <StyledImage src="/logo.svg" alt='logo' width="85px" height="25px"/>
      <FlexContainer width="15%" margin="0" padding="0" minWidth="50%">
        <ColContainer margin="0" padding="0" width="auto" minWidth="40%">
          <SubText>Delivery to</SubText>
            <StyledSelect name="location">
          <option>Abuja</option>
        </StyledSelect>
        </ColContainer>
        <Button variant="text" color="#EAFEF1">Sign Up</Button>

        {/* <RoundedButton bgColor="#EAFEF1" textColor="#2F313F">
          Sign Up
        </RoundedButton> */}
        <Image src="/images/menu.svg" alt="menu" height={25} width={25} />
      </FlexContainer>
    </FlexContainer>
    </main>
  );
};

export default Navbar;
