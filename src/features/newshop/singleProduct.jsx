// SingleProductPage.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
//   flex-wrap: wrap;
flex: 1;
  padding: 20px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
  max-width: 80%;
  height: auto;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  max-width: 50px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const ProductDetails = styled.div`
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

const SingleProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [randomImages, setRandomImages] = useState([
    "https://source.unsplash.com/400x300/?cooking",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?kitchen",
    "https://source.unsplash.com/400x300/?vegetables",
    "https://source.unsplash.com/400x300/?cooking",
        "https://source.unsplash.com/400x300/?vegetables",
        "https://source.unsplash.com/400x300/?vegetables",
        "https://source.unsplash.com/400x300/?kitchen",
        "https://source.unsplash.com/400x300/?vegetables",
        "https://source.unsplash.com/400x300/?kitchen",
        "https://source.unsplash.com/400x300/?vegetables",
    
  ]);
  const [selectedImage, setSelectedImage] = useState(randomImages[0]);

  useEffect(() => {
    fetchUnsplashImages();
  }, []);

  const fetchUnsplashImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=3&client_id=YOUR_UNSPLASH_API_KEY`
      );
      const data = await response.json();
      const imageUrls = data.map((image) => image.urls.regular);
      setRandomImages(imageUrls);
      setSelectedImage(imageUrls[0]);
    } catch (error) {
      console.error('Error fetching Unsplash images:', error);
    }
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} item(s) to cart`);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Proceeding to checkout');
  };

  const handleContinueShopping = () => {
    // Implement your continue shopping logic here
    console.log('Continuing shopping');
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <ProductContainer>
      <ProductInfo>
        <ProductImage src={selectedImage} alt="Product" />
        <ProductGallery>
          {randomImages.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
            />
          ))}
        </ProductGallery>
      </ProductInfo>
      <ProductDetails>
        <Title>Professional Product Title</Title>
        <Description>High-quality product description goes here.</Description>
        <Price>Price: $20.00</Price>
        <label htmlFor="quantity">Quantity:</label>
        <QuantityInput
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
        />
        <Button onClick={handleAddToCart}>Add to Cart</Button>
        <Button onClick={handleCheckout}>Checkout</Button>
        <Button onClick={handleContinueShopping}>Continue Shopping</Button>
      </ProductDetails>
    </ProductContainer>
  );
};

export default SingleProductPage;
