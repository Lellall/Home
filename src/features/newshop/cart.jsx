// CartPage.js
import React from "react";
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

const CartContainer = styled.div`
  //   max-width: 600px;
  margin: 0 70px;
  padding: 20px;
  font-family: open sans;
  @media (max-width: ${ViewportWidth.sm}px) {
    float: center;
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

const CartPage = () => {
  const {
    cart: cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useShoppingCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qnty,
    0
  );

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
                          marginRight: "15px",
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          // width: "50px",
                          marginTop: "10px",
                          // marginRight: "15px",
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
                      <span>Quantity:</span>
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
                        onClick={() => increaseQuantity(item?.productId)}
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
                    onClick={() => removeFromCart(item?.id)}
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
            <CartButton
              style={{ background: "#F06D06", width: '40%', textAlign:'center', marginTop:'20px' }}
              href="#"
              className="cart-btn"
            >
              Proceed to checkout
            </CartButton>
          </BtnCover>
        </TotalContainer>
      </CartContainer>
    </>
  );
};

export default CartPage;
