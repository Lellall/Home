import React, { useState } from "react";
import styled from "styled-components";
import useProductStore from "../../../../app/productStore";
import { ViewportWidth } from "../../../../utils/enums";
import { useNavigate } from "react-router-dom";

const SearchInp = styled.input`
  width: 94%;
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
  min-height: ${({ searchTerm }) => (searchTerm?.length > 0  ? '300px' : '0')};

  // backg
  left: 30%;
  z-index: 10000000;
  background: #fff;
  @media (max-width: 912px) {
   left: 22%;
   width: 40%;
  }
`;

const ListItem = styled.div`
  padding: 10px;
  // border: 1px solid #ddd;
  margin-bottom: 5px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  cursor: pointer;
  // width: 100%;
  // background: #000;
  color: #000;
  &:hover {
    // background-color: #f0f0f0;
  }
  @media (max-width: 912px) {
    font-size: 9px;
    display: block;
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
    <SearchableListContainer searchTerm={searchTerm}>
      <SearchInp
        type="text"
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div style={{background:'#fff', width:'100%'}}>

      {searchTerm?.length > 0 &&
        productsSearched?.map((product) => <ListItem   onClick={() => navigate(`product/${product?.id}`)}>
          <div >{product?.name}</div>
          <div >NGN{product?.price}</div>
        </ListItem>)}
      </div>
    </SearchableListContainer>
  );
};

export default SearchableList;
