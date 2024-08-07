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
  BackButtonContainer,
} from "./product";
import { Footer } from "../ui";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../../utils/config";
import axios from "axios";
import useShoppingCart from "../../app/useShoppingCart";
import { formatCurrency } from "../../utils/currencyFormat";
import Navbar from "../../app/Nav";
import { ArrowLeft } from "iconsax-react";
import ImageGallery from "react-image-gallery";

const Product = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [localProduct, setLocalProduct] = useState(null);
  const navigate = useNavigate();

  const {
    addToCart,
    removeFromCart,
    isProductInCart,
    cart,
    increaseQuantity,
    decreaseQuantity,
  } = useShoppingCart();
  const foundItem = cart.find((item) => item?.id === id);
  console.log("====================================");
  console.log(foundItem);
  console.log("====================================");
  const buyNow = () => {
    if (exists) {
      navigate("/cart");
      return;
    }
    addToCart(localProduct);
    navigate("/cart");
  };

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
  function isProductIdExist(id, cart) {
    for (const product of cart) {
      if (product.id === id) {
        return true; // Found a match
      }
    }
    return false; // No match found
  }
  const exists = isProductIdExist(id, cart);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <Navbar />

      <>
        <BackButtonContainer>
          <h3 onClick={() => navigate("/")}>
            <ArrowLeft size="32" />
          </h3>
        </BackButtonContainer>
        <Container style={{ margin: "1rem auto" }} className="container">
          {/* Left Column / Headphones Image */}
          <LeftColumn>
            <LeftColumnImage
              data-image="red"
              className="active"
              src={localProduct?.imageUrl}
              alt=""
            />
            {/* <ImageGallery items={images} /> */}
          </LeftColumn>

          {/* Right Column */}
          <RightColumn>
            {/* Product Description */}
            <ProductDescription>
              <ProductDescriptionSpan>
                {localProduct?.category?.name}
              </ProductDescriptionSpan>

              <ProductDescriptionH1>{localProduct?.name}</ProductDescriptionH1>
              <ProductPriceSpan>
                {formatCurrency(localProduct?.price)}
              </ProductPriceSpan>
              <ProductDescriptionP>
                {localProduct?.description}
              </ProductDescriptionP>
            </ProductDescription>

            {/* Product Configuration */}
            <div className="product-configuration">
              {exists && (
                <CableConfig>
                  <CounterContainer style={{ paddingBottom: "20px" }}>
                    <span>Quantity:</span>
                    <CircleButton
                      style={{ background: "tomato" }}
                      disabled={foundItem?.qnty === 0}
                      onClick={() => decreaseQuantity(id)}
                    >
                      -
                    </CircleButton>
                    <CountDisplay>{Number(foundItem?.qnty)}</CountDisplay>

                    <CircleButton
                      style={{ background: "green" }}
                      onClick={() => increaseQuantity(id)}
                    >
                      +
                    </CircleButton>
                  </CounterContainer>
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
              {exists && (
                <CartButton
                  onClick={() => removeFromCart(id)}
                  className="cart-btn"
                >
                  Remove from Cart
                </CartButton>
              )}
              {!exists && (
                <CartButton
                  onClick={() => addToCart(localProduct)}
                  className="cart-btn"
                >
                  Add to Cart
                </CartButton>
              )}

              <CartButton
                style={{ background: "orange", cursor: "pointer" }}
                href="#"
                className="cart-btn"
                onClick={buyNow}
              >
                Buy Now
              </CartButton>
            </ProductPrice>
          </RightColumn>
        </Container>
      </>

      <div style={{ marginTop: "5rem" }}></div>
      <Footer style={{ marginTop: "50rem" }} />
    </>
  );
};

export default Product;
