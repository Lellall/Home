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
import QuantityCounter from "../quantity-counter/quantity-counter.component";
import { useResponsiveValue } from "../../../../lib/use-responsive-value";

const SingleProduct = ({ product }) => {
  const [showQuanity, setShowQuanity] = useState(false);
  const isMobile = useResponsiveValue({
    sm: true,
    md: false,
  });
  return (
    <MainContainer >
      <ProductContainer className={showQuanity ? "quantity-clicked" : ""}>
        <Product stretch={showQuanity ? true : false}>
          <div className="details">
            <ProductImage BG={product?.image}>
              <div>
                <img src="/assets/fav.svg" />
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
          {isMobile ? (
            <div className="cart-container-mobile">
              <div
                className={showQuanity ? "cart-small" : "cart"}
                onClick={() => setShowQuanity(true)}
              >
                <img src="/assets/cart.svg" alt="cart" />
              </div>
              {showQuanity && <QuantityCounter />}
            </div>
          ) : (
            <>
              {!showQuanity ? (
                <div
                  className="cart-container"
                  onClick={() => setShowQuanity(true)}
                >
                  <p>Add To Cart</p>
                  <img src="/assets/cart.svg" alt="cart" className="cart" />
                </div>
              ) : (
                <QuantityCounter />
              )}
            </>
          )}
        </Product>
      </ProductContainer>
   </MainContainer>
  );
};

export default SingleProduct;
