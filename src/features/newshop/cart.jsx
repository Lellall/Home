// CartPage.js
import React, { useState } from "react";
import styled from "styled-components";
import useShoppingCart from "../../app/useShoppingCart";
import {
  CableConfig,
  CartButton,
  CircleButton,
  CountDisplay,
  CounterContainer,
} from "./product";
import { Navbar } from "../ui";
import { AddCircle, MinusCirlce, Trash } from "iconsax-react";
import { ViewportWidth } from "../../utils/enums";
import useAuth from "../../app/useAuth";
import AuthModal from "./authModal";
import RoundedButton from "./RoundedButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useOrderStore from "../../app/orderStore";

const CartContainer = styled.div`
  //   max-width: 600px;
  margin: 0 70px;
  padding: 20px;
  font-family: open sans;
  @media (max-width: ${ViewportWidth.sm}px) {
    // float: center;
    width: 100%;
    margin: 0 10px;
    width: 80%;
  }
`;

const CartTable = styled.table`
  width: 100%;
  //   border-collapse: collapse;
  //   margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
  thead {
    height: 72px;
    padding: 24px 39px 24px 40px;
    border-radius: 4px;
    background: #fff;

    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    @media (max-width: ${ViewportWidth.sm}px) {
      // float: center;
      // width: 100%;
      display: none;
    }
  }

  padding-bottom: 100px;
`;

const TableHeader = styled.th`
  padding-left: 50px;
  text-align: left;
  //   background-color: #f2f2f2;
  //   padding
`;

const TableRow = styled.tr`
  margin: 100px;
  height: 150px;
  &:nth-child(even) {
    height: 52px;
    padding: 24px 39px 24px 40px;
    border-radius: 4px;
    background: #fff;

    /* Categogy/5 */
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
  }
`;

const TableCell = styled.td`
display flex;
font-size: 13px;
// background: red;
// flex: 1;
  padding: 10px;
  text-align: center;
  @media (max-width: ${ViewportWidth.sm}px) {
    // float: center;
    // width: 100%;
    // margin: 0 10px;
    // width: 80%;
    flex-direction:column;
    justify-content:center;

  }
 
  @media (max-width: ${ViewportWidth.sm}px) {
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
  }
`;

const TotalContainer = styled.div`
  float: right;
  width: 400px;
  border-radius: 4px;
  margin-bottom: 100px;
  @media (max-width: ${ViewportWidth.sm}px) {
    float: center;
    width: 100%;
  }
`;
const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 5px;
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 13px;
  // &:hover {
  //   background-color: #f0f0f0;
  // }
