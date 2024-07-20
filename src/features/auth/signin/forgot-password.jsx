import { useEffect, useState } from "react";
import { Grid, Paper, createTheme, ThemeProvider, Hidden } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import InputWithIcon from "../../../components/inputs/input.component";
import { MessageText, Unlock } from "iconsax-react";
import { RoundButton } from "../../../App";
import Logo from "../logo";
import { getItemFromLocalForage } from "../../../utils/getItem";
import { ToastContainer, toast } from "react-toastify";
import useAuthStore from "../../../app/authStore";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../../../utils/config";
import { useRequestPasswordResetMutation } from "../auth-api";
import { useAuth } from "../auth.context";

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
    padding-top: 1%;
  }
`;

const ModButton = styled(RoundButton)`
  padding: 10px 40px !important;
  @media only screen and (max-width: 767px) {
    width: 100% !important;
    margin-bottom: 20px !important;
  }
  ${({ loading }) =>
    loading &&
    `
  opacity: 0.5 !important;
  pointer-events: none !important;
`}
`;
const theme = createTheme({
  palette: {
    primary: {
      main: "#0E5D37",
    },
  },
});

const styles = {
  container: {
    margin: 0,
    padding: 0,
    overFlowY: "hidden",
  },
  leftPane: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    color: "#fff",
    boxShadow: "none",
  },
  contain: {
    height: "100dvh",
    margin: "0 30px",
    borderRadius: "8px",
    // width: "60dvh",
    backgroundImage: 'url("src/assets/undraw_login.svg")', // Replace with the path to your image
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    // background: '#F06D06',
    marginRight: "-2rem",
    width: "90%",
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
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [statusCode, setStatusCode] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);



  const onSubmit = (data) => {
    handlePasswordReset(data.email);
    // console.log(data);
  };
  const [requestPasswordReset, { isLoading, isSuccess, isError, error, data }] =
    useRequestPasswordResetMutation();

  const handlePasswordReset = async (email) => {
    try {
      if (email) {
        const result = await requestPasswordReset(email).unwrap(); // unwrap() to handle fulfilled or rejected state
        setStatusCode(result);
      }
    } catch (err) {
      console.error("Failed to send password reset request:", err);
      setStatusCode(err.originalStatus); // Extract and set the status code from error
    }
  };



  useEffect(() => {
    if (isSuccess) {
      toast.success(`A reset link has been sent to your email.`);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (error?.data) {
      toast.error(`${error?.data?.message}`);
    }
  }, [error]);
  useEffect(() => {
    let interval;
    if (isSuccess === 200) {
      setIsButtonDisabled(true);
      setTimer(60);
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isSuccess]);

  useEffect(() => {
    if (timer === 0 && isButtonDisabled) {
      setIsButtonDisabled(false);
    }
  }, [timer, isButtonDisabled]);

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
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
            <Logo />
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <div
                style={{
                  color: "#333",
                  marginLeft: "-10px",
                  marginTop: "10px",
                  fontSize: "18px",
                  fontWeight: "300",
                }}
              >
                Forgot Password?
              </div>
              <div
                style={{
                  color: "#AAAAAA",
                  marginLeft: "5px",
                  marginTop: "15px",
                  width: "350px",
                }}
              >
                Enter your email below, we will send a password reset link to
                your email.
              </div>
            </div>
            <Cover style={{ margin: "60px auto" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <InputWithIcon
                      icon={MessageText}
                      label="Email"
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      hasError={errors.email ? true : false}
                      errorMessage={errors.email && errors.email.message}
                    />
                  )}
                />
                <ActionCover>
                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <ModButton
                      bgColor="#0E5D37"
                      textColor="#fff"
                      outlined
                      variant="contained"
                      type="submit"
                      onClick={onSubmit}
                      loading={isLoading || isButtonDisabled}
                    >
                      {isLoading ? "Sending Link...." : `Send Link `}{" "}
                      {timer > 0 && `again in (${timer}s)`}
                    </ModButton>
                  </div>
                </ActionCover>
              </form>
              <hr
                style={{ margin: "20px 0", borderTop: "0.2px dotted #ccc" }}
              />
              <div style={{ textAlign: "center", color: "#808080" }}>
                <div
                  style={{
                    color: "#808080",
                    fontSize: "11px",
                    marginBottom: "5px",
                  }}
                >
                  {" "}
                  or
                </div>
                <div
                  style={{ color: "#808080", cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Go back
                </div>
              </div>
            </Cover>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ForgotPassword;

const Cover = styled.div`
  width: 450px;
  @media only screen and (max-width: 767px) {
    width: 300px;
  }
`;
const SocialCover = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
`;

const Text = styled.div`
  margin: 8px 10px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
