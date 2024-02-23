import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getItemFromLocalForage } from "../utils/getItem";
import useAuth from "./useAuth";

// Styled components for page layout
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Roboto", sans-serif; /* Use Roboto font */

  @media (max-width: 768px) {
    padding: 20px; /* Add padding for smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem; /* Increase title font size */
  margin-bottom: 30px; /* Increase margin */
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Adjust font size for smaller screens */
    margin-bottom: 20px; /* Adjust margin for smaller screens */
  }
`;

const Illustration = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 30px; /* Increase margin */

  @media (max-width: 768px) {
    width: 80%; /* Adjust image width for smaller screens */
  }
`;

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; /* Center items vertically */
`;

const Timer = styled.span`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.1rem; /* Increase font size */
  text-align: center;
  margin-bottom: 20px;
`;

const RetryButton = styled.button`
  padding: 12px 24px; /* Increase padding */
  font-size: 1.1rem; /* Increase font size */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LookingForRidersPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [showRetry, setShowRetry] = useState(false);
  const [status, setStatus] = useState("PENDING");
  const { isAuthenticated, accessToken: token, refreshAccessToken } = useAuth();
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrderStatus();
    }, 10000); // Call the API every 10 seconds
    setIntervalId(interval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const fetchOrderStatus = async () => {
    try {
      const response = await axios.get(
        "https://api.dev.lellall.com/orders/consumer/78ddbebc-9c2d-468e-bca0-746449d44f6a",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.data;

      if (data.status === "ACCEPTED") {
        clearInterval(intervalId);
        navigateToInitiate(response.data.orderId);
      } else {
        setStatus(data.status);
      }
    } catch (error) {
      console.error("Error fetching order status:", error);
    }
  };
  const initiateCheckout = async (orderId) => {
    try {
      // setLoading(true);

      // Make a request to the checkout initiate endpoint with the orderId
      const response = await axios.post(
        "https://api.dev.lellall.com/checkout/initiate",
        { orderId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response from the checkout initiate endpoint
      const { paymentUrl } = response.data;

      // Open the payment link in a new tab/window
      window.location.href = paymentUrl;
    } catch (error) {
      // setLoading(false);

      console.error("Error initiating checkout:", error);
    } finally {
      // setLoading(false);
    }
  };


  const navigateToInitiate = async(id) => {
    console.log("====================================");
    console.log("YAsss");
    console.log("====================================");
    await initiateCheckout(id);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeRemaining <= 0) {
      setShowRetry(true);
    }
  }, [timeRemaining]);

  const handleRetryClick = () => {
    alert("Retry functionality can be implemented here.");
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <PageContainer>
      <Title>Matching you with a Rider</Title>
      <Illustration src="src/assets/ride.svg" alt="Illustration" />
      <TimerContainer>
        {showRetry ? (
          <>
            <Message>
              Oops! We're sorry for the inconvenience, but we couldn't find a
              rider available to deliver your item at the moment.
            </Message>
            <Message>
              Please check your internet connection and try again later.
            </Message>
            <RetryButton onClick={handleRetryClick}>Try Again</RetryButton>
          </>
        ) : (
          <>
            <Message>
              We're currently searching for the best available rider to deliver
              your item. Please do not navigate away from the page.
            </Message>
            <Message>
              This process usually takes just a few moments. Thank you for your
              patience!
            </Message>
            <Timer>Time remaining: {formatTime(timeRemaining)}</Timer>
          </>
        )}
      </TimerContainer>
    </PageContainer>
  );
};

export default LookingForRidersPage;
