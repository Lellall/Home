// CategoriesList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border-right: 0.2px solid #ccc;
  min-height: 400px;
`;

const Category = styled.div`
  // border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;



const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
console.log(categories,'categories');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.dev.lellall.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
        <h3>Categories</h3>
      {categories.map((category, index) => (
        <Category key={category?.id}>{category?.name}</Category>
      ))}
    </Container>
  );
};

export default CategoriesList;
