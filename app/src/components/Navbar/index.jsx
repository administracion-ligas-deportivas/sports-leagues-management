import * as React from "react";
import { useAuthProvider } from "@/context/AuthContext";
import { useUser } from "@/hooks/useUser";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faCircleUser } from "@fortawesome/free-solid-svg-icons";

/*----------------------MUI----------------------------*/
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  Button,
} from "@mui/material";

const navElements = [
  {
    to: "/equipos-en-sistema",
    text: "Equipos",
  },
  {
    to: "/eventos-deportivos",
    text: "Eventos deportivos",
  },
  // {
  //   to: "/calendario",
  //   text: "Calendario",
  // },
  {
    to: "/estadisticas-personales",
    text: "Mis estadísticas",
  },
  {
    to: "/home",
    text: "Admin"
  }
];

function Navbar() {
  const { logout } = useAuthProvider();
  const { user, isLoading } = useUser();

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

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1A1C9E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Tooltip title="Ligas Deportivas">
            <Link to="/" className={styles.linkLogo}>
              <Typography
                variant="h6"
                noWrap
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
                <link rel="manifest" href="manifest.json" />
                <FontAwesomeIcon
                  icon={faMedal}
                  styles={{ marginRight: "10px", fontSize: "20px" }}
                />
              </Typography>
            </Link>
          </Tooltip>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <Link to="/home" className={styles.linkLogo}>
              <Typography>
              Admin
              </Typography>
            </Link> */}
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
              {navElements.map((element) => {
                return (
                  <Link
                    to={element.to}
                    key={element.to}
                    className={styles.link}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{element.text}</Typography>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>

          <Link to="/" className={styles.linkLogo}>
            <Typography
              variant="h5"
              // noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                paddingRight: "80px",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon
                icon={faMedal}
                styles={{ marginRight: "10px", fontSize: "2.5rem" }}
              />
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navElements.map((element) => {
              return (
                <Link key={element.to} to={element.to} className={styles.link}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {element.text}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoading ? (
              <span>Cargando...</span>
            ) : (
              <Tooltip title="Perfil">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    styles={{ fontSize: "2.5rem", color: "white" }}
                  />
                </IconButton>
              </Tooltip>
            )}
            {user && (
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
                <Link to={`/profile/${user.id}`} className={styles.link}>
                  <MenuItem key="Perfil" onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Perfil
                    </Typography>
                  </MenuItem>
                </Link>
                <MenuItem key="Logout" onClick={async () => logout()}>
                  <Typography textAlign="center">Cerrar Sesión</Typography>
                </MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
