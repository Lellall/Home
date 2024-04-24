import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import { BaseUrl } from '../utils/config';
import { formatCurrency } from '../utils/currencyFormat';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    if (selectedOption !== null) {
      navigate(`/product/${selectedOption.value}`)
    }
  }, [selectedOption])


  const fetchOptions = async (inputValue, callback) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${BaseUrl}/products?page=0&size=10&filter=${inputValue}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      if (data.data.length === 0) {
        callback([]); // Invoke the callback with an empty array
      } else {
        const options = data.data.map(option => ({
          value: option.id,
          label:
            <div style={{ display: 'flex', flex: 1, justifyContent: "space-between" }}>
              {/* ${option.name} - ${formatCurrency(option.price)} */}
              <div>{option.name}</div>
              <div>{formatCurrency(option.price)}</div>
            </div>
          // Display name and price side by side
        }));
        callback(options); // Invoke the callback with the fetched options
      }
    } catch (error) {
      console.error("Error fetching options:", error);
      callback([]); // Invoke the callback with an empty array in case of error
    } finally {
      setIsLoading(false);
    }
  };

  // const debouncedFetchOptions = debounce(fetchOptions, 250);

  const handleOptionClick = (option) => {
    // history.push(`/product/${option.value}`); // Navigate to '/product/:id' when option is clicked
  };

  // const fetchOptions = async (inputValue, callback) => {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(`${BaseUrl}/products?page=0&size=10&filter=${inputValue}`);
  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(`API request failed with status ${response.status}`);
  //     }

  //     if (data.data.length === 0) {
  //       callback([]); // Invoke the callback with an empty array
  //     } else {
  //       const options = data.data.map(option => ({
  //         value: option.id,
  //         label: option.name
  //       }));
  //       callback(options); // Invoke the callback with the fetched options
  //     }
  //   } catch (error) {
  //     console.error("Error fetching options:", error);
  //     callback([]); // Invoke the callback with an empty array in case of error
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const debouncedFetchOptions = debounce(fetchOptions, 250);

  return (
    <ResponsiveCard >

      <AsyncSelect

        value={selectedOption}
        onChange={setSelectedOption}
        loadOptions={debouncedFetchOptions}
        placeholder="Search for a product..."
        isClearable
        isSearchable
        isLoading={isLoading}
      />
    </ResponsiveCard>
  );
};

export default SearchComponent;

const ResponsiveCard = styled.div`
  width: 500px;
  margin: 0 auto ;
  @media only screen and (max-width: 767px) {
    width: 250px;
  }
`
