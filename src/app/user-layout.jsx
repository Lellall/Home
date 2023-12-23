import { Outlet, NavLink } from "react-router-dom";
import {
  ProfileCircle,
  BookSaved,
  Notification,
  Heart,
  TicketDiscount,
  Clock,
} from "iconsax-react";
import styled from "styled-components";
import { Box, Container } from "@mui/material";

import { Footer, Navbar } from "../features/ui";
import { appPaths } from "./app-paths";
import { ViewportWidth } from "../utils/enums";
import { useResponsiveValue } from "../lib/use-responsive-value";

const MainContainer = styled(Container)`
  display: flex !important;
  align-items: flex-start !important;
  padding: 40px 65px 200px !important;
  gap: 30px !important;
  background: url("/assets/background.svg") !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-color: lightgray !important;
  min-width: 100% !important;
  max-width: 1431px !important;

  @media (max-width: ${ViewportWidth.md}px) {
    max-width: 1024px !important;
    padding: 28.623px 38px 120px !important;
    gap: 20px !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    padding: 0 !important;
  }
`;

const NavContainer = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  align-items: flex-start !important;
  border-radius: 8px !important;
  background: #fcfcfc !important;
  box-shadow: 0px 10px 20px 0px rgba(32, 56, 85, 0.15) !important;
  box-sizing: border-box !important;
  width: 22% !important;

  p {
    margin: 0;
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;
    align-self: stretch;
  }

  .deactivate {
    display: flex;
    padding: 15px 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;

    button {
      display: flex;
      padding: 8px 0px;
      width: 100% !important;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 30px;
      border: 1px solid #e41749;
      color: #e41749;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0.3px;
      background: #fff;
      font-family: Open Sans;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    width: 25% !important;

    .deactivate {
      padding: 10.734px 11.449px;
      gap: 7.156px;

      button {
        padding: 6px 0px;
        gap: 7.156px;
        border-radius: 21.468px;
        font-size: 10px;
        line-height: 17.174px;
        letter-spacing: 0.215px;
      }
    }
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    display: none !important;
  }
`;

const StyledMenuItem = styled(NavLink)`
  display: flex;
  padding: 15px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  cursor: pointer;
  text-decoration: none;
  color: #2f313f;

  &.active {
    background: #eafef1;
    color: #00a661;
  }

  .main {
    display: flex;
    align-items: center;
    gap: 8px;
    align-self: stretch;

    p {
      font-family: Open Sans;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      font-feature-settings: "clig" off, "liga" off;
    }
  }

  @media (max-width: ${ViewportWidth.md}px) {
    padding: 10.734px 11.449px !important;
    gap: 5.725px !important;

    main {
      gap: 5.725px !important;

      p {
        font-size: 12px;
        line-height: 17.174px;
      }
    }
  }
`;
StyledMenuItem.defaultProps = {
  className: ({ isActive }) => (isActive ? "active" : ""),
};

const ContentContainer = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 20px !important;
  flex: 1 0 0 !important;
  border-radius: 8px !important;
  background: #fcfcfc !important;
  box-shadow: 0px 10px 20px 0px rgba(32, 56, 85, 0.15) !important;
  
  p {
    margin: 0;
  }

  .mobile-nav {
    padding-top: 10px !important;
    text-align: center !important;
    width: 100% !important;
  }

  @media (max-width: ${ViewportWidth.sm}px) {
    width: 100% !important;
  }
`;

const MobileNav = styled(NavLink)`
  color: #2f313f !important;
  font-feature-settings: "clig" off, "liga" off !important;
  font-family: Raleway !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 22px;
  display: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center !important;

  &.active {
    display: block;
  }
`;
MobileNav.defaultProps = {
  className: ({ isActive }) => (isActive ? "active" : ""),
};

const UserLayout = () => {
  const navItems = [
    {
      id: 1,
      icon: <ProfileCircle size="20" />,
      text: "Profile",
      url: appPaths.profile,
    },
    {
      id: 2,
      icon: <BookSaved size="20" />,
      text: "My Orders",
      url: appPaths.myOrders,
    },
    {
      id: 3,
      icon: <Notification size="20" />,
      text: "Notification",
      url: appPaths.notification,
    },
    {
      id: 4,
      icon: <Heart size="20" />,
      text: "Favorites",
      url: appPaths.favorites,
    },
    {
      id: 5,
      icon: <TicketDiscount size="20" />,
      text: "Discount",
      url: appPaths.discount,
    },
    {
      id: 6,
      icon: <Clock size="20" />,
      text: "Recently viewed",
      url: appPaths.recentlyViewed,
    },
  ];

  const isMobile = useResponsiveValue({
    sm: true,
    md: false,
  });
  return (
    <>
      <Navbar />
      <MainContainer>
        <NavContainer>
          <div className="nav-items">
            {navItems.map((item) => (
              <StyledMenuItem key={item.id} to={item.url} end>
                <div className="main">
                  {item.icon} <p>{item.text}</p>
                </div>
              </StyledMenuItem>
            ))}
          </div>
          <div className="deactivate">
            <button>Deactivate Account</button>
          </div>
        </NavContainer>
        <ContentContainer>
          {isMobile && (
            <div className='mobile-nav'>
              {navItems.map((item) => (
                <MobileNav key={item.id} to={item.url} end>
                  <p>{item.text}</p>
                </MobileNav>
              ))}
            </div>
          )}
          <Outlet />
        </ContentContainer>
      </MainContainer>
      <Footer show={false} />
    </>
  );
};

export default UserLayout;
