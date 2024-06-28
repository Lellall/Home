// DropdownTableMenu.js
import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

// Styled components
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  //   background-color: #4caf50;
  //   color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  right: 20%;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const MenuItem = styled.div`
  padding: 8px 16px;
  margin: 10px 0;
  cursor: pointer;
  text-align: left;
  &:hover {
    background-color: #ddd;
  }
`;

// Dropdown menu component
const DropdownTableMenu = ({
  buttonText,
  isOpen,
  toggleDropdown,
  menuItems,
}) => {
  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{buttonText}</DropdownButton>
      {isOpen && (
        <DropdownContent isOpen={isOpen}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => console.log(`Clicked on ${item}`)}
            >
              {item}
            </MenuItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default DropdownTableMenu;
