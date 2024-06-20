import { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../../utils/currencyFormat";
import { Bookmark } from "iconsax-react";

const CardWrapper = styled.div`
  position: relative;
  width: 300px;
  max-width: 300px;
  box-sizing: border-box;
  height: 400px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-bottom: 16px; /* Add margin for better spacing */
  //   margin: 30px;
  margin: 20px 10px;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1280px) {
    width: 90% !important;
    max-width: 90% !important;
    height: 300px;
    margin: 20px;
    margin-bottom: 16px;
  }
  @media (max-width: 1044px) {
    width: 90% !important;
    max-width: 90% !important;
    height: 400px;
    margin: 20px;
    margin-bottom: 16px;
  }
  @media (max-width: 768px) {
    width: 90% !important;
    max-width: 90% !important;
    margin: 20px;
    // margin-bottom: 16px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px; /* Adjust the height as needed */
  object-fit: cover;
  image-repeat: no-repeat; /* Corrected to no-repeat */
  @media (max-width: 1280px) {
    height: 220px;
  }
  @media (max-width: 1044px) {
    height: 270px;
  }
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

export const InnerCard = styled.div`
  position: absolute;
  padding: 20px;
  // border-radius: 0% 100% 100% 0% / 58% 0% 100% 88%;
  clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

  margin: 0;
  width: 30%;
  z-index: 1;
  button {
    // font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: #fff;
    cursor: pointer;
  }
  height: 20px;
  // border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
  // clip-path: polygon(0 0, 100% 0%, 75% 100%, 0 100%);
  background-color: #FF6F00;
  color: #fff;
  // background-color: #ffffffcc;
  h1 {
    color: #fff;

    /* Heading/48PX SemiBold */
    // font-family: Inter;
    z-index: 1;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 60px; /* 125% */
    letter-spacing: 1.92px;
  }
  // box-shadow: 20px 20px 60px orange, -20px -20px 60px purple;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    border-radius: 0;
    padding: 20px 10px;
    padding: 20px;
    height: 20px;
    // border-radius: 0% 100% 40% 60% / 100% 0% 100% 0%;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
    font-size: 13px;
  }
  @media only screen and (max-width: 500px) {
    // background: red;
    font-size: 13px;
    padding: 0 5 0px;
    margin: 0;
    width: 40%;
    height: 20px;
    padding: 10px;
    // text-align: center;
    /* padding-top: 10px; */
    box-shadow: none;
    border-radius: 0;
  }
`;

const Text = styled.div`
  fontsize: 16px;
  fontweight: bold;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    fontsize: 11px;
    fontweight: bold;
  }
`;

const Card = ({
  title,
  price,
  discount,
  imageUrl,
  onAddToWishlist,
  isShopClose,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    if (!addedToCart) {
      setCart((prevCart) => [
        ...prevCart,
        { quantity /* other item details */ },
      ]);
      setAddedToCart(true);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      setAddedToCart(false);

      // Remove item from cart when quantity becomes less than 1
      setCart((prevCart) => prevCart.filter((item) => item.quantity > 1));
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Additional function to remove item from cart
  const removeFromCart = () => {
    setCart((prevCart) => prevCart.filter((item) => item.quantity > 1));
    setAddedToCart(false);
  };

  return (
    <div>
      <CardWrapper className="card" onClick={onAddToWishlist}>
        {/* <InnerCard>
          <Text>Save up to 20%</Text>
        </InnerCard> */}
        <Image src={imageUrl} alt="Product Image" />
        <CardContent>
          <Discount style={{ color: isShopClose ? "#FF8A65" : "#0E5D37" }}>
            {isShopClose ? "close" : "open"}{" "}
          </Discount>
          <Title>{title}</Title>
          <div
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Price>{formatCurrency(price)}</Price>
            </div>
            <div
              style={{
                padding: "0 4px",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <Bookmark size="22" color="#FF8A65" />
              <WishlistIcon onClick={onAddToWishlist}></WishlistIcon>
            </div>
          </div>
        </CardContent>
      </CardWrapper>
    </div>
  );
};

export default Card;
