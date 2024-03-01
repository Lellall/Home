import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../utils/config';
import useAuth from './useAuth';
import styled from 'styled-components';
import { Button } from '@mui/material';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Illustration = styled.img`
 width: 300px;
  height: auto;
`;

const Heading = styled.div`
  font-size: 2rem;
  margin-top: 1rem;
`;


const TransactionStatusPage = () => {
    const [status, setStatus] = useState('');

    const urlParams = new URLSearchParams(window.location.search);
    const statusParam = urlParams.get('status');
    const txRefParam = urlParams.get('tx_ref');


    const { accessToken } = useAuth();
    useEffect(() => {
        const fetchTransactionStatus = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/checkout/status?status=${statusParam}&transactionReference=${txRefParam}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const data = response.data;
                setStatus(data.status);
                //   setIllustration(data.status === 'successful' ? 'success_illustration.svg' : 'error_illustration.svg');
            } catch (error) {
                console.error('Error fetching transaction status:', error);
            }
        };
        if (accessToken) {
            fetchTransactionStatus();
        }
    }, [statusParam]);

    return (
        <Container>
            <Illustration src='../assets/Guy.svg' alt="Transaction Illustration" />
            {status === 'COMPLETED' ? (
                <>
                    <Heading>Payment Completed Successful!</Heading>
                    <br />
                    <Button style={{ height: "40px", marginLeft: "5px" }}>Go Home</Button>
                </>
            ) : (
                <Heading>Error Processing Transaction</Heading>
            )}
        </Container>
    );
};

export default TransactionStatusPage;
