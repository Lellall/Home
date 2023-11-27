/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  MainContainer,
  ProductContainer,
  Product,
  ProductImage,
  ProductName,
  ProductCategory,
  ProductPrice,
  ProductDescription,
} from "./product.styles";
const SingleProduct = ({ product }) => {
  const [showQuanity, setShowQuanity] = useState(false);
  return (
    <MainContainer>
      <ProductContainer>
        <Product>
          <div className="details">
            <ProductImage BG={product?.image}>
              <div>
                <img src="assets/fav.svg" />
              </div>
            </ProductImage>
            <div className="container">
              <div className="name-category">
                <ProductName>{product?.name}</ProductName>
                <ProductCategory>{product?.category}</ProductCategory>
              </div>
              <div className="price-description">
                <ProductPrice>₦{product?.price}</ProductPrice>
                <ProductDescription>{product?.description}</ProductDescription>
              </div>
            </div>
          </div>
          <>
            {!showQuanity ? (
              <div
                className="cart-container"
                onClick={() => setShowQuanity(true)}
              >
                <p>Add To Cart</p>
                <img src="assets/cart.svg" alt="cart" className='cart'/>
              </div>
            ) : (
              <div className="quantity">
                <p>Qty</p>
              </div>
            )}
          </>
        </Product>
      </ProductContainer>
    </MainContainer>
  );
};

export default SingleProduct;

