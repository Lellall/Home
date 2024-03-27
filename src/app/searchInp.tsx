import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import { BaseUrl } from '../utils/config';

const SearchComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
          label: option.name
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

  const debouncedFetchOptions = debounce(fetchOptions, 250);

  return (
    <div  style={{ minWidth: '300px', margin:'0 auto' }}>

      <AsyncSelect
       
        value={selectedOption}
        onChange={setSelectedOption}
        loadOptions={debouncedFetchOptions}
        placeholder="Search for a product..."
        isClearable
        isSearchable
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchComponent;
