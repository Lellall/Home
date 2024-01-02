import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  padding: 10px 20px; 
  padding-right: 40px; 
  width: 100%;
  /* padding:"30px"; */
  box-sizing: border-box;
  border: 1px solid #EDE7D9;
  border-radius: 5px;
  height: 50px;
  font-size: 16px;
  outline: none;
  color: #708090;
  &::placeholder {
    color: #ccc; 
    font-weight: 300;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333; /* Set label color as needed */
`;

const IconContainer = styled.div`
  position: absolute;
  top: 70%;
  right: 10px; 
  transform: translateY(-50%);
  color: #ccc;
`;

const InputWithIcon = ({ icon: Icon, label, ...inputProps }) => {
  return (
    <InputContainer>
     <StyledLabel>{label}</StyledLabel>
      <StyledInput {...inputProps} />
      <IconContainer>{<Icon size="18"/>}</IconContainer>
    </InputContainer>
  );
};

export default InputWithIcon;
