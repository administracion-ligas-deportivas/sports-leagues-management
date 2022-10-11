import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import {AuthContext} from "../../helpers/AuthContext";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

/*----------------------MUI----------------------------*/
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
/*-----------------------------------------------------*/

const pages = ["Ligas", "Torneos", "Calendario", "Estadisticas"];


function Navbar() {
  const {autState} = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser =() => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1A1C9E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Tooltip title="Ligas Deportivas">
            <Link to="/home" className={style.linkLogo}>
            <Typography
              variant="h6"
              noWrap
              // component="a"
              // href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon
                icon={faMedal}
                style={{ marginRight: "10px", fontSize: "2.5rem" }}
              />
            </Typography>
            </Link>
          </Tooltip>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <FontAwesomeIcon
              icon={faMedal}
              style={{ marginRight: "10px", fontSize: "2.5rem" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Perfil">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{ fontSize: "2.5rem", color: "white" }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='Perfil' onClick={handleCloseUserMenu}  >
                <Link to={`/Profile/${autState.id}`} className={style.link}>
                <Typography 
                  textAlign="center"
                  sx={{
                    color: "inherit",
                    textDecoration: "none" 
                  }}
                >
                    Perfil
                </Typography>
                </Link>
              </MenuItem>
              {/* <MenuItem key='Logout' onClick={handleCloseUserMenu}> */}
              <MenuItem key='Logout' onClick={logoutUser}>
                <Typography textAlign="center" >Cerrar Sesión</Typography>
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}

export default Navbar;
