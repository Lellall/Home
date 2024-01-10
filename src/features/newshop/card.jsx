// ReusableCard.js

import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: relative;
  width: 170px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-bottom: 16px; /* Add margin for better spacing */
  //   margin: 30px;
  margin: 20px 0px;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 180px;
    margin-left: 10px;
    margin-bottom: 16px; /* Adjust margin for better spacing on smaller screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 120px; /* Adjust the height as needed */
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 12px;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1em;
  color: #333;
`;

const Price = styled.div`
  color: #555;
  font-size: 13px;
  font-family: sans;
`;

const Discount = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  color: #d9534f;
  font-size: 12px;
  background: white;
  padding: 4px 9px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const WishlistIcon = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 18px;
  color: #337ab7;
  cursor: pointer;
  background: white;
  padding: 0 4px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AddToCartButton = styled.button`
  border: none;
  outline: none;
  padding: 4px 4px;
  color: white;
  background-color: #ffb000;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;
  margin: 5px 0;
  border-radius: 8px;
  width: 100%;

  &:hover {
    background-color: #333;
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 5px;
  margin: 0 4px;
  //   width: 70px;
`;

const QuantityButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Quantity = styled.span`
  font-size: 14px;
`;

const ReusableCard = ({
  title,
  price,
  discount,
  imageUrl,
  onAddToWishlist,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setAddedToCart(true);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      setAddedToCart(false);
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <CardWrapper className="card">
        <Image src={imageUrl} alt="Product Image" />
        <CardContent>
          {/* <WishlistIcon onClick={onAddToWishlist}>&#10084;</WishlistIcon> */}
          {/* <Discount>{discount}</Discount> */}
          <Discount>open</Discount>
          <Title>{title}</Title>
          <div style={{ display: "flex", flex: "1", justifyContent:"space-between" }}>
            <div>
              <Price>{price}</Price>
            </div>
            <div style={{background:'red', padding:"0 4px", borderRadius:'4px', color:'#fff', cursor:"pointer"}}>
            &#10084;
              <WishlistIcon onClick={onAddToWishlist}></WishlistIcon>
            </div>
          </div>
          {addedToCart ? (
            <QuantityContainer>
              <div onClick={handleDecrement}>-</div>
              <Quantity>{quantity}</Quantity>
              <QuantityButton onClick={handleIncrement}>+</QuantityButton>
            </QuantityContainer>
          ) : (
            <AddToCartButton onClick={handleAddToCart}>Add to card</AddToCartButton>
          )}
        </CardContent>
      </CardWrapper>
    </div>
  );
};

export default ReusableCard;
