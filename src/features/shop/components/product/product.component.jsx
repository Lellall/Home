/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
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
import cartContext from '../../../../AppContext';
import { ACTION_TYPES } from '../../../../reducer/reducer';
import { useCounter } from '../../../../lib/use-quantity-counter';

const SingleProduct = ({ product }) => {
  const [showQuanity, setShowQuanity] = useState(false);
  const { state, dispatch } = useContext(cartContext);
  const isMobile = useResponsiveValue({
    sm: true,
    md: false,
  });

  const { value, increment, decrement } = useCounter(1)

  const addToCart = (item) => {
    const { name, price, id } = item;
    for (let i = 0; i < state.length; i++) {
      const element = state[i];
      if (element.id === item.id) {
        element.quantity++;
        alert(`${name} has already been added to your cart.`)
        return;
      }
    }
    const cartItem = {
      id,
      name,
      price,
      quantity: value,
    };
    dispatch({ type: ACTION_TYPES.ADD, payload: cartItem });
    alert(`Success, you have added ${name} to your cart.`)
  };

  return (
    <MainContainer >
      <ProductContainer className={showQuanity ? "quantity-clicked" : ""}>
        <Product stretch={showQuanity ? true : false}>
          <div className="details">
            <ProductImage BG={product?.imageUrl}>
              <div>
                <img src="/assets/fav.svg" />
              </div>
            </ProductImage>
            <div className="container">
              <div className="name-category">
                <ProductName>{product?.name}</ProductName>
                <ProductCategory>{product?.category?.name}</ProductCategory>
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
                  onClick={() => {
                    setShowQuanity(true)
                    addToCart(product)
                  }}
                >
                  <p>Add To Cart</p>
                  <img src="/assets/cart.svg" alt="cart" className="cart" />
                </div>
              ) : (
                <QuantityCounter value={value} increment={() => {
                  increment()
                  addToCart(product)
                }} decrement={decrement}/>
              )}
            </>
          )}
        </Product>
      </ProductContainer>
   </MainContainer>
  );
};

export default SingleProduct;
