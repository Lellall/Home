import { useState } from "react";
import styled from "styled-components";
import Five from "../../assets/Shop1.svg";
import Six from "../../assets/OWNR.svg";
import Sev from "../../assets/MSG.svg";
import { RoundButton } from "../App";

export const TitleMain = styled.p`
  font-family: sans-serif;
  padding: 10px 0px;
  font-size: 30px;
  ${'' /* font-weight: 100 !important; */}
  line-height: 35px;
  z-index: 100;
  letter-spacing: 0px;
  text-align: left;
  color: #004225;
  margin-top: 70px;
  margin-left:  30px;
  text-transform: uppercase;
  @media only screen and (max-width: 500px){
    font-size: 15px;
  }

`;

export const ModTitleMain = styled(TitleMain)`
  margin-top: -10px;
  padding: 3px 20px;
  font-size: 15px;
  line-height: 23px;
  text-transform: lowercase;
  color: #333;
  font-weight: 300;
`;
export const TabContainer = styled.div`
  display: flex;
  background: orangeYellow;
  padding: 5px;
  padding: 10px;
  width: 30%;
  margin: 20px auto;
  margin-top: 30px;
  text-align: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  justify-content: center;
  border-radius: 8px;
  ${"" /* box-shadow: 2px 4px 5px 0px rgba(0, 0, 0, 0.25); */}
  ${"" /* color: #ccc; */}
  ${"" /* background: #fff; */}
  @media only screen and (max-width: 500px){
    width: 80%;
  }
  @media only screen and (min-width: 1024px ){
    width: 90%;
    /* margin:20px auto; */
  }
`;

export const TabButton = styled.button`
  width: auto;
  padding: 6px 30px;
  ${"" /* text-transform: uppercase; */}
  ${"" /* height: 25.34px; */}
  border: none;
  background: ${(props) => (props.active ? "#004225" : "transparent")};
  border-radius: ${(props) => (props.active ? "18px" : "none")};
  color: ${(props) => (props.active ? "#fff" : "#004225")};

  cursor: pointer;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  text-align: center;
  ${"" /* color: #065c5a; */}
`;

const PanelCards = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  position: relative;
  margin: 30px 0;
  @media only screen and (max-width: 1024px){
    flex-direction: column;
  }
  
`;
const IMgCover = styled.div`
  background: url(${Five});
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-size: contain;
  width: 40%;
  height: 52vh;
  @media only screen and (max-width: 1024px){
    display: none;
  }
`;
const IMgCover1 = styled.div`
  background: url(${Six});
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-size: contain;

  width: 40%;
  height: 52vh;
  @media only screen and (max-width: 1024px){
    display: none;
  }
`;
const IMgCover2 = styled.div`
  background: url(${Sev});
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-size: contain;

  width: 40%;
  height: 52vh;
  @media only screen and (max-width: 1024px){
    display: none;
  }
`;
const TextCover = styled.div`
  margin: 30px 0;
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-size: contain;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  ${"" /* background: #ccc ; */}
  width: 55%;
  ${"" /* z-index: 1; */}
  ${"" /* textAlign: right; */}
  color:#000;
  height: 52vh;
  ${"" /* clip-path: polygon(0 0, 100% 0%, 61% 100%, 0% 100%); */}
  border-radius: 50px;
  background: #fdfcfc;
  box-shadow: 10px 10px 68px #d7d6d6, -10px -10px 68px #ffffff;
  position: relative;
  @media only screen and (max-width: 1024px){
    width: 100%;
    margin-top: 20px;
    height: 30dvh;
  }
  @media only screen and (max-width: 500px){
    width: 100%;
    margin-top: 20px;
    height: 30dvh;
    height: 50dvh;
  }
`;
const ModTextCover = styled.div`
  margin: 30px 0;
  background-repeat: no-repeat;
  overflow-x: hidden !important;
  background-size: contain;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  ${"" /* background: #ccc ; */}
  width: 60%;
  ${"" /* z-index: 1; */}
  ${"" /* textAlign: right; */}
  color:#fff;
  height: 52vh;
  ${"" /* clip-path: polygon(0 0, 100% 0%, 61% 100%, 0% 100%); */}
  border-radius: 50px;
  background: #fdfcfc;
  box-shadow: 10px 10px 68px #d7d6d6, -10px -10px 68px #ffffff;
  position: relative;
  @media only screen and (max-width: 1024px){
    width: 100%;
    margin-top: 20px;
    height: 30dvh;
  }
  @media only screen and (max-width: 500px){
    width: 100%;
    margin-top: 20px;

    height: 50dvh;
  }
