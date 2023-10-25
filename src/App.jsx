import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PrimarySearchAppBar from "./navbar";
import { Box, Button, Typography } from "@mui/material";
import SwipeableTextMobileStepper from "./carousel";
import BG from "../assets/BG.svg";
import styled from "styled-components";
import CustomerTypes from './components/CustomerType'

const Cover = styled.div`
  /* background-color: red; */
  background: url(${BG});
  background-repeat: no-repeat;
  /* background-size: ; */
  height: auto;
  margin: 0;
  display: flex;
  flex: 1;
  padding: 200px;
  padding-left: 50px;
  flex-wrap: wrap;
`;
const Text = styled(Typography)`
  margin-top: 10px !important;
  margin-bottom: 20px !important;
  line-height: 1.2 !important;
  font-weight: 300 !important;
  @media (max-width: 768px) {
  }
`;
const RoundButton = styled(Button)`
  border-radius: 50px !important;
  background-color: #0e5d37 !important;
  text-transform: none !important;
  padding: 7px 35px !important;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PrimarySearchAppBar />
      <Cover>
        <div>
          <Typography
            color="#fff"
            variant="h3"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Shop wherever you like,
            <br /> for whatever you like
          </Typography>
          <div>
            <Text variant="h6" color="#fff">
              Léllall is an all-in-one On-demand store, bringing the market to
              your doorstep.
              <br /> Place an order wherever you are and get your delivery
              within minutes.
            </Text>
            <RoundButton outlined round variant="contained">
              Visit our store
            </RoundButton>
          </div>
        </div>
      </Cover>
      <div>
        <CustomerTypes />
      </div>
    </>
  );
}

export default App;
