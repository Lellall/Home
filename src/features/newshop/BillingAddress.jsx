import React, { useEffect, useState } from "react";
// import GooglePlacesAutocomplete from 'react-google-autocomplete';
import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import DistanceCalculator from "./DistanceCalculator";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import styled from "styled-components";
import useProductStore from "../../app/productStore";
import InputWithIcon from "../../components/inputs/input.component";
import { House2, LocationTick, Mobile, User } from "iconsax-react";
import { ViewportWidth } from "../../utils/enums";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  location: Yup.string().required("Location is required"),
});

const StyledInput = styled.div`
  max-width: 400px;
  z-index: 1;
  min-height: 50px;
  @media (max-width: ${ViewportWidth.sm}px) {
    width: 100%;
  }
`;

const BillingAddress = () => {
  const lat1 = 9.0698368;
  const lon1 = 7.464775700000001;
  const [customerPosition, setCustomerPosition] = useState("");
  const [value, setValue] = useState(null);
  const [formData, setFormData] = useState({
    landmark: "",
    house: "",
  });
  const {
    setFee,
    shppingFee,
    setAddressInfo,
    setPositionPoint,
    address: addd,
    setDistance,
    setPhone,
    consumerPhoneNumber: phone
  } = useProductStore();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
  console.log(formData, "addd");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("====================================");
  console.log(errors, "errorserrors");
  console.log("====================================");

  const onSubmit = (data) => {
    console.log(data, "here");
  };

  return (
    <StyledInput>
      {/* <h2>Billing Address</h2> */}
      <label htmlFor="Type your address" style={{ color: "#808080" }}>
        Type your address
      </label>
      <div style={{ marginBottom: "5px" }} />
      <GooglePlacesAutocomplete
      style={{borderColor:"red"}}
        required
        apiKey="AIzaSyBrdpKCFrR1oMxYds0rkd80BWkhzREXmSY"
        selectProps={{
          value,
          onChange: setValue,
          styles: {
            input: (provided) => ({
              ...provided,
              color: "blue",
              width: "200px !important",
            }),
            option: (provided) => ({
              ...provided,
              color: "blue",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "blue",
            }),
          },
        }}
        style={{ width: "300px" }}
      />
      {value === null && (
        <span style={{  color: "red", marginBottom:"20px" }}>
          address is required
        </span>
      )}
      <div style={{ marginTop: "10px" }}>
        <InputWithIcon
          icon={LocationTick}
          label="Landmark (Optional)"
          type="text"
          placeholder="Enter Landmark"

          // {...field}
          // hasError={errors.firstName ? true : false}
          // errorMessage={errors.firstName && errors.firstName.message}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <InputWithIcon
          icon={Mobile}
          label="Phone Number"
          type="text"
          placeholder="House No."
          name="landmark"
          // value={formData.landmark}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {phone === '' && (
        <span style={{  color: "red", marginBottom:"20px" }}>
          phone is required
        </span>
      )}
      {/* <Autocomplete
        apiKey="AIzaSyBrdpKCFrR1oMxYds0rkd80BWkhzREXmSY"
        onPlaceSelected={(place) => {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          console.log(lat, lng, "uuuuu");
        }}
        // onSelect={handlePlaceSelect}
      /> */}
      {/* Display extracted address information or use it for further processing */}
      <div>
        {/* <h1>Distance between two locations {customerPosition?.toFixed(2)}Km</h1> */}
        {/* <h1> shipping fee: NGN{Number(customerPosition * 200).toFixed(2)}</h1> */}
        {/* <DistanceCalculator
          placeId1="ChIJO8z05G4MThAR8dwgh1dpZyU"
          placeId2="ChIJGxxbBBMLThARA-kiVbn4pQ8"
        /> */}
      </div>
      {/* <MyComponent /> */}
      {/* Add other form fields like apartment number, etc. */}
      {/* <button>Submit</button> */}
    </StyledInput>
  );
};

export default BillingAddress;