`;

const BtnCover = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: ${ViewportWidth.sm}px) {
    flex-direction: column;
  }
`;
const Title = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  color: #333;
`;

const CartPage = () => {
  const {
    cart: cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useShoppingCart();
  const { isAuthenticated, accessToken } = useAuth();
  const { addOrder } = useOrderStore();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qnty,
    0
  );
  const [showModal, setShowModal] = useState(false);

  const orderData = cartItems.map((item) => {
    return {
      productId: item?.productId,
      count: item?.qnty,
      productName: item?.name,
      price: item?.price * item?.qnty,
    };
    // console.log(item);
  });

  console.log(isAuthenticated, "isAuthenticated");

  const navigate = useNavigate();

  const handleCheckoutClick = async() => {
    if (isAuthenticated && orderData?.length > 0) {
      const data = {
        paymentItems: orderData,
        address: {
          streetName: "string",
          houseNumber: "string",
          estate: "string",
          poBox: "string"
        }
      };
  
      try {
        const response = await axios.post(
          "https://api.dev.lellall.com/orders",
          data
        );
  
        addOrder(response.data);
  
        // Optionally, reset form data
        // setOrderData({
        //   // Your order data fields here
        // });
      } catch (error) {
        console.error("Error creating order:", error);
      }
      return;
    } else {
      // Show the modal for sign-in or sign-up
      setShowModal(true);
    }
  };
  

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make POST request with Axios
      const response = await axios.post(
        "https://api.dev.lellall.com/orders",
        orderData,
        {
          headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN", // Replace with your actual access token
          },
        }
      );

      // Update Zustand store with the new order
      addOrder(response.data);

      // Optionally, reset form data
      // setOrderData({
      //   // Your order data fields here
      // });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleIncrement = (item) => {
    if (item.qnty < item.quantity) {
      increaseQuantity(item.productId)
    }
    // alert('out of stock')
    return;
  }

  return (
    <>
      <Navbar />
      <CartContainer>
        <h2>My Cart</h2>
        <CartTable>
          <thead>
            <tr>
              <TableHeader>Product</TableHeader>
              <TableHeader>Price</TableHeader>
              <TableHeader>Quantity</TableHeader>
              <TableHeader>Subtotal</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell>
                  <FlexContainer>
                    <div>
                      {" "}
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{
                          width: "50px",
                          // marginTop: "15px",
                          margin: "0 15px",
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          // width: "50px",
                          marginTop: "10px",
                          // marginLeft: "15px",
                        }}
                      >
                        {item.name}
                      </div>
                    </div>
                  </FlexContainer>
                </TableCell>
                <TableCell>
                  {item?.price} {item?.currency}
                </TableCell>
                <TableCell>
                  <div>
                    <CounterContainer>
                      {/* <span>Q</span> */}
                      <CircleButton
                        style={{ background: "tomato" }}
                        disabled={item?.qnty === 0}
                        onClick={() => decreaseQuantity(item?.productId)}
                      >
                        -
                      </CircleButton>
                      <CountDisplay>{Number(item?.qnty)}</CountDisplay>

                      <CircleButton
                        style={{ background: "green" }}
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </CircleButton>
                    </CounterContainer>
                  </div>
                </TableCell>
                <TableCell>
                  {(item?.price * item?.qnty).toFixed(2)} {item.currency}
                </TableCell>
                <TableCell>
                  <CircleButton
                    onClick={() => removeFromCart(item?.productId)}
                    style={{ background: "transparent" }}
                  >
                    <Trash size="22" color="red" />
                  </CircleButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </CartTable>
        <hr />
        <TotalContainer>
          <ListItem>
            <div>Subtotal:</div>
            <div>
              {" "}
              {subtotal?.toFixed(2)} {cartItems[0]?.currency}
            </div>
          </ListItem>
          <ListItem>
            <div>Shipping fee:</div>
            <div>
              {" "}
              {subtotal?.toFixed(2)} {cartItems[0]?.currency}
            </div>
          </ListItem>
          <ListItem>
            <div>Total:</div>
            <div>
              {" "}
              {subtotal?.toFixed(2)} {cartItems[0]?.currency}
            </div>
          </ListItem>
          <BtnCover>
            <ModCartButton onClick={handleCheckoutClick} className="cart-btn">
              Proceed to checkout
            </ModCartButton>
          </BtnCover>
        </TotalContainer>
      </CartContainer>
      {showModal && (
        <AuthModal onClose={closeModal}>
          <Title>Please sign in or sign up to proceed.</Title>
          <RoundedButton
            backgroundColor="#0E5D37"
            onClick={() => navigate("/login?ref=cart")}
            // loading={loading}
            // spaceTop="10px"
            spaceBottom="10px"
          >
            Sign In
          </RoundedButton>
          <RoundedButton
            backgroundColor="#F06D06"
            onClick={() => navigate("/register?ref=cart")}
            // loading={loading}
            spaceTop="10px"
            spaceBottom="10px"
          >
            Sign Up
          </RoundedButton>
        </AuthModal>
      )}
    </>
  );
};

export default CartPage;

const ModCartButton = styled(CartButton)`
  background: #f06d06;
  width: 40%;
  text-align: center;
  margin-top: 20px;
  @media (max-width: ${ViewportWidth.sm}px) {
    // float: center;
    width: 100%;
    // margin: 0 10px;
    // width: 80%;
  }
`;
