import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchableList from '../features/ui/base/navbar/searchble';
import { useNavigate } from 'react-router-dom';
import { QuantityContainer } from '../features/ui/base/navbar/navbar.styles';
import useShoppingCart from './useShoppingCart';
import SearchComponent from './searchInp';
import useAuth from './useAuth';
import { getItemFromLocalForage } from '../utils/getItem';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    // flex-direction: column;
    padding: 10px;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 8px;
  margin: 0 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  max-width: 300px;
  font-size: 14px;

  @media (max-width: 768px) {
    margin: 10px 0;
    width: calc(100% - 20px);
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style-type: none;

  margin: 0;
  padding: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  align-items: right;
  @media (max-width: 768px) {
    flex-direction: column;
    // align-items: stretch;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = styled.li`
  margin-left: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { cart } = useShoppingCart();
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

  return (
    <NavbarContainer>
      <Logo onClick={() => navigate('/')} src="/assets/lellall-colored.svg" alt="Logo" />
      <SearchComponent />
      <div>
        <MenuButton onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
        </MenuButton>
      </div>
      <div>
        <MenuList isOpen={isOpen}>
          <MenuItem>
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
          </MenuItem>
          {user === null && (
            <>
              <MenuItem onClick={() => navigate('/login')}>Sign In</MenuItem>
            </>
          )}
          <MenuItem onClick={() => navigate('/privacy-policy')}>Privacy Policy</MenuItem>
          {user !== null && (
            <>
              <MenuItem onClick={() => logout()}>Logout</MenuItem>
            </>
          )}
        </MenuList>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
