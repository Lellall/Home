// CategoriesList.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Category = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const categories = [
  'Electronics',
  'Clothing',
  'Books',
  'Home & Furniture',
  'Sports & Outdoors',
  'Health & Beauty',
//   'Toys & Games',    
  'Automotive',
  'Jewelry',
  'Appliances',
//   'Office Supplies',
//   'Pet Supplies',
  'Grocery',
  'Music',
  'Movies',
  'Shoes',
  'Watches',
  'Tools & Home Improvement',
  'Software',
  'Fitness & Exercise',
];

const CategoriesList = () => {
  return (
    <Container>
        <h3>Categories</h3>
      {categories.map((category, index) => (
        <Category key={index}>{category}</Category>
      ))}
    </Container>
  );
};

export default CategoriesList;
