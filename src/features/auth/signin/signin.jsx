import React, { useEffect, useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Input,
  Button,
  Tabs,
  Tab,
  IconButton,
  InputAdornment,
  createTheme,
  ThemeProvider,
  Hidden,
} from '@mui/material';
import { Visibility, VisibilityOff, Email } from '@mui/icons-material';
import * as Yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import axios from 'axios';

import { FaEnvelope, FaLock } from 'react-icons/fa';
import InputWithIcon from '../../../components/inputs/input.component';
import {Apple, Facebook, Google, MessageText,Unlock} from 'iconsax-react'
import { RoundButton } from '../../../App';

const ActionCover = styled.div`
display:flex;
flex:1;
justify-content: space-between;

/* width: 450px;
margin: 20px 32px;  */
`

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
`;

const ModButton = styled(RoundButton)`
  padding: 10px 40px !important;
  margin-right: 5px;
`
const ModButtonCircle = styled(RoundButton)`
  padding: 31px 10px !important;
  width: 10px !important; /* Set the width and height to create a perfect circle */
  height: 10px !important;
`

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0E5D37',
    },
  },
});

const styles = {
  container: {
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  leftPane: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    border:"none",
    // backgroundColor: theme.palette.primary.main,
    color: '#fff',
    boxShadow: 'none',
    border: 'none',

  },
  contain:{
    height: '100dvh',
    width: '60dvh',
    backgroundImage: 'url("/assets/login.svg")', // Replace with the path to your image
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  rightPane: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    height: '100%',
    boxShadow: 'none',
    border: 'none',
    // width: '60%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    marginTop: '20px', // Add margin to create space between tabs and form
    overFlowY:"hidden"  
  },
  textField: {
    margin: '10px 0',
  },
  button: {
    margin: '20px 0',
  },
  tab: {
    // No specific styling for tabs in this example
  } 
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    })),
  });

  const onSubmit = data => {
    console.log(data);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const url = 'http://146.190.153.125/shops';

axios.get(url)
  .then(response => {
    console.log('Status Code:', response.status);
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={styles.container}>
        {/* Left Pane - Hidden on smaller screens */}
        <Hidden smDown>
          <Grid item xs={12} md={5}>
            <Paper elevation={3} style={styles.leftPane}>
              <div style={styles.contain}>
              </div>
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
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
            <div style={{marginTop: "20px",  textAlign:'center'  }}>
            <div style={{color:"#AAAAAA",fontWeight:"bold", marginTop:"10px", marginLeft:"5px",color:"#333",fontSize:"18px",}}>Sign In</div>
            <div style={{color:"#AAAAAA", marginLeft:"5px", marginTop:"15px"}}>Log back into your account with your credentials</div>
            </div>
           <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{width: '450px', margin:"20px 30px"}}>
            <InputWithIcon formMethods={{}} icon={MessageText} label="Email"   placeholder="Email" type="email" />
            <InputWithIcon formMethods={{}} icon={Unlock} label="Password"  placeholder="Password" type="password" />
           <ActionCover style={{marginBottom: '25px', cursor:"pointer", fontSize:"14px"}}>
            <div style={{color:"#AAAAAA", marginLeft:"5px"}}></div>           
            <div style={{color:"red", marginLeft:"5px"}}>Forgot password?</div>           
           </ActionCover>
           <ActionCover>
            <div style={{color:"#AAAAAA", marginLeft:"5px"}}>Other sign in options</div>
            <div style={{display:'flex'}}>
            <div>
            <CircleButton>
            <Apple
 size="21"
 color="black"
/>
            </CircleButton>
            <CircleButton>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.4 14.2057C22.4 13.6271 22.344 13.0297 22.2506 12.4697H14.168V15.7737H18.7973C18.6106 16.8377 17.9946 17.7711 17.08 18.3684L19.8426 20.5151C21.4666 19.0031 22.4 16.8004 22.4 14.2057Z" fill="#4280EF"/>
<path d="M14.168 22.5678C16.4826 22.5678 18.424 21.8025 19.8426 20.4958L17.08 18.3678C16.3146 18.8905 15.3253 19.1891 14.168 19.1891C11.928 19.1891 10.0426 17.6771 9.35198 15.6611L6.51465 17.8451C7.97065 20.7385 10.92 22.5678 14.168 22.5678Z" fill="#34A353"/>
<path d="M9.35182 15.6423C8.99716 14.5783 8.99716 13.421 9.35182 12.357L6.51449 10.1543C5.30116 12.581 5.30116 15.437 6.51449 17.845L9.35182 15.6423Z" fill="#F6B704"/>
<path d="M14.168 8.8293C15.3813 8.81063 16.576 9.2773 17.4533 10.1173L19.8986 7.6533C18.3493 6.1973 16.296 5.4133 14.168 5.43197C10.92 5.43197 7.97065 7.2613 6.51465 10.1546L9.35198 12.3573C10.0426 10.3226 11.928 8.8293 14.168 8.8293Z" fill="#E54335"/>
</svg>

            </CircleButton>
            </div>
            <div>
            <ModButton
              bgColor="#0E5D37"
              textColor="#fff"
              outlined
              variant="contained"
              style={{padding:"40px 10px"}}
            >
              Sign In
            </ModButton>
            </div>
            </div>
           
           </ActionCover>
            </div>
           </form>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;


const Social = styled.div`
display: flex;
flex: 1;
justify-content: space-between;
`