import React, { useEffect, useState } from "react";
import {
  Container,
  LeftColumn,
  RightColumn,
  LeftColumnImage,
  ProductDescription,
  ProductDescriptionSpan,
  ProductDescriptionH1,
  ProductDescriptionP,
  CounterContainer,
  CircleButton,
  CountDisplay,
  CableChoose,
  CableChooseButton,
  CableConfig,
  CableConfigA,
  ProductPrice,
  ProductPriceSpan,
  CartButton,
} from "./product";
import { Footer, Navbar } from "../ui";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../utils/config";
import axios from "axios";
import useShoppingCart from "../../app/useShoppingCart";

const Product = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [localProduct, setLocalProduct] = useState(null);

  const foundItem = useShoppingCart
        .getState()
        .cart.find((item) => item?.id === localProduct?.id)
  const {
    addToCart,
    removeFromCart,
    isProductInCart,
    cart,
    increaseQuantity,
    decreaseQuantity,
  } = useShoppingCart();

  useEffect(() => {
    axios
      .get(`${BaseUrl}/products/${id}`)
      .then((response) => {
        setLocalProduct(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, [id]);

  console.log(foundItem, "foundItem");

  const handleToggleCart = () => {
    if (isProductInCart(localProduct.id)) {
      removeFromCart(localProduct.id);
      console.log("Item removed from cart:", localProduct.name);
    } else {
      addToCart(localProduct);
      console.log("Item added to cart:", localProduct.name);
    }
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(localProduct.id);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(localProduct.id);
  };

  console.log(localProduct?.qnty, "eeee");
  return (
    <>
      <Navbar />
      <Container className="container">
        {/* Left Column / Headphones Image */}
        <LeftColumn>
          <LeftColumnImage
            data-image="red"
            className="active"
            src={localProduct?.imageUrl}
            alt=""
          />
        </LeftColumn>

        {/* Right Column */}
        <RightColumn>
          {/* Product Description */}
          <ProductDescription>
            <ProductDescriptionSpan>
              {localProduct?.category?.name}
            </ProductDescriptionSpan>
            <ProductDescriptionH1>{localProduct?.name}</ProductDescriptionH1>
            <ProductDescriptionP>
              {localProduct?.description}
            </ProductDescriptionP>
          </ProductDescription>

          {/* Product Configuration */}
          <div className="product-configuration">
            {isProductInCart(localProduct?.id) && (
              <CableConfig>
                <CounterContainer>
                  <span>Quantity:</span>
                  <CircleButton
                    style={{ background: "tomato" }}
                    disabled={foundItem?.qnty === 0}
                    onClick={handleDecreaseQuantity}
                  >
                    -
                  </CircleButton>
                  <CountDisplay>{Number(foundItem?.qnty)}</CountDisplay>

                  <CircleButton
                    style={{ background: "green" }}
                    onClick={handleIncreaseQuantity}
                  >
                    +
                  </CircleButton>
                </CounterContainer>
                <CableConfigA href="#">
                  How to configure your headphones
                </CableConfigA>
              </CableConfig>
            )}
          </div>
          <div className="product-configuration">
            <CableConfigA href="#">
              <ProductPriceSpan>
                {localProduct?.currency} {localProduct?.price}
              </ProductPriceSpan>
            </CableConfigA>
          </div>
          <ProductPrice>
            <CartButton onClick={handleToggleCart} className="cart-btn">
              {isProductInCart(localProduct?.id)
                ? "Remove from Cart"
                : "Add to Cart"}
            </CartButton>
            <CartButton
              style={{ background: "orange" }}
              href="#"
              className="cart-btn"
            >
              Buy Now
            </CartButton>
            <ProductPriceSpan>
              {localProduct?.currency} {localProduct?.price}
            </ProductPriceSpan>
          </ProductPrice>
        </RightColumn>
      </Container>
      <div style={{ marginTop: "100px" }}></div>
      <Footer />
    </>
  );
};

export default Product;
