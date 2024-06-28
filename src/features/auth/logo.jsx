import styled from 'styled-components';

import LogoImg from "../../../assets/Logo.svg";

// Styled components for logo
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: #3498db; /* Change the color as needed */
`;

const LogoIcon = styled.img`
  width: 50px; /* Set the width as needed */
  height: 50px; /* Set the height as needed */
//   border-radius: 50%;
  margin-right: 10px; /* Adjust spacing as needed */
`;


// Logo component
const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon src={LogoImg} alt="Logo" />
    </LogoContainer>
  );
};

export default Logo;
