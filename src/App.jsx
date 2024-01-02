import "./App.css";

import { Button, Container, Typography } from "@mui/material";
import BG from "../assets/BG.svg";
import Tab from "../assets/Tab.svg";
import NG from "/assets/ng.svg";
import One from "../assets/1.svg";
import Two from "../assets/2.svg";
import Three from "../assets/3.svg";
import Four from "../assets/4.svg";
import Mobile from "../assets/mobile.svg";
import styled from "styled-components";
import CustomerTypes from "./components/CustomerTypes";
import Services from "./components/Services";
import MissionStatement from "./components/MissionStatement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import VerticalTabs from "./Promote";
import RecipeReviewCard from "./cardSamp";
import TabComponent, { ModTitleMain, TitleMain } from "./components/Tabs";
import NewProducts from "./Surface";
import MissionCards from "./cardSamp";
import Stores from "./FavStores";
import { MultipleProducts,MultipleItems } from "./StoreSlide";

export const Text = styled(Typography)`
  margin-top: 10px !important;
  margin-bottom: 20px !important;
  line-height: 1.2 !important;
  font-weight: 300 !important;
  @media only screen and (min-width: 768px){
    font-size: 12px !important;
}
  @media (max-width: 912px) {
    font-size: 44px !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (max-width: 1180px  ){
    border-radius: 0;
    font-size: 40px !important; 
  }
  @media only screen and (min-width: 820px){
    border-radius: 0;
    font-size: 50px !important; 
  }
  @media only screen and (min-width: 1024px){
    border-radius: 0;
    font-size: 64px !important;
  }
  @media only screen and (max-width: 500px){
    font-size: 40px !important;
    margin-top: -3.5em !important ;
}
@media only screen and (max-width: 360px){
  /* font-size: 20px !important; */
  }

`;

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
  /* text-transform: none !important; */
  display: flex;
  justify-content: center;
  padding: ${(props) => (props.pad ? props.pad : "5px 30px")} !important;
  align-items: center;
  gap: 8px !important;
  font-size: ${(props) => (props.size ? props.size : "12px")} !important;

  @media (max-width: 900px) {
    font-size: ${(props) =>
      props.tabletSize ? props.tabletSize : "14px"} !important;
    padding: ${(props) =>
      props.tabletPad ? props.tabletPad : "10px 30px"} !important;
  }

  @media (max-width: 600px) {
    font-size: ${(props) =>
      props.mobileSize ? props.mobileSize : "14px"} !important;
    padding: ${(props) =>
      props.mobilePad ? props.mobilePad : "12px 25px"} !important;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) and (max-width: 1180px  ){
    padding: 5px 20px !important;
    font-size: 10px !important;
  }
  @media only screen and (max-width: 500px){
    padding: 5px 20px !important;
    font-size: 8px !important;
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

const Contained = styled.div`
  background: url(${BG});
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-size: cover;
  min-height: 80vh;
  margin: 0 70px;
  border-radius: 10px;
  position: relative;
  @media (max-width: 500px) {
    padding-top: 150px;
    min-height: 50dvh !important;
    background: url(${Mobile});
    background-repeat: no-repeat;
    overflow-x: hidden;
    background-size: cover;
    border-radius: 0px;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 80vh;
    border-radius: none;
    /* clip-path: polygon(0 0, 100% 0%, 61% 100%, 0% 100%); */
    background-color: #f06d0657;
    @media only screen and (max-width: 500px){
      background-color: #00000099;
      border-radius: 0px;
}
  }
  overflow-y: hidden;
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (max-width: 1180px  ){
    border-radius: 0;
    height: 10dvh;
    min-height: 44dvh;
    background: url(${Tab});
  background-repeat: no-repeat; 
  overflow-x: hidden !important;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  }

  @media only screen and (max-width: 768px){
margin: 0 10px;
}
  @media only screen and (max-width: 500px){
margin: 0;
}

`;
const OverlayContent = styled.div`
  position: absolute;
  padding: 30px;
  width: 50%;
  z-index: 1;
  height: 72vh;
  border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
  background-color: #004225;
  box-shadow: 20px 20px 60px orange, -20px -20px 60px purple;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    border-radius: 0;
    padding: 20px 10px;
    height: 100%;
     border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
}
@media only screen and (max-width: 500px){
background: transparent;
margin: 0;
width: 100%;
height: 100%;
padding:  0;
text-align: center;
/* padding-top: 10px; */
box-shadow: none;
}
`;

const HoverBox = styled.div`
  margin: 10px 20px;
`;
const SubTextCover = styled.div`
  background-color: transparent;
  line-height: 1.5;
  padding: 5px;
  font-size: 13px;
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
  clip-path: polygon(0 0, 100% 0%, 91% 100%, 0% 100%);
  /* border: 1px dashed #fff; */
  margin-top: -15px;
  margin-bottom: 5px;
  /* font-style: ; */
  color: #fff;
  font-weight: 300;
  @media only screen and (max-width: 500px){
text-align: center;
margin: 0;
font-size: 19px;
width: 100%;
/* padding-top: 50px; */
}
`;
export const CardCover = styled.div`
  display: flex;
  margin: 25px 70px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 25px 20px;
  }
`;

export const Card = styled.div`
  img {
    width: 100px;
    height: 100px;
  }

  h4 {
    margin-top: 15px; /* Adjusted margin for smaller screens */
    font-size: 12px;
    font-weight: 300;
    color: #000;
    text-transform: uppercase;
    border-bottom: 1px solid orange;
    cursor: pointer;
  }

  background: #fff;
  width: 275px;
  margin: 5px;
  padding: 0 10px;
  justify-content: space-between;
  
  &:not(:last-child) {
    border-right: 1px solid #e7e7e7;
  }

  .title {
    margin: 0 0 10px 20px;
    color: #003f5f;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;

    h1 {
      font-weight: bolder;
      font-size: 20px;
      margin-top: 7px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
    border-right: none; /* Remove border for smaller screens */
  }

  @media screen and (max-width: 500px) {
    border-radius: 0;
  }
`;
const CenterBox = styled.div`

  margin: 25px 70px;
  text-align: left;
  width: 90%;
  ${"" /* background: red; */}
  font-size: 19px;
  color: #141718;
   ${"" /* box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; */}
   border-radius: 8px;
   ${"" /* clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%); */}
   height: 40px;
   padding: 20px;
   border-radius: 50px;
   ${"" /* color: orange; */}
`;

const MapCover = styled.div`
width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 50px 0;
  position: relative;
  padding: 10px;
  border-radius: 50px;

  @media only screen and (max-width: 1024px){
/* text-align: center;
margin: 0;
font-size: 19px;
width: 100%; */
/* padding-top: 50px; */
display: none;
}
  // border-top: 1px dotted orange;
  ${"" /* box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; */}
`;

const BorderWhite = styled.div`
  width: 150px;
  margin-top: 100px;
  ${"" /* border-radius: 30% 70% 70% 30% / 29% 30% 70% 71%; */}
  height: 150px;
  background: orange;
  // box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  border-radius: 23% 77% 70% 30% / 30% 0% 100% 70%;
  padding: 20px 15px;
  position: relative;
`;
const CountryCard = styled.div`
  width: 90%;
  ${"" /* margin-top: 100px; */}
  ${"" /* border-radius: 30% 70% 70% 30% / 29% 30% 70% 71%; */}
  border-radius: 23% 77% 70% 30% / 30% 0% 100% 70%;
  height: 90%;
  background: #004225;
  color: #fff;
  ${"" /* box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px purple; */}
  padding: 10px;
`;

const RedDot = styled.div`
  position: absolute;
  top: 10;
  right: 10;
  // background: red;
  border-radius: 50%;
  // width: 30px;
  // height: 30px;
`;

const NGMap = styled.div`
  width: 50%;
  ${"" /* border-radius: 30% 70% 70% 30% / 29% 30% 70% 71%; */}
  background: url(${NG});
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-position: center;
  background-size: contain;
  overflow-y: hidden;
  height: 70vh;
  display: flex;
  flex: 1;
  justify-content: center;
  ${"" /* background: orange; */}
  ${"" /* box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; */}
  ${"" /* padding: 10px; */}
  &::before {
    content: "";

    z-index: 1;
    height: 80vh;
    /* clip-path: polygon(0 0, 100% 0%, 61% 100%, 0% 100%); */
    background-color: #0e5d37;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  ${"" /* font-style: italic; */}
  font-weight: bold;
  height: 100%;
  ${"" /* margin-left: 80px; */}
  margin-top: 20px;
  border-radius: 50px;
  padding: 30px;
  text-align: center;
`;

export default function Landing() {
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

      <Contained>
        <OverlayContent>
          <HoverBox>
            <Text
              color="#fff"
              variant="h2"
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              Shop wherever <br /> you like,
              <br /> for whatever <br /> you like.
            </Text>
            <SubTextCover>
              <p>
                Léllall is an all-in-one On-demand store, bringing the market to
                your doorstep.
                <br /> Place an order wherever you are and get your delivery
                within minutes.
              </p>
            </SubTextCover>
            <RoundButton
              bgColor="#fff"
              textColor="#000"
              outlined
              variant="contained"
            >
              Visit our store
            </RoundButton>
          </HoverBox>
        </OverlayContent>
      </Contained>
      <TabComponent />
      <CenterBox style={{marginBottom:"100px"}}>
      <TitleMain> Top Rated Stores</TitleMain>
    </CenterBox>  
    <MultipleItems />
      
        <TitleMain style={{ textAlign: "center", margin:'50px 0', marginBottom:'0px', fontSize:'20px' }}> Top Trending Products</TitleMain>
      
      <MultipleProducts />
      {/* <CardCover style={{ textAlign: "left", color: "black", padding: '20px 0', marginTop:'100px', marginBottom:'0px' }}>
      Join Us in Making It Work: Here's Why You Should Partner with Lellall
    </CardCover> */}
      {/* <Mission>
      <NumBox1>
      <TitleMain
        style={{
         fontSize: '20px',
         textAlign:'center',
         margin: '20px 20px'
        }}
      >
      Empowering Local & Small Businesses.
        <br />
      </TitleMain>
      <ModTitleMain
        style={{ fontSize: "11px", textAlign: "center", color: "#0e5d37" }}
      >
      Support a community-driven marketplace dedicated to uplifting local
        businesses. At Lellall, we prioritize and empower small enterprises,
        fostering economic growth and creating a platform where every
        purchase makes a positive impact
      </ModTitleMain>
    </NumBox1>
      <NumBox1>
      <TitleMain
        style={{
          fontSize: '20px',
          textAlign:'center',
           margin: '20px 20px'
        }}
      >
        Innovative Marketplace Experience.
        <br />
      </TitleMain>
      <ModTitleMain
        style={{ fontSize: "11px", textAlign: "center", color: "#0e5d37" }}
      >
        Explore a cutting-edge platform designed to revolutionize the way
        you shop, connect, and discover. Discover a seamless and innovative
        marketplace experience that goes beyond the ordinary.
      </ModTitleMain>
    </NumBox1>
      <NumBox1>
      <TitleMain
        style={{
          fontSize: '20px',
          textAlign:'center',
           margin: '20px 20px'
        }}
      >
      Secure Shopping, Trusted Transactions.
        <br />
      </TitleMain>
      <ModTitleMain
        style={{ fontSize: "11px", textAlign: "center", color: "#0e5d37" }}
      >
      At Lellall, we prioritize your security. Enjoy a robust and
      sophisticated infrastructure for a seamless, worry-free online
      shopping experience. Shop confidently with every transaction
      safeguarded, making us your trusted destination for secure online
      commerce.
      </ModTitleMain>
    </NumBox1>
      </Mission> */}
      <TitleMain style={{ textAlign: "center", margin:'50px 0', marginBottom:'0px', fontSize:'20px' }}>
      Join Us in Making It Work: Here's Why You Should Partner with Lellall
    </TitleMain> 
      <MissionCards />
      <MapCover>
      <div style={{width: '40%'}}>
      <TitleMain
      style={{fontSize: '20px', marginLeft:'50px'}}
      >
        We're in the Nation's capital and heading to your doorsteps.
      </TitleMain>
      <ModTitleMain
      style={{
        fontSize: "17px",
      }}
    >
      Léllall is on a mission to revolutionize the shopping experience.
      We are offering a better alternative for the Nigerian market
      place. No hassle, no fuss, all your needs delivered to you
      whenever and wherever you want. Starting in the heart of Nigeria,
      we are committed to expanding all across Nigeria, until our name
      is on the lips of every Nigerian.
    </ModTitleMain>
      </div>
        <NGMap>
      
        </NGMap>
     
      </MapCover>
     
      <div>
     
        <Footer />
      </div>

      {/* <CenterBox style={{ textAlign: "left", color: "black" }}>
        Just In, New Arrivals
      </CenterBox> */}
    </>
  );
}

