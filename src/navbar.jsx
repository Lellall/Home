import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../assets/Logo.svg";
import { RoundButton } from "./App";
import styled from "styled-components";

const StyledAppBar = styled.div`
  z-index: 19999 !important;
  background-color: #fff;
  color: #333;
  padding: 15px 45px;
  margin: 0;
  @media (max-width: 912px) {
    padding: 15px 30px;
  }
`;

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <RoundButton outlined variant="contained">
          Sign up
        </RoundButton>
      </MenuItem>
    </Menu>
  );
  const Logo1 = styled.div`
    margin-left: 90px;
  `;

  return (
    <>
      <StyledAppBar
        style={{
          backgroundColor: "#fff",
          color: "#333",
          padding: "15px 45px",
          margin: 0,
        }}
      >
          <Logo1>
            <img src={Logo} alt="Logo" />
          </Logo1>
        <Toolbar>

          <Box sx={{ flexGrow: 1 }} />
          <Box alignItems="center" edge="end"></Box>
          <Box sx={{ flexGrow: 1, background: "red" }} />
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
              background: "red",
            }}
          >
            <MenuItem>
              <RoundButton outlined variant="contained">
                Download Our App
              </RoundButton>
              <RoundButton outlined variant="contained">
                Sign up
              </RoundButton>
            </MenuItem>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
      {renderMobileMenu}
    </>
  );
}
