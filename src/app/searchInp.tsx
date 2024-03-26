import React, { useState } from 'react';
import styled from 'styled-components';
import useProductStore from './productStore';

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 400px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 300000;
`;

const SearchResultItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [filterText, setFilterText] = useState("");

  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const searchProducts = useProductStore((state) => state.searchProducts);
  const searchTerm = useProductStore((state) => state.searchTerm);
  const productsSearched = useProductStore((state) => state.productsSearched);

//   const handleSearchChange = (e) => {
//     const newSearchTerm = e.target.value;
//     setQuery(newSearchTerm);

//     // Debounce the search action
//     const delay = setTimeout(() => {
//       searchProducts();
//     }, 300);

//     return () => clearTimeout(delay);
//   };

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setFilterText(newSearchTerm);
    // Debounce the search action
    const delay = setTimeout(() => {
      searchProducts();
    }, 300);

    return () => clearTimeout(delay);
  };
  const handleItemClick = (item) => {
    // Do something when an item is clicked
    console.log(item);
  };

  console.log('====================================');
  console.log(searchTerm,'searchTerm');
  console.log('====================================');

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <SearchResults>
          {productsSearched?.map((result, index) => (
            <SearchResultItem key={index} onClick={() => handleItemClick(result)}>
              {result?.name}
            </SearchResultItem>
          ))}
        </SearchResults>
      )}
    </SearchContainer>
  );
};

export default Search;
