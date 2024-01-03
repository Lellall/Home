import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
  Hidden,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers';
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import axios from "axios";

import InputWithIcon from "../../../components/inputs/input.component";
import {  MessageText, Unlock } from "iconsax-react";
import { RoundButton } from "../../../App";

const ActionCover = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  /* width: 450px;
margin: 20px 32px;  */
@media only screen and (max-width: 767px) {
   flex-direction: column-reverse;
   justify-content: center;

  }
`;

const CircleButton = styled.button`
  width: 40px; /* Set the width and height to create a perfect circle */
  height: 40px;
  border-radius: 50%; /* Set the border-radius to 50% to make it a circle */
  background-color: #fff; /* Set the background color */
  color: #cccccc; /* Set the text color */
  font-size: 16px; /* Set the font size */
  cursor: pointer; /* Set cursor to pointer for better user experience */
  border: 1px solid #ccc; /* Remove border for a cleaner look */
  outline: none; /* Remove default focus outline */
  margin-right: 15px;
  /* Add hover effect */
  &:hover {
    background-color: #ccc; /* Change background color on hover */
  }
  padding-top: 5%;
  @media only screen and (max-width: 767px) {
  //  justify-content: center;
  padding-top:1%  ;
   }
`;

const ModButton = styled(RoundButton)`
  padding: 10px 40px !important;
  margin-right: 5px;
  @media only screen and (max-width: 767px) {
    width: 100% !important;
    margin-bottom: 20px !important;
   }
`;
const ModButtonCircle = styled(RoundButton)`
  padding: 31px 10px !important;
  width: 10px !important; /* Set the width and height to create a perfect circle */
  height: 10px !important;
