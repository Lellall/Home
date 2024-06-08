import { useEffect, useState } from "react";
import { Grid, Paper, createTheme, ThemeProvider, Hidden } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import InputWithIcon from "../../../components/inputs/input.component";
import { MessageText, TickSquare, Unlock } from "iconsax-react";
import { RoundButton } from "../../../App";
import Logo from "../logo";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useRequestPasswordResetMutation,
  useResetPasswordMutation,
} from "../auth-api";

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

const NewPassword = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const token = query.get("token");
  const email = query.get("email");
  const role = query.get("role");
  const navigate = useNavigate();
  const [resetPassword, { isLoading, isSuccess, error }] =
    useResetPasswordMutation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Password reset successful. Please login.`);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (error?.data) {
      toast.error(`${error?.data?.message}`);
    }
  }, [error]);

  const onSubmit = async (data) => {
    await console.log(data);
    try {
      await resetPassword({
        email,
        token,
        newPassword: data.password,
        confirmPassword: data.confirmPassword,
        role,
      }).unwrap();
      // Handle success (e.g., display a success message or redirect)
    } catch (err) {
      // Handle error (e.g., display an error message)
    }
  };

  if (isSuccess) {
    return (
      <div style={{ textAlign: "center", padding: "20px", marginTop: "200px" }}>
        <TickSquare size="32" color="green" />
        <h2>Password Reset Successful!</h2>
        <p>
          Your password has been reset. You can now log in with your new
          password.
        </p>
        <ModButton
          bgColor="#0E5D37"
          textColor="#fff"
          outlined
          variant="contained"
          type="submit"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </ModButton>
      </div>
    );
  }

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
                Set Up Your New Password
              </div>
              <div
                style={{
                  color: "#AAAAAA",
                  marginLeft: "5px",
                  marginTop: "15px",
                  width: "350px",
                }}
              >
                Create a strong new password to keep your account safe.
              </div>
            </div>
            <Cover style={{ margin: "60px auto" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value: /^(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least one special character (!@#$%^&*)",
                    },
                  }}
                  render={({ field }) => (
                    <InputWithIcon
                      icon={Unlock}
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      hasError={!!errors.password}
                      errorMessage={errors.password && errors.password.message}
                    />
                  )}
                />

                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  }}
                  render={({ field }) => (
                    <InputWithIcon
                      icon={Unlock}
                      label="Confirm Password"
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                      hasError={!!errors.confirmPassword}
                      errorMessage={
                        errors.confirmPassword && errors.confirmPassword.message
                      }
                    />
                  )}
                />

                <ActionCover>
                  <div>
                    <ModButton
                      bgColor="#0E5D37"
                      textColor="#fff"
                      outlined
                      variant="contained"
                      type="submit"
                      onClick={onSubmit}
                      loading={isLoading}
                    >
                      {isLoading ? "Loading...." : "Change Password"}
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

export default NewPassword;

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
