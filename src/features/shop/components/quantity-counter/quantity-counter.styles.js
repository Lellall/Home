import styled from "styled-components";

import { Typography } from "@mui/material";

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Quantity = styled(Typography)`
  color: #000 !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Open Sans !important;
  font-size: 24.645px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 33.887px !important;
`;

export const Counter = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 23.105px;
`;

export const Controls = styled.div`
  display: flex;
  width: 44.67px;
  height: 44.67px;
  padding: 0px 15.403px;
  justify-content: center;
  align-items: center;
  gap: 30.807px;
  border-radius: 41.589px;
  background: #f3f3f8;
  box-sizing: border-box;
  cursor: pointer;
  color: #f06d06;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Open Sans;
  font-size: 21.565px;
  font-style: normal;
  font-weight: 400;
  line-height: 43.129px;
`;

export const CountValue = styled(Typography)`
  color: #f06d06 !important;
  text-align: center !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 24.645px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 43.129px !important;
`;
