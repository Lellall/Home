import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../utils/config';
import useAuth from './useAuth';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';


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
    const [loading, setLoading] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const statusParam = urlParams.get('status');
    const txRefParam = urlParams.get('tx_ref');

    const navigate = useNavigate()

    const { accessToken, refreshAccessToken } = useAuth();
    const fetchTransactionStatus = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`${BaseUrl}/checkout/status?status=${statusParam}&transactionReference=${txRefParam}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const data = response.data;
            setLoading(false)
            setStatus(data.status);
            //   setIllustration(data.status === 'successful' ? 'success_illustration.svg' : 'error_illustration.svg');
        } catch (error) {
            if (error.response.status === 500) {

                refreshAccessToken()

            }
            setLoading(false)
        }
    };
    useEffect(() => {
        if (accessToken) {
            fetchTransactionStatus();
        }
    }, [statusParam, accessToken]);

    return (
        <Container>
            <Illustration src='../assets/Guy.svg' alt="Transaction Illustration" />
            {loading && <>
                <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{ float: "center" }}
                    wrapperClass="color-ring-wrapper"
                    colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                    ]}
                />
                <div>
                    loading please wait....
                </div>
            </>}
            {status === 'COMPLETED' && (
                <>
                    <Heading>Payment Completed Successful!</Heading>
                    <br />
                    <Button onClick={() => navigate('/')} style={{ height: "40px", marginLeft: "5px" }}>Go Home</Button>
                </>
            )}
            {status !== 'COMPLETED' && !accessToken && (
                <>
                    <Heading>Error Processing Transaction</Heading>
                    <br />
                    <Button onClick={() => fetchTransactionStatus()} style={{ height: "40px", marginLeft: "5px" }}>Try again</Button>
                </>
            )}

        </Container>
    );
};

export default TransactionStatusPage;
