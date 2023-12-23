import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { ViewportWidth } from "../../../utils/enums";

export const HeadingContainer = styled(Box)`
  display: flex !important;
  padding: 16px !important;
  align-items: center !important;
  gap: 8px !important;
  align-self: stretch !important;
  border-bottom: 1px solid rgba(236, 236, 236, 0.93) !important;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 11.449px !important;
    gap: 5.725px !important;
    border-bottom: 0.716px solid rgba(236, 236, 236, 0.93) !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    display: none !important;
  }
`;

export const HeadingText = styled(Typography)`
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 20px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 28px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    font-size: 16px !important;
    line-height: 22px !important;
  }
`;

export const GridContainer = styled(Box)`
  padding: 0px 16px 30px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 0px 11.449px 21.468px !important;
  }
`;
