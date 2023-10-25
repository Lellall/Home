"use client";

import styled from "styled-components";

export const Heading = styled.h3`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "34px")};
  color: ${(props) => (props.textcolor ? props.textcolor : "#2F313F")};
  font-weight: ${(props) => (props.fontweight ? props.fontweight : 700)};
  font-family: var(--font-raleway);

  @media (max-width: 768px) {
    font-size: ${(props) => (props.minFontsize ? props.minFontsize : "24px")};
  }
`;

export const CenteredText = styled(Heading)`
  text-align: center;
`;

export const SubText = styled.p`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "16px")};
  color: ${(props) => (props.textcolor ? props.textcolor : "#2F313F")};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  font-weight: ${(props) => (props.fontweight ? props.fontweight : 400)};

  @media (max-width: 768px) {
    margin: ${(props) => (props.minMargin ? props.minMargin : 0)};
    font-size: ${(props) => (props.minFontsize ? props.minFontsize : "14px")};
  }
`;
