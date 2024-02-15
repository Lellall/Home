import React from "react";
import styled from "styled-components";

const AlertCard = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;

  &.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  &.info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }

  &.warning {
    color: #856404;
    background-color: #ffeeba;
    border-color: #ffc107;
  }

  &.danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
`;

const AlertCards = ({ type, children }) => {
  return <AlertCard className={type}>{children}</AlertCard>;
};

export default AlertCards;
