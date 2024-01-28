import React, { useState } from "react";
import styled from "styled-components";
import useProductStore from "../../../../app/productStore";
import { ViewportWidth } from "../../../../utils/enums";

const SearchInp = styled.input`
  width: 80%;
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
  width: 40%;
  margin-top: 20px;
`;

const ListItem = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SearchableList = ({ categories }) => {
  const [filterText, setFilterText] = useState("");

  const filteredCategories = categories?.filter((category) =>
    category.name.toLowerCase().includes(filterText.toLowerCase())
  );
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const searchProducts = useProductStore((state) => state.searchProducts);
  const searchTerm = useProductStore((state) => state.searchTerm);
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Debounce the search action
    const delay = setTimeout(() => {
      searchProducts();
    }, 300);

    return () => clearTimeout(delay);
  };

  return (
    <SearchableListContainer>
      <SearchInp
        type="text"
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {[]?.map((category) => (
        <ListItem key={category.productId}>
          {category.name} - Quantity left: {category.quantity}
        </ListItem>
      ))}
    </SearchableListContainer>
  );
};

export default SearchableList;
