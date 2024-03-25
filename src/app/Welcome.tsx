// @ts-nocheck
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Verify from '../assets/verify.svg'
import { RoundedButton } from '../components/Button/Button';
import axios from 'axios';
import { BaseUrl } from '../utils/config';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position:relative;
  width: 600px;
  h1{
    font-size: 9px;
    font-weight: 400;
    line-height: 20.8px;
    letter-spacing: 0.001em;
    text-align: left;
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const Illustration = styled.img`
  width: 150px; /* Adjust size as needed */
  height: auto;
  text-align: center;
  margin: 0 auto;
  float: center;
  
`;

const ModalVerified = ({ show, onClose }) => {
    const [verified, setVerified] = useState(false);
    const [verifiedContent, setVerifiedContent] = useState('Verifying your account...');
    const [error, setError] = useState(false);
    console.log('====================================');
    console.log(error, 'yuiojh');
    console.log('====================================');

    const errorContent = 'Failed to verify your account at this moment please try again'
    const successContent = (
        <>
            <Illustration src={Verify} alt="Illustration" />
            <div style={{ fontWeight: 300, marginTop: '10px', fontSize: '25px', textAlign: 'center' }}>Your email account is verified!</div>
            <p
                style={{ fontWeight: 300, marginTop: '10px', fontSize: '16px', textAlign: 'center' }}
            >Welcome to our platform. You can now access exclusive features and content.</p>
            <RoundedButton
                onClick={onClose}
                style={{ padding: "8px 10px" }}
            >
                Continue
            </RoundedButton>
        </>
    )


    useEffect(() => {
        if (show) {
            const params = new URLSearchParams(window.location.search);
            const user = params.get('user');
            const token = params.get('token');
            const params1 = {
                user,
                token
            };

            if (user && token) {
                // setTimeout(() => {
                //     setVerified(true);
                // }, 2000);

                axios.put(`${BaseUrl}/users/verify?user=${user}&token=${token}`, null, { params1 })
                    .then(response => {
                        console.log(response, 'iii');

                        setVerifiedContent(successContent);
                    })
                    .catch(error => {
                        setError(true)
                        setVerifiedContent(errorContent);
                    });
            }
        }
    }, [show]);

    return (
        <>
            {show &&
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onClick={onClose}>X</CloseButton>
                        {/* {verified ? (
                            <>
                                <Illustration src={Verify} alt="Illustration" />
                                <div style={{ fontWeight: 300, marginTop: '10px', fontSize: '25px', textAlign: 'center' }}>Your email account is verified!</div>
                                <p
                                    style={{ fontWeight: 300, marginTop: '10px', fontSize: '16px', textAlign: 'center' }}
                                >Welcome to our platform. You can now access exclusive features and content.</p>
                                <RoundedButton
                                    onClick={onClose}
                                    style={{ padding: "8px 10px" }}
                                >
                                    Continue
                                </RoundedButton>
                            </>
                        ) : (
                            <>

                                <p>Verifying your account...</p>
                            </>
                        )} */}
                        {verifiedContent}
                    </ModalContent>
                </ModalOverlay>
            }
        </>
    );
};

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const user = params.get('user');
        const token = params.get('token');
        if (user && token) {
            setModalOpen(true);
        }
    }, []);

    return (
        <div>
            <h1>React Modal Example</h1>
            <ModalVerified show={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default ModalVerified;
