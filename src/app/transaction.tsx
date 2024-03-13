import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../utils/config';
import useAuth from './useAuth';
import styled from 'styled-components';
import { Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';


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
    const [loading, setLoading] = useState(true); // State for loading indicator

    const urlParams = new URLSearchParams(window.location.search);
    const statusParam = urlParams.get('status');
    const txRefParam = urlParams.get('trxref');
    const navigate = useNavigate()

    const { accessToken } = useAuth();
    useEffect(() => {
        if (!accessToken) return; // Exit early if accessToken is not available

        const fetchTransactionStatus = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/checkout/status?transactionReference=${txRefParam}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const data = response.data;
                setStatus(data.status);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                setLoading(false);
                console.error('Error fetching transaction status:', error);
            }
        };
        fetchTransactionStatus();
    }, [accessToken, txRefParam]);

    return (
        <Container>
            {loading ? (
                <CircularProgress />
            ) : (
                <>

                    {status === 'COMPLETED' ? (
                        <>
                            <Illustration src='../assets/Subs.svg' alt="Transaction Illustration" />
                            <Heading>Payment completed successful!</Heading>
                            <br />
                            <Button onClick={() => navigate('/')} style={{ height: "40px", marginLeft: "5px" }}>Go Home</Button>
                        </>
                    ) : (
                        status === 'PENDING' ? (
                            <>
                                <Illustration src='../assets/payment_pending.svg' alt="Transaction Illustration" />
                                <Heading>Payment is Pending...</Heading>
                                <br />
                                <Button onClick={() => navigate('/')} style={{ height: "40px", marginLeft: "5px" }}>Go Home</Button>
                            </>
                        ) : (
                            <>
                                <Illustration src='../assets/payment_failed.svg' alt="Transaction Illustration" />
                                <Heading>Error Processing Transaction</Heading>
                                <br />
                                <Button onClick={() => navigate('/')} style={{ height: "40px", marginLeft: "5px" }}>Go Home</Button>
                            </>
                        )
                    )}
                </>
            )}
        </Container>
    );
};

export default TransactionStatusPage;
