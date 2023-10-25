// "use client";

import styled from "styled-components";
// import { Container, FlexContainer, StyledImage } from "./Container/Container";
// import { Heading, SubText } from "./Text/Text";

const Wrapper = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  background-color: red;
`;

// const InnerFlexContainer = styled(FlexContainer)`
//   justify-content: flex-start;
// `;
// const ColoredContainer = styled.div`
//   border-radius: 100px;
//   background: #00a661;
//   padding: 8px 15px;
//   color: #fff;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 4px;
// `;

const CustomerType = ({ customer, showType }) => {
  return (
    <Wrapper show={showType} width="90%" margin="0 auto" padding="0">
      hola
    </Wrapper>
  );
};

export default CustomerType;
