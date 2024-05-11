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
  CableConfig,
  CableConfigA,
  ProductPrice,
  ProductPriceSpan,
  CartButton,
  BackButtonContainer,
} from "../../features/newshop/product";
import { Footer } from "../../features/ui";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../../utils/config";
import axios from "axios";
import useShoppingCart from "../../app/useShoppingCart";
import { formatCurrency } from "../../utils/currencyFormat";
import Navbar from "../../app/Nav";
import { ArrowLeft } from "iconsax-react";
import ImageGallery from "react-image-gallery";

const SingleBundle = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [localProduct, setLocalProduct] = useState([]);
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
      .get(`${BaseUrl}/bundles/${id}`)
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

  const images = [...localProduct.images[0].map((img) => {
    return  {
        original: img,
        thumbnail: img,
      }
  })]
  console.log(images,'images');
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
          <LeftColumn>
          {localProduct?.length > 0 &&
            <ImageGallery items={images ?? []} />}
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

              <CartButton
                style={{ background: "orange", cursor: "pointer",width:"100%" }}
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

export default SingleBundle;
