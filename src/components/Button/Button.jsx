"use client";

import styled from "styled-components";

export const RoundedButton = styled.button`
  border-radius: 31px;
  padding: 6px 12px;
  border: 0px solid;
  font-size: 16px;
  font-weight: 600;
  background: ${(props) => (props.bgColor ? props.bgColor : "#0E5D37")};
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
  cursor: pointer;
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
