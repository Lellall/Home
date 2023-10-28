import styled from "styled-components";
import { Button } from "@mui/material";

export const RoundedButton = styled(Button)`
  text-transform: none !important;
  color: ${(props) => (props.textColor ? props.textColor : "#fff")} !important;
  background: ${(props) => (props.bgColor ? props.bgColor : "#0E5D37")} !important;

`;

export const SemiRoundButton = styled.button`
  background: #00a661;
  width: 120px;
  height: 40px;
  padding: 0px 20px;
  border-radius: 8px;
  color: #fff;
  border: 0px solid;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;