`;

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0E5D37",
    },
  },
});

const styles = {
  container: {
    height: "100vh",
    margin: 0,
    padding: 0,
  },
  leftPane: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    border: "none",
    // backgroundColor: theme.palette.primary.main,
    color: "#fff",
    boxShadow: "none",
    border: "none",
  },
  contain: {
    height: "100dvh",
    width: "60dvh",
    backgroundImage: 'url("/assets/login.svg")', // Replace with the path to your image
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  rightPane: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    height: "100%",
    boxShadow: "none",
    border: "none",
    // width: '60%',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent:'center',
    width: "100%",
    // margin:"10px 20px",
    // maxWidth: "100%",
    marginTop: "20px", // Add margin to create space between tabs and form
    overFlowY: "hidden",
  },
  textField: {
    margin: "10px 0",
  },
  button: {
    margin: "20px 0",
  },
  tab: {
    // No specific styling for tabs in this example
  },
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })
    ),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const url = "http://146.190.153.125/shops";

    axios
      .get(url)
      .then((response) => {
        console.log("Status Code:", response.status);
        console.log("Response Data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={styles.container}>
        {/* Left Pane - Hidden on smaller screens */}
        <Hidden smDown mdDown>
          <Grid item xs={12} md={5}>
            <Paper elevation={3} style={styles.leftPane}>
              <div style={styles.contain}></div>
            </Paper>
          </Grid>
        </Hidden>

        {/* Right Pane */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} style={styles.rightPane}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              style={styles.tab}
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <div
                style={{
                  color: "#AAAAAA",
                  fontWeight: "bold",
                  marginTop: "10px",
                  marginLeft: "5px",
                  color: "#333",
                  fontSize: "18px",
                }}
              >
                {/* Sign In */}
              </div>
              <div
                style={{
                  color: "#AAAAAA",
                  marginLeft: "5px",
                  marginTop: "15px",
                }}
              >
                Log back into your account with your credentials
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Cover style={{  margin: "60px auto" }}>
                <InputWithIcon
                  formMethods={{}}
                  icon={MessageText}
                  label="Email"
                  placeholder="Email"
                  type="email"
                />
                <InputWithIcon
                  formMethods={{}}
                  icon={Unlock}
                  label="Password"
                  placeholder="Password"
                  type="password"
                />
                <ActionCover
                  style={{
                    marginBottom: "25px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  <div style={{ color: "#AAAAAA", marginLeft: "5px" }}></div>
                  <div style={{ color: "red", marginLeft: "5px" }}>
                    Forgot password?
                  </div>
                </ActionCover>
                <ActionCover>
                  <div style={{ color: "#AAAAAA", display:"flex" }}>
                   
                    <Text> Other sign in options</Text>
                    <SocialCover>
                      <CircleButton>
                        <svg
                         width="28"
                         height="28"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17.5084 17.5637C18.0492 16.7387 18.2509 16.317 18.6634 15.3912C15.6201 14.2362 15.1342 9.90032 18.1409 8.24115C17.2242 7.08615 15.9317 6.41699 14.7126 6.41699C13.8326 6.41699 13.2276 6.64617 12.6867 6.857C12.2284 7.03117 11.8159 7.18699 11.3026 7.18699C10.7526 7.18699 10.2667 7.01284 9.75339 6.8295C9.19423 6.62784 8.60756 6.41699 7.87422 6.41699C6.50839 6.41699 5.05089 7.25116 4.12506 8.68116C2.82339 10.6978 3.05256 14.4745 5.15173 17.7012C5.9034 18.8562 6.91173 20.1487 8.22256 20.167C8.77256 20.1762 9.13006 20.0112 9.52423 19.837C9.97339 19.6353 10.4592 19.4153 11.3117 19.4153C12.1642 19.4062 12.6409 19.6353 13.0901 19.837C13.4751 20.0112 13.8234 20.1762 14.3642 20.167C15.6934 20.1487 16.7567 18.7187 17.5084 17.5637Z"
                            fill="black"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.5199 1.83301C14.6666 2.84134 14.2541 3.84052 13.7132 4.53719C13.1357 5.28885 12.1274 5.8755 11.1557 5.83884C10.9816 4.86717 11.4307 3.868 11.9807 3.19883C12.5949 2.4655 13.6307 1.89717 14.5199 1.83301Z"
                            fill="black"
                          />
                        </svg>
                      </CircleButton>
                      <CircleButton>
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.4 14.2057C22.4 13.6271 22.344 13.0297 22.2506 12.4697H14.168V15.7737H18.7973C18.6106 16.8377 17.9946 17.7711 17.08 18.3684L19.8426 20.5151C21.4666 19.0031 22.4 16.8004 22.4 14.2057Z"
                            fill="#4280EF"
                          />
                          <path
                            d="M14.168 22.5678C16.4826 22.5678 18.424 21.8025 19.8426 20.4958L17.08 18.3678C16.3146 18.8905 15.3253 19.1891 14.168 19.1891C11.928 19.1891 10.0426 17.6771 9.35198 15.6611L6.51465 17.8451C7.97065 20.7385 10.92 22.5678 14.168 22.5678Z"
                            fill="#34A353"
                          />
                          <path
                            d="M9.35182 15.6423C8.99716 14.5783 8.99716 13.421 9.35182 12.357L6.51449 10.1543C5.30116 12.581 5.30116 15.437 6.51449 17.845L9.35182 15.6423Z"
                            fill="#F6B704"
                          />
                          <path
                            d="M14.168 8.8293C15.3813 8.81063 16.576 9.2773 17.4533 10.1173L19.8986 7.6533C18.3493 6.1973 16.296 5.4133 14.168 5.43197C10.92 5.43197 7.97065 7.2613 6.51465 10.1546L9.35198 12.3573C10.0426 10.3226 11.928 8.8293 14.168 8.8293Z"
                            fill="#E54335"
                          />
                        </svg>
                      </CircleButton>
                    </SocialCover>
                  </div>
               
                    <div>
                      <ModButton
                        bgColor="#0E5D37"
                        textColor="#fff"
                        outlined
                        variant="contained"
                        
                      >
                        Sign In
                      </ModButton>
                    </div>
                 
                </ActionCover>
              </Cover>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;

const Cover = styled.div`
 
  width:450px;
  @media only screen and (max-width: 767px) {
    width: 300px;
  }
`;
const SocialCover = styled.div`
display: flex;
@media only screen and (max-width: 767px) {
    width:100%;
    margin:0;
   justify-content: center;
  }
`;

const Text = styled.div`
  margin: 8px 10px;
  @media only screen and (max-width: 767px) {
   display: none;
  }
`
