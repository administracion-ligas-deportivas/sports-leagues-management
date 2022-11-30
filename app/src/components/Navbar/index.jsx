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

const navtexts = [
  {
    to: "/equipos-en-sistema",
    text: "Equipos",
  },
  {
    to: "/eventos-deportivos",
    text: "Eventos deportivos",
  },
  {
    to: "/visualizar-formatos",
    text: "Visualizar formatos",
  },
  {
    to: "/partidos-en-sistema",
    text: "Partidos en sistema",
  },
  {
    to: "/home",
    text: "Admin",
  },
];

const allNavtexts = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/crear-formato",
    text: "Crear formato",
  },
  {
    to: "/home",
    text: "Home Admin",
  },
  {
    to: "/gestion-evento-deportivo",
    text: "Gestion Evento Dep",
  },
  {
    to: "/nuevo-arbitro",
    text: "Nuevo Arbitro",
  },
  {
    to: "/crear-evento-deportivo",
    text: "Crear Evento Deportivo",
  },

  {
    to: "/estadisticas-personales",
    text: "Mis estadísticas",
  },
  {
    to: "/enter-sports-event",
    text: "Entrar a evento deportivo",
  },
  {
    to: "/estadisticas-personales",
    text: "Estadisticas personales",
  },
  {
    to: "/asignar-roles",
    text: "Asignar roles",
  },
  {
    to: "/nueva-cancha",
    text: "Nueva cancha",
  },
  {
    to: "/eventos-deportivos",
    text: "Eventos deportivos",
  },
  {
    to: "/gestion-equipo-jugador",
    text: "Gestion equipo jugador",
  },
  {
    to: "/registro-deportivo",
    text: "Registro deportivo",
  },
  {
    to: "/traspaso-equipo",
    text: "Traspaso equipo",
  },
  {
    to: "/registro-estadistico",
    text: "Registro estadistico",
  },
  {
    to: "/equipos-en-sistema",
    text: "Equipos en sistema",
  },
  {
    to: "/gestion-equipo",
    text: "Gestion equipo",
  },
  {
    to: "/registro-pago-fisico",
    text: "Registro pago fisico",
  },
  {
    to: "/panel-admin",
    text: "Panel admin",
  },
];

function Navbar() {
  const { logout } = useAuthProvider();
  const { user, isLoading } = useUser();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElAdmin, setAnchorElAdmin] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenAdminMenu = (event) => {
    setAnchorElAdmin(event.currentTarget);
  };
  const handleCloseAdminMenu = () => {
    setAnchorElAdmin(null);
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
              {navtexts.map((text) => {
                return (
                  <Link to={text.to} key={text.to} className={styles.link}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{text.text}</Typography>
                    </MenuItem>
                  </Link>
                );
              })}
            </Menu>
          </Box>

          <Link to="/" className={styles.linkLogo}>
            <Typography
              variant="h5"
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
            {navtexts.map((text) => {
              if (text.text === "Admin") {
                return (
                  <>
                    <Button
                      onClick={handleOpenAdminMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {text.text}
                    </Button>
                    <Menu
                      id="menu-appbar-admin"
                      anchorEl={anchorElAdmin}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElAdmin)}
                      onClose={handleCloseAdminMenu}
                      sx={{
                        display: { xs: "block", md: "block" },
                      }}
                    >
                      {allNavtexts.map((text) => {
                        return (
                          <Link
                            to={text.to}
                            key={text.to}
                            className={styles.link}
                          >
                            <MenuItem onClick={handleCloseAdminMenu}>
                              <Typography textAlign="center">
                                {text.text}
                              </Typography>
                            </MenuItem>
                          </Link>
                        );
                      })}
                    </Menu>
                  </>
                );
              } else {
                return (
                  <Link key={text.to} to={text.to} className={styles.link}>
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      {text.text}
                    </Button>
                  </Link>
                );
              }
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoading ? (
              <span>Cargando...</span>
            ) : (
              <Tooltip title="Perfil">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 1, color: "white" }}
                >
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    styles={{ color: "white", fontSize: "2.5rem" }}
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
