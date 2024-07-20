// RoundedButton.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 10px;
  margin: ${props => props.margin || '5px'};
  margin-top: ${props => props.spaceTop || '0'};
  margin-bottom: ${props => props.spaceBottom || '0'};
  margin-left: ${props => props.spaceLeft || '0'};
  margin-right: ${props => props.spaceRight || '0'};
  width: 100%;
  display: ${props => props.display};
  background-color: ${props => props.backgroundColor || '#2196F3'};
  color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    opacity: 1;
    // background-color: ${props => props.hoverColor || '#1565c0'};
  }

  &:active {
    background-color: ${props => props.activeColor || '#0d47a1'};
    box-shadow: none;
  }
`;

const RoundedButton = ({
  onClick,
  children,
  backgroundColor,
  hoverColor,
  activeColor,
  margin,
  spaceTop,
  spaceBottom,
  spaceLeft,
  spaceRight,
  display,
  loading,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      activeColor={activeColor}
      margin={margin}
      spaceTop={spaceTop}
      spaceBottom={spaceBottom}
      spaceLeft={spaceLeft}
      spaceRight={spaceRight}
      display={display}
      disabled={loading}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};

export default RoundedButton;
