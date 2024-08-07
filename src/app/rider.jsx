import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getItemFromLocalForage } from "../utils/getItem";
import useAuth from "./useAuth";
import { BaseUrl } from "../utils/config";
import { formatCurrency } from "../utils/currencyFormat";

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
  font-size: 1.5rem; /* Increase title font size */
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
  font-size: 13px; /* Increase font size */
  text-align: center;
  margin-bottom: 10px;
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

  const [details, setDetails] = useState();
  const [summary, setSummary] = useState();

  // const getRiderIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrderStatus();
    }, 10000); // Call the API every 10 seconds
    setIntervalId(interval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const fetchOrderStatus = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/orders/consumer/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.data;
      setDetails(data);
      if (data.status === "ACCEPTED") {
        clearInterval(intervalId);
        navigateToInitiate(id);
      } else {
        setStatus(data.status);
      }
    } catch (error) {
      console.error("Error fetching order status:", error);
    }
  };
  console.log(details, "details");

  useEffect(() => {
    if (details !== undefined) {
      getSummary();
    }
  }, [details]);

  const initiateCheckout = async (orderId) => {
    try {
      // setLoading(true);

      // Make a request to the checkout initiate endpoint with the orderId
      const response = await axios.post(
        `${BaseUrl}/checkout/initiate`,
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
  const getSummary = async () => {
    try {
      const data = {
        items: details.paymentItems,
        deliveryPoint: details.deliveryPoint,
      };
      const response = await axios.post(
        `${BaseUrl}/checkout/summary`,
        { items: details.paymentItems, deliveryPoint: details.deliveryPoint },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response from the checkout initiate endpoint
      setSummary(response.data);

      // Open the payment link in a new tab/window
      // window.location.href = paymentUrl;
    } catch (error) {
      // setLoading(false);

      console.error("Error initiating checkout:", error);
    } finally {
      // setLoading(false);
    }
  };

  console.log(summary, "sum");

  const navigateToInitiate = async (id) => {
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
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <PageContainer>
      <Title>Matching you with a Rider</Title>
      <Illustration src="src/assets/pena.svg" alt="Illustration" />
      <TimerContainer>
        <Message>
          We're currently searching for the best available rider to deliver your
          item. Please do not navigate away from the page.
        </Message>
        <Message>
          This process usually takes just a few moments. Thank you for your
          patience!
        </Message>
        {summary && (
             <SummaryContainer>
             <SummaryHeader>Checkout summary</SummaryHeader>
             <SummaryItems>
               {summary?.items.map((item, index) => (
                 <SummaryItem key={index}>
                   <ItemName>{item.name}</ItemName>
                   <ItemDetails>
                     {/* <ItemCount>{item.count}</ItemCount> */}
                     <ItemCost>{item.type === 'CHARGE' ? `${formatCurrency(item.totalAmount)}` : `${formatCurrency(item.totalAmount * item.count)}`}</ItemCost>
                   </ItemDetails>
                 </SummaryItem>
               ))}
             </SummaryItems>
             <TotalCost>Total: {formatCurrency(summary?.totalCost)}</TotalCost>
           </SummaryContainer>
       
        )}
      </TimerContainer>
    </PageContainer>
  );
};

export default LookingForRidersPage;

const SummaryContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 20px;
  width: 300px;
`;

const SummaryHeader = styled.p`
  text-align: center;
`;

const SummaryItems = styled.div`
  margin-top: 10px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size:13px;
`;

const ItemName = styled.span`
  flex: 1;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemCount = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const ItemCost = styled.span`
  flex: 1;
  text-align: right;
`;

const TotalCost = styled.h3`
  margin-top: 20px;
  text-align: center;
`;
