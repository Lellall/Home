import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import useProductStore from './productStore';

// Styled components for styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Label = styled.label`
  font-size: 11px;
  margin-bottom: 5px;
`;

const StyledSelect = styled(Select)`
  width: 200px;
  font-size: 11px;
`;

const PriceInput = styled.input`
  padding: 12px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  font-size: 11px;
  width: 100px;
`;


const SubmitButton = styled.button`
  background-color: ${props => (props.disabled ? '#ccc' : '#007bff')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 12px 20px;
  margin-top: 17px;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 11px;
`;

// Example component
const EditForm = ({ product, fetchProducts, current }) => {
  const [selectedOption, setSelectedOption] = useState(
    product?.available ? { value: true, label: 'Available' } : { value: false, label: 'Unavailable' }
  );
  const [price, setPrice] = useState(product?.price);

  // Options for the select component 
  const options = [
    { value: true, label: 'Available' },
    { value: false, label: 'Unavailable' },
  ];

  // Function to handle select change
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  // Function to handle price input change
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const isLoading = useProductStore((state) => state.isLoading);
  const updateProduct = useProductStore((state) => state.updateProduct);

  const handleSubmit = async () => {
    await updateProduct({ available: selectedOption.value, price, id: product.id });
    await fetchProducts(current)
  };

  return (
    <Container>
      <RowContainer>
        <ColumnContainer>
          <Label>Status:</Label>
          <StyledSelect
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
          />
        </ColumnContainer>
        <ColumnContainer>
          <Label>Price:</Label>
          <PriceInput
            type="number"
            min="0"
            value={price}
            onChange={handlePriceChange}
            placeholder="Price"
          />
        </ColumnContainer>
        <ColumnContainer>

          <SubmitButton disabled={isLoading} onClick={handleSubmit}>Update</SubmitButton>
        </ColumnContainer>
      </RowContainer>
    </Container>
  );
};

export default EditForm;
