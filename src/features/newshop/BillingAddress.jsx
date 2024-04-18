import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import styled from 'styled-components';
import useProductStore from '../../app/productStore';
import InputWithIcon from '../../components/inputs/input.component';
import { Mobile } from 'iconsax-react';
import { Controller, useForm } from 'react-hook-form';
import useAuth from '../../app/useAuth';
import useShoppingCart from '../../app/useShoppingCart';
import axios from 'axios';
import AuthModal from './authModal';
import RoundedButton from './RoundedButton';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BaseUrl } from '../../utils/config';
import useGlobalModalStore from '../../app/useGlobalModal';
const Title = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  color: #333;
`;

const BillingAddress = () => {
  const lat1 = 9.0698368;
  const lon1 = 7.464775700000001;
  const [customerPosition, setCustomerPosition] = useState('');
  const [value, setValue] = useState(null);
  const [mapError, setMapError] = useState(false);
  const [formData, setFormData] = useState({
    landmark: '',
    house: '',
  });

  const navigate = useNavigate();
  const {
    setFee,
    shppingFee,
    setAddressInfo,
    setPositionPoint,
    address: addd,
    setDistance,
    setPhone,
    address,
    positionPoint,
    distance,
    consumerPhoneNumber,
  } = useProductStore();
  const isShopsClose = useGlobalModalStore((state) => state.isShopsClose);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    // Earth's mean radius in kilometers
    const earthRadius = 6371;

    // Convert latitudes and longitudes to radians using Math.PI/180
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;

    // Calculate difference in latitude and longitude
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;

    // Use the haversine formula for accurate distance calculation
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Return the distance in kilometers
    return earthRadius * c;
  }

  useEffect(() => {
    if (value) {
      geocodeByAddress(value.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          const distance = calculateDistance(lat1, lon1, lat, lng);
          setCustomerPosition(distance);
          setDistance(distance);
          setPositionPoint({ latitude: lat, longitude: lng });
          setFee(Number(distance * 200).toFixed(2));
        });
      setAddressInfo(value.label);
    }
  }, [value]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, accessToken, refreshAccessToken } = useAuth();
  const { cart: cartItems } = useShoppingCart();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const orderData = cartItems.map((item) => {
    return {
      productId: item?.productId,
      count: item?.qnty,
      productName: item?.name,
      price: item?.price * item?.qnty,
    };
  });

  useEffect(() => {
    if (value !== null) {
      setMapError(false);
    }
  }, [value]);

  const handleCheckoutClick = async (phone) => {
    const data = {
      paymentItems: orderData,
      address: {
        streetName: address,
      },
      distance: Number(distance?.toFixed(1)),
      deliveryPoint: positionPoint,
      consumerPhoneNumber: phone,
    };
    // if (address === null || consumerPhoneNumber === '') {
    //   toast.error("Please ensure all required fields are filled out correctly and try again.", {
    //     position: 'top-right',
    //   });
    //   return;
    // }
    // refreshAccessToken();
    if (isAuthenticated && orderData?.length > 0) {
      const data = {
        paymentItems: orderData,
        address: {
          streetName: address,
        },
        distance: Number(distance?.toFixed(1)),
        deliveryPoint: positionPoint,
        consumerPhoneNumber: phone,
      };

      try {
        setLoading(true);
        console.log(data, 'data');
        const response = await axios.post(`${BaseUrl}/orders`, data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
        // await initiateCheckout(response.data.orderId);

        // addOrder(response.data);
        if (response?.status === 201) {
          navigate(`/summary?id=${response.data.orderId}`);
        }
      } catch (error) {
        if (error?.response?.status === 500) {
          toast.error('Please Try one more time.', {
            position: 'top-right',
          });
          refreshAccessToken();
        }
        setLoading(false);
      } finally {
        setLoading(false);
      }

      return;
    } else {
      setShowModal(true);
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = async (values) => {
    if (isShopsClose) {
      setIsModalOpen(true);
      return;
    }
    if (value === null) {
      setMapError(true);
      return;
    }
    if (!values.phone) {
      return;
    }
    await handleCheckoutClick(values.phone);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          style={{ fontSize: '13px', color: '#808080', marginBottom: '10px' }}
        >
          Search Address
        </label>
        <div
          style={{ fontSize: '13px', color: '#808080', marginBottom: '5px' }}
        ></div>
        <div>
          <GooglePlacesAutocomplete
            apiKey='AIzaSyBrdpKCFrR1oMxYds0rkd80BWkhzREXmSY'
            selectProps={{
              value,
              onChange: setValue,
              placeholder: 'Search address',
              styles: {
                control: (provided) => ({
                  ...provided,
                  border: mapError ? '1px solid red' : '1px solid initial',
                  fontSize: '11px',
                }),
                input: (provided) => ({
                  ...provided,
                  width: '200px !important',
                  fontSize: '11px',
                }),
                option: (provided) => ({
                  ...provided,
                }),
                singleValue: (provided) => ({
                  ...provided,
                }),
              },
            }}
          />
          {mapError && (
            <p style={{ color: 'red', fontSize: '9px' }}>
              please enter your delivery address.
            </p>
          )}
        </div>
        <div
          style={{ fontSize: '13px', color: '#808080', marginBottom: '15px' }}
        ></div>
        <Controller
          name='phone'
          control={control}
          rules={{
            required: 'Phone number is required',
            validate: {
              validPhoneNumber: (value) => {
                return /^[0-9]{11}$/.test(value);
              },
            },
          }}
          render={({ field }) => (
            <InputWithIcon
              icon={Mobile}
              label='Phone Number'
              type='text'
              placeholder='Enter your phone number'
              rules={{
                required: 'Phone Number is required',
              }}
              {...field}
              hasError={errors.phone ? true : false}
              errorMessage={errors.phone && errors.phone.message}
            />
          )}
        />
        <div
          style={{ fontSize: '13px', color: '#808080', marginBottom: '15px' }}
        ></div>
        <RoundedButton
          type='submit'
          backgroundColor='#0E5D37'
          onClick={onSubmit}
          spaceBottom='10px'
          loading={isLoading}
        >
          Proceed to checkout
        </RoundedButton>
      </form>
      {showModal && (
        <AuthModal onClose={() => setShowModal(false)}>
          <Title>Please sign in or sign up to proceed.</Title>
          <RoundedButton
            backgroundColor='#0E5D37'
            onClick={() => navigate('/login?ref=cart')}
            spaceBottom='10px'
          >
            Sign In
          </RoundedButton>
          <RoundedButton
            backgroundColor='#F06D06'
            onClick={() => navigate('/register?ref=cart')}
            spaceTop='10px'
            spaceBottom='10px'
          >
            Sign Up
          </RoundedButton>
        </AuthModal>
      )}
      {isModalOpen && (
        <AuthModal onClose={() => setIsModalOpen(false)}>
          <Title style={{ fontSize: 'large', fontWeight: 'bolder' }}>
            We are currently closed
          </Title>
          <p>
            Our shop is closed for the day. We will resume our regular operating
            hours tomorrow at 10am until 5pm.
          </p>
        </AuthModal>
      )}
    </>
  );
};

export default BillingAddress;
