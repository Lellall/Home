
import styled from "styled-components";

export const StyledSelect = styled.select`
  font-weight: 700;
  width: 100px;
  padding: 5px 35px 5px 5px;
  font-size: 18px;
  border: 0px solid #fff;
  height: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border-radius: 3px;
  font-family: var(--font-raleway);
  color: #0e5d37;
  cursor: pointer;
  background: url("/images/arrow.svg") 96% / 15% no-repeat #fff;

  @media (max-width: 768px) {
    padding: ${(props) => (props.minPadding ? props.minPadding : 0)};
    width: ${(props) => (props.minWidth ? props.minWidth : "75px")};
  }
`;

export const StyledInput = styled.input`
  border: 0px solid;
  margin: 0 5px;
  font-size: 16px;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;