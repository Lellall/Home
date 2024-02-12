import React, { useState } from "react";
import styled from "styled-components";
import useProductStore from "../../../../app/productStore";
import { ViewportWidth } from "../../../../utils/enums";
import { useNavigate } from "react-router-dom";

const SearchInp = styled.input`
  // width: 97.5%;
  height: 30px;
  display: flex;
  padding: 7px 12px 7px 20px;
  outline: none;
  border-radius: 4px;
  background: #f5f5f5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  &::placeholder {
    color: #ccc;
    // font-style: italic;
  }

  position: relative;
  @media (max-width: ${ViewportWidth.sm}px) {
    width: 90% !important;
    // padding: 10px 16px !important;
  }
`;

const SearchableListContainer = styled.div`
  width: 400px;
  margin-top: 20px;
  position: absolute;
  top: 10px;
  // min-height: 400px;
  // backg
  left: 30%;
  z-index: 10000000;
  background: #fff;
`;

const ListItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  cursor: pointer;
  // width: 100%;
  background: #000;
  color: #fff !important;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchableList = ({ categories }) => {
  const [filterText, setFilterText] = useState("");
  const isInputFocused = filterText.length > 0;
  const filteredCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const searchProducts = useProductStore((state) => state.searchProducts);
  const searchTerm = useProductStore((state) => state.searchTerm);
  const productsSearched = useProductStore((state) => state.productsSearched);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  console.log(productsSearched,'productsSearched');
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
  const navigate = useNavigate()

  return (
    <SearchableListContainer>
      <SearchInp
        type="text"
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div style={{background:'#000', width:'100%'}}>

      {isInputFocused &&
        productsSearched.map((product) => <ListItem   onClick={() => navigate(`product/${product?.id}`)}>
          <div style={{color:"#fff"}}>{product?.name}</div>
          <div style={{color:"#fff"}}>NGN{product?.price}</div>
        </ListItem>)}
      </div>
    </SearchableListContainer>
  );
};

export default SearchableList;
