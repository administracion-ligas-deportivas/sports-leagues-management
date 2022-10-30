import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faCircleUser } from "@fortawesome/free-solid-svg-icons";

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
import { useAuthProvider } from "@/context/AuthContext";
import { useUser } from "@/hooks/useUser";
import { Link } from "react-router-dom";
/*-----------------------------------------------------*/
import styles from "./Navbar.module.css";

const pages = ["Equipos", "Torneos", "Calendario", "Estadisticas"];

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
                  styles={{ marginRight: "10px", fontSize: "2.5rem" }}
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
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))} */}
              <Link to="/EquiposEnSistema" className={styles.link}>
                <MenuItem key="Equipos" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Equipos</Typography>
                </MenuItem>
              </Link>
              <Link to="/EventosDeportivos" className={styles.link}>
                <MenuItem key="EventosDeportivos" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Eventos Deportivos</Typography>
                </MenuItem>
              </Link>
              <Link to="/calendario" className={styles.link}>
                <MenuItem key="Calendario" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Calendario</Typography>
                </MenuItem>
              </Link>
              <Link to="/EstadisticasPersonales" className={styles.link}>
                <MenuItem key="Estadisticas" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Estadisticas</Typography>
                </MenuItem>
              </Link>
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
            <Link to="/EquiposEnSistema" className={styles.link}>
              <Button
                key="Equipos"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Equipos
              </Button>
            </Link>
            <Link to="/EventosDeportivos" className={styles.link}>
              <Button
                key="EventosDeportivos"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Eventos Deportivos
              </Button>
            </Link>
            <Link to="/Calendario" className={styles.link}>
              <Button
                key="Calendario"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Calendario
              </Button>
            </Link>
            <Link to="/EstadisticasPersonales" className={styles.link}>
              <Button
                key="Estadisticas"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Estadisticas
              </Button>
            </Link>
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
                <MenuItem key="Perfil" onClick={handleCloseUserMenu}>
                  <Link to={`/profile/${user.id}`} className={styles.link}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Perfil
                    </Typography>
                  </Link>
                </MenuItem>
                {/* <MenuItem key='Logout' onClick={handleCloseUserMenu}> */}
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
