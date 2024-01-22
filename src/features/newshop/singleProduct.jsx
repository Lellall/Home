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

const Product = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [localProduct, setLocalProduct] = useState(null);

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

  console.log(localProduct, "localProduct");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
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
            <CableConfig>
              <CounterContainer>
                <span>Quantity:</span>
                <CircleButton
                  style={{ background: "tomato" }}
                  disabled={count === 0}
                  onClick={handleDecrement}
                >
                  -
                </CircleButton>
                <CountDisplay>{count}</CountDisplay>
                <CircleButton
                  style={{ background: "green" }}
                  onClick={handleIncrement}
                >
                  +
                </CircleButton>
              </CounterContainer>
              <CableConfigA href="#">
                How to configure your headphones
              </CableConfigA>
            </CableConfig>
          </div>
          <div className="product-configuration">
          <CableConfigA href="#">
            <ProductPriceSpan>
              {localProduct?.currency} {localProduct?.price}
            </ProductPriceSpan>
          </CableConfigA>
          </div>
          <ProductPrice>
            <CartButton href="#" className="cart-btn">
              Add to cart
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
