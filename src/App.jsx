import "./App.css";
import { Button, Container, Typography } from "@mui/material";
import BG from "../assets/BG.svg";
import Mobile from "../assets/mobile.svg";
import styled from "styled-components";
import CustomerTypes from "./components/CustomerTypes";
import Services from "./components/Services";
import MissionStatement from "./components/MissionStatement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Cover = styled(Container)`
  background: url(${BG});
  background-repeat: no-repeat;
  overflow-x: hidden !important;
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
    background-color: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
    @media (max-width: 900px) {
      height: 65vh;
    }
    @media (max-width: 600px) {
      height: 55vh;
    }
  }

  /* Add this style for the content to be on top of the transparent layer */
  & > * {
    position: relative;
    z-index: 100 !important;
  }
  /* flex-wrap: wrap; */
  @media (max-width: 912px) {
    padding-top: 150px;
    height: 65vh !important;
    background: url(${Mobile});
    background-repeat: no-repeat;
    overflow-x: hidden;
    background-size: cover;
  }
  @media (max-width: 600px) {
    padding-top: 80px;
    height: 55vh !important;
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
  @media (max-width: 600px) {
    font-size: 14px !important;
    font-weight: 300 !important;
  }
`;
export const RoundButton = styled(Button)`
  border-radius: 31px !important;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "#0e5d37"} !important;
  color: ${(props) => (props.textColor ? props.textColor : "")} !important;
  text-transform: none !important;
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.pad ? props.pad : "12px 30px")} !important;
  align-items: center;
  gap: 8px !important;
  font-size: ${(props) => (props.size ? props.size : "14px")} !important;
  
  @media (max-width: 900px) {
    font-size: ${(props) => (props.tabletSize ? props.tabletSize : "14px")} !important;
    padding: ${(props) => (props.tabletPad ? props.tabletPad : "10px 30px")} !important;
  }

  @media (max-width: 600px) {
    font-size: ${(props) => (props.mobileSize ? props.mobileSize : "14px")} !important;
    padding: ${(props) => (props.mobilePad ? props.mobilePad : "12px 25px")} !important;
  }
`;
const ButtonText = styled.p`
  font-size: 18px;
  color: #fff;
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
function App() {
  const services = [
    {
      id: 1,
      title: "Groceries",
      subtext: "All your essentials, all in one place.",
      imageUrl: "/assets/groceries.svg",
    },
    {
      id: 2,
      title: "Delivery",
      subtext: "Your groceries delivered within minutes to your doorstep",
      imageUrl: "/assets/delivery.svg",
    },
    {
      id: 3,
      title: "Vendors",
      subtext: "Trusted vendors giving a 100% quality",
      imageUrl: "/assets/vendors.svg",
    },
  ];

  return (
    <>
      <Navbar />
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
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <RoundButton outlined round variant="contained" size="18px" tabletSize="16px" mobileSize="12px">
              Download Our App
            </RoundButton>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
              }}
            >
              <ButtonText>Visit our store</ButtonText>
              <img src="/assets/arrow-right.svg" alt="happy" />
            </div>
          </div>
        </div>
      </Cover>
      <div>
        <CustomerTypes />
        <Services services={services} />
        <MissionStatement />
        <Footer />
      </div>
    </>
  );
}

export default App;
