import { useState } from "react";
import "./App.css";
import PrimarySearchAppBar from "./navbar";
import { Button, Container, Typography } from "@mui/material";
import BG from "../assets/BG.svg";
import Mobile from "../assets/mobile.svg";
import styled from "styled-components";

const Cover = styled(Container)`
  /* background-color: red; */
  background: url(${BG});
  background-repeat: no-repeat;
  overflow-x: hidden;
  background-size: cover;
  height: 80vh !important;
  margin: 0 !important;
  display: flex;
  flex: 1;
  padding-top: 200px;
  padding-left: 40px !important;
  &::before {
    content: "";
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 80vh;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    );
    @media (max-width: 912px) {
      height: 40vh;
    }
    @media (max-width: 768px) {
      height: 50vh;
    }
  }

  /* Add this style for the content to be on top of the transparent layer */
  & > * {
    position: relative;
    z-index: 100 !important;
  }
  /* flex-wrap: wrap; */
  @media (max-width: 912px) {
    padding-top: 200px;
    height: 40vh !important;
    background: url(${Mobile});
    background-repeat: no-repeat;
    overflow-x: hidden;
    background-size: cover;
  }
  @media (max-width: 768px) {
    padding-top: 100px;
    height: 50vh !important;
    background: url(${Mobile});
    background-repeat: no-repeat;
    overflow-x: hidden;
    background-size: cover;
  }
`;
const Text = styled(Typography)`
  margin-top: 10px !important;
  margin-bottom: 20px !important;
  line-height: 1.2 !important;
  font-weight: 300 !important;
  @media (max-width: 912px) {
    font-size: 20px !important;
  }
  @media (max-width: 768px) {
    font-size: 25px !important;
  }
`;
const SubText = styled(Typography)`
  margin-top: 10px !important;
  margin-bottom: 20px !important;
  line-height: 1.2 !important;
  font-weight: 300 !important;
  @media (max-width: 912px) {
    font-size: 16px !important;
    font-weight: 300 !important;
  }
  @media (max-width: 768px) {
    font-size: 18px !important;
    font-weight: 300 !important;
  }
`;
export const RoundButton = styled(Button)`
  /* border-radius: 50px !important; */
  background-color: #0e5d37 !important;
  text-transform: none !important;
  @media (max-width: 768px) {
    /* padding: inherit !important; */
  }
`;

// const Hea

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <PrimarySearchAppBar />

      <Cover maxWidth="false">
        <Text
          color="#fff"
          variant="h3"
          component="div"
          sx={{ display: { xs: "block", sm: "block" } }}
        >
          Shop wherever you like,
          <br /> for whatever you like
        </Text>

        <div>
          <SubText variant="h6" color="#fff">
            Léllall is an all-in-one On-demand store, bringing the market to
            your doorstep.
            <br /> Place an order wherever you are and get your delivery within
            minutes.
          </SubText>
          <RoundButton outlined round variant="contained">
            Visit our store
          </RoundButton>
        </div>
      </Cover>
    </>
  );
}

export default App;
