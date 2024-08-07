import React, { useContext, useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CgSearch } from "react-icons/cg";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { useResponsiveValue } from "../../../../lib/use-responsive-value";
import cartContext from "../../../../AppContext";
import {
  MainContainer,
  Wrapper,
  InputContainer,
  Input,
  Nav,
  ColContainer,
  StyledSelect,
  SubText,
  Profile,
  SubContainer,
  ShopNav,
  MobileNav,
  QuantityContainer,
} from "./navbar.styles";
import { getItemFromLocalForage } from "../../../../utils/getItem";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useShoppingCart from "../../../../app/useShoppingCart";
import useProductStore from "../../../../app/productStore";
import SearchableList from "./searchble";
import useAuthStore from "../../../../app/authStore";
import useAuth from "../../../../app/useAuth";
import SearchInp from './searchble'
import SearK from "../../../../app/searchInp";

const MenuList = styled.div`
  position: relative;
`;

const MenuListCover = styled.div`
  z-index: 100;
  position: absolute;
  top: 25px;
  right: -10px;
  width: 150px;
  // height: 150px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fcfcfc;
  box-shadow: 0px 20px 40px 0px rgba(32, 56, 85, 0.15);
`;

const ListMenu = styled.div`
border-bottom 1px solid #cecec;
font-size: 13px;
color: #333;
padding: 10px;
&:hover {
  transform: scale(1.1); /* Add the desired hover effect, e.g., scale up */
}

`;

const Main = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const {
    logout,

  } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedItem = await getItemFromLocalForage("user");
        setUser(storedItem);
      } catch (error) {
        console.error("Error retrieving item:", error);
      }
    };

    fetchData();
  }, []);
  const setSearchTerm = useProductStore((state) => state.setSearchTerm);
  const searchProducts = useProductStore((state) => state.searchProducts);
  const searchTerm = useProductStore((state) => state.searchTerm);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Debounce the search action
    const delay = setTimeout(() => {
      searchProducts();
    }, 300);

    return () => clearTimeout(delay);
  };
console.log('====================================');
console.log(user);
console.log('====================================');
  const active = false;
  // const { state } = useContext(cartContext);
  const data = ["Store", "Vendors", "Couriers"];
  const isMobile = useResponsiveValue({
    sm: true,
    md: false,
  });

  // const cartTotal = state.reduce((acc, curr) => acc + curr.quantity, 0);

  const { cart } = useShoppingCart();

  const navigate = useNavigate();

  const callNavigate = (path) => {
    navigate(path);
    setShow(false);
  };
  return (
    <>
      {isMobile ? (
        <Wrapper>
          <MobileNav>
            <img
              src="/assets/lellall-colored.svg"
              alt="Logo"
              className="logo"
              onClick={() => navigate("/")}
            />
            <Profile style={{
              marginRight: '2rem'
            }}>
            <div
                onClick={() => navigate("/cart")}
                style={{ position: "relative", height: "30px", padding: "5px" }}
              >
                <img
                  src="/assets/shopping-cart.svg"
                  alt="cart"
                  className="cart"
                />
                {
                  <QuantityContainer>
                    <p >{cart?.length}</p>
                  </QuantityContainer>
                }
              </div>
                {active ? (
                  <div className="active">
                    <RxAvatar />
                    <p>Hi Jane</p>
                  </div>
                ) : (
                  <div className="inactive">
                    <RxAvatar  onClick={() => setShow(!show)} className="icon" />
                    <MenuList>
                      <p  onClick={() => setShow(!show)}>
                        {/* {user !== null ? (
                          `${user?.firstName + " " + user?.lastName}`
                        ) : (
                          <></>
                        )} */}
                      </p>
                      {user !== null && show && (
                        <MenuListCover>
                          {/* <ListMenu
                            onClick={() => callNavigate("/account/my-orders")}
                          >
                            My Orders
                          </ListMenu> */}
                          {/* <ListMenu onClick={() => callNavigate("/account")}>
                            Account
                          </ListMenu> */}
                          {/* <ListMenu
                            onClick={() => callNavigate("/account/favorites")}
                          >
                            Favorites
                          </ListMenu> */}
                          {/* <ListMenu
                            onClick={() =>
                              callNavigate("/account/notification")
                            }
                          >
                            Notifications
                          </ListMenu> */}
                          <ListMenu onClick={() => logout()}>Logout</ListMenu>
                        </MenuListCover>
                      )}
                    </MenuList>
                  </div>
                )}
              </Profile>
          </MobileNav>
          <div className="input-container">
            <SearK
            />
          </div>
        </Wrapper>
      ) : (
        <Wrapper>
          <MainContainer>
            <img
              src="/assets/lellall-colored.svg"
              alt="Logo"
              className="logo"
              onClick={() => navigate("/")}
            />
             <SearK
            />
            <Nav>
              {/* <ColContainer>
                <SubText>Delivery to</SubText> 
                <StyledSelect name="location">
                  <option>Abuja</option>
                </StyledSelect>
              </ColContainer> */}
              <ColContainer >
                <SubText style={{cursor:"pointer"}} onClick={() => navigate('/privacy-policy')}>Privacy Policy</SubText>
              </ColContainer>
              <div
                onClick={() => navigate("/cart")}
                style={{ position: "relative", height: "30px", padding: "5px" }}
              >
                <img
                  src="/assets/shopping-cart.svg"
                  alt="cart"
                  className="cart"
                />
                {
                  <QuantityContainer>
                    <p >{cart?.length}</p>
                  </QuantityContainer>
                }
              </div>
              <Profile>
                {active ? (
                  <div className="active">
                    <RxAvatar />
                    <p>Hi Jane</p>
                  </div>
                ) : (
                  <div className="inactive">
                    <RxAvatar  onClick={() => setShow(!show)} className="icon" />
                    <MenuList>
                      <p  onClick={() => setShow(!show)}>
                        {user !== null ? (
                          `${user?.firstName + " " + user?.lastName}`
                        ) : (
                          <></>
                        )}
                      </p>
                      {user !== null && show && (
                        <MenuListCover>
                          {/* <ListMenu
                            onClick={() => callNavigate("/account/my-orders")}
                          >
                            My Orders
                          </ListMenu>
                          <ListMenu onClick={() => callNavigate("/account")}>
                            Account
                          </ListMenu>
                          <ListMenu
                            onClick={() => callNavigate("/account/favorites")}
                          >
                            Favorites
                          </ListMenu>
                          <ListMenu
                            onClick={() =>
                              callNavigate("/account/notification")
                            }
                          >
                            Notifications
                          </ListMenu> */}
                          <ListMenu  onClick={() => logout()}>Logout</ListMenu>
                        </MenuListCover>
                      )}
                    </MenuList>
                  </div>
                )}
              </Profile>
            </Nav>
          </MainContainer>
         
        </Wrapper>
      )}
    </>
  );
};

export default Main;