`;
const InnerBox = styled.div`
  position: absolute;
  box-shadow: -10px -10px 68px #d7d6d6, 10px 10px 68px #ffffff;
  /* background: #0e5d37; */
  background: #FFB000;
  ${"" /* background: #0e5d37; */}
  z-index: 1;
  text-align: center;
  font-size: 24px;
  ${"" /* border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% ; */}
  border-radius: 20px;
  top: -30px;
  left: -10px;
  padding: 10px;
  ${"" /* padding-: 20px; */}
  width: 200px;
  height: 80px;
  color: #fff;
`;

const ModInnerBox = styled(InnerBox)`
left: 900px;
@media only screen and (max-width: 1024px){
   left: 0;
  }
`

export const TabPanel = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  margin: 20px 70px;
  margin-bottom: 100px;
  @media only screen and (max-width: 1024px){
   
    margin-top: 50px;
    
  }
  @media only screen and (max-width: 500px){
    margin: 50px 20px;
  }
`;

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabContainer>
        <TabButton active={activeTab === 0} onClick={() => handleTabClick(0)}>
          Customer
        </TabButton>
        <TabButton active={activeTab === 1} onClick={() => handleTabClick(1)}>
          Vendor
        </TabButton>
        <TabButton active={activeTab === 2} onClick={() => handleTabClick(2)}>
          Rider
        </TabButton>
      </TabContainer>
      <TabPanel active={activeTab === 0}>
        <PanelCards>
          {/* <div> */}
          <InnerBox>
            Over 100m + <small style={{ fontSize: "20px" }}>products</small>
          </InnerBox>

          <TextCover>
            <TitleMain>Convenience at your fingertips!</TitleMain>
            <ModTitleMain>
              Transforming Your Everyday: A Symphony of Effortless Living, Where
              Ultimate Convenience Resides at Your Fingertips, Redefining the
              Art of Modern Lifestyle!!
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <RoundButton
                    bgColor="#FFB000"
                    textColor="#fff"
                    outlined
                    variant="contained"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    Visit our Store
                  </RoundButton>
                </div>
                <div>
                  <RoundButton
                    bgColor="#263238 "
                    textColor="#fff"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    <svg
                      width="24"
                      height="23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2"
                      viewBox="0 0 13 16"
                    >
                      <path
                        d="m6.848 7.641-6.785 7.03.001.004A1.825 1.825 0 0 0 1.834 16c.339 0 .657-.09.93-.246l.022-.013 7.637-4.301L6.848 7.64Z"
                        fill="#EA4335"
                      ></path>
                      <path
                        d="m13.713 6.444-.007-.004-3.297-1.866L6.694 7.8l3.728 3.638 3.28-1.847c.575-.303.965-.894.965-1.577 0-.677-.385-1.266-.954-1.57Z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M.062 1.33c-.04.146-.062.3-.062.46v12.42c0 .16.021.315.062.46l7.02-6.849L.061 1.33Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="m6.898 8 3.512-3.427L2.78.256A1.871 1.871 0 0 0 1.834 0C.986 0 .27.563.063 1.327v.002L6.897 8Z"
                        fill="#34A853"
                      ></path>
                    </svg>
                  </RoundButton>
                  <RoundButton
                    bgColor="black"
                    textColor="#fff"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="mr-1.5"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                    </svg>
                  </RoundButton>
                </div>
              </div>
            </ModTitleMain>
            {/* <ModTitleMain>Convenience at your fingertip!</ModTitleMain>
            <ModTitleMain>Convenience at your fingertip!</ModTitleMain> */}
          </TextCover>
          {/* </div> */}
          <IMgCover></IMgCover>
        </PanelCards>
      </TabPanel>
      <TabPanel active={activeTab === 1}>
        <PanelCards>
          {/* <div> */}

          <ModInnerBox>
            Gain over 1m + new{" "}
            <small style={{ fontSize: "20px" }}>customers</small>
          </ModInnerBox>

          <IMgCover1></IMgCover1>
          <ModTextCover>
            <TitleMain>Are You a Business Owner? </TitleMain>
            <ModTitleMain>
              Embark on a New Chapter: Extend Your Business Horizon with Léllall
              – Elevate Your Brand's Presence and Amplify Success by Setting Up
              Shop on Our Innovative Platform!
              <br />
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <RoundButton
                    bgColor="#FFB000"
                    textColor="#fff"
                    outlined
                    variant="contained"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    Set up now
                  </RoundButton>
                </div>
                <div>
                  <RoundButton
                    bgColor="#0e5d37 "
                    textColor="#fff"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    <svg
                      width="24"
                      height="23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2"
                      viewBox="0 0 13 16"
                    >
                      <path
                        d="m6.848 7.641-6.785 7.03.001.004A1.825 1.825 0 0 0 1.834 16c.339 0 .657-.09.93-.246l.022-.013 7.637-4.301L6.848 7.64Z"
                        fill="#EA4335"
                      ></path>
                      <path
                        d="m13.713 6.444-.007-.004-3.297-1.866L6.694 7.8l3.728 3.638 3.28-1.847c.575-.303.965-.894.965-1.577 0-.677-.385-1.266-.954-1.57Z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M.062 1.33c-.04.146-.062.3-.062.46v12.42c0 .16.021.315.062.46l7.02-6.849L.061 1.33Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="m6.898 8 3.512-3.427L2.78.256A1.871 1.871 0 0 0 1.834 0C.986 0 .27.563.063 1.327v.002L6.897 8Z"
                        fill="#34A853"
                      ></path>
                    </svg>
                  </RoundButton>
                  <RoundButton
                    bgColor="black"
                    textColor="#fff"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="mr-1.5"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                    </svg>
                  </RoundButton>
                </div>
              </div>
            </ModTitleMain>
            {/* <ModTitleMain>Convenience at your fingertip!</ModTitleMain>
            <ModTitleMain>Convenience at your fingertip!</ModTitleMain> */}
          </ModTextCover>
          {/* </div> */}
        </PanelCards>
      </TabPanel>
      <TabPanel active={activeTab === 2}>
        <PanelCards>
          {/* <div> */}

          <ModInnerBox style={{fontSize:"18px"}}>
            Unlock Your Earnings Potential with <br />
            <small style={{ fontSize: "16px" }}>over 866km</small>
          </ModInnerBox>

          <IMgCover2></IMgCover2>
          <ModTextCover>
            <TitleMain >Drive and earn with us</TitleMain>
            <ModTitleMain>
              Accelerate Your Earnings: Join the Journey of Driving Success –
              Partner with Us and Turn Every Mile into Opportunities for
              Prosperity!
              <br />
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <RoundButton
                    bgColor="#FFB000"
                    textColor="#fff"
                    outlined
                    variant="contained"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    Set up now
                  </RoundButton>
                </div>
                <div>
                  <RoundButton
                    bgColor="#0e5d37 "
                    textColor="#fff"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    <svg
                      width="24"
                      height="23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2"
                      viewBox="0 0 13 16"
                    >
                      <path
                        d="m6.848 7.641-6.785 7.03.001.004A1.825 1.825 0 0 0 1.834 16c.339 0 .657-.09.93-.246l.022-.013 7.637-4.301L6.848 7.64Z"
                        fill="#EA4335"
                      ></path>
                      <path
                        d="m13.713 6.444-.007-.004-3.297-1.866L6.694 7.8l3.728 3.638 3.28-1.847c.575-.303.965-.894.965-1.577 0-.677-.385-1.266-.954-1.57Z"
                        fill="#FBBC04"
                      ></path>
                      <path
                        d="M.062 1.33c-.04.146-.062.3-.062.46v12.42c0 .16.021.315.062.46l7.02-6.849L.061 1.33Z"
                        fill="#4285F4"
                      ></path>
                      <path
                        d="m6.898 8 3.512-3.427L2.78.256A1.871 1.871 0 0 0 1.834 0C.986 0 .27.563.063 1.327v.002L6.897 8Z"
                        fill="#34A853"
                      ></path>
                    </svg>
                  </RoundButton>
                  <RoundButton
                    bgColor="black"
                    textColor="#fff"
                    style={{
                      margin: "20px 0",
                      marginRight: "5px",
                      textAlign: "right",
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      class="mr-1.5"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                    </svg>
                  </RoundButton>
                </div>
              </div>
            </ModTitleMain>
            {/* <ModTitleMain>Convenience at your fingertip!</ModTitleMain>
            <ModTitleMain>Convenience at your fingertip!</ModTitleMain> */}
          </ModTextCover>
          {/* </div> */}
        </PanelCards>
      </TabPanel>
    </div>
  );
};

export default TabComponent;
