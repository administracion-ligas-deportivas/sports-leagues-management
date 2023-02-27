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
    text: "Formatos",
  },
  {
    text: "Deportivos y Canchas",
  },

  // {
  //   to: "/crear-evento-deportivo",
  //   text: "Crear Evento Deportivo",
  // },

  // {
  //   to: "/asignar-roles",
  //   text: "Asignar roles",
  // },

  // {
  //   to: "/gestion-equipo",
  //   text: "Gestion equipo",
  // },
  {
    to: "/partidos-en-sistema",
    text: "Partidos",
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
    to: "/estadisticas-personales",
    text: "Mis estadísticas",
  },
  {
    to: "/enter-sports-event",
    text: "Entrar a evento deportivo",
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
    to: "/registro-pago-fisico",
    text: "Registro pago fisico",
  },
  {
    to: "/panel-admin",
    text: "Panel admin",
  },
];

const equiposNavText = [
  {
    to: "/gestion-equipo",
    text: "Gestion equipo",
  },
  {
    to: "/equipos-en-sistema",
    text: "Equipos en sistema",
  },
  {
    to: "/traspaso-equipo",
    text: "Traspaso equipo",
  },
  {
    to: "/gestion-equipo-jugador",
    text: "Gestion equipo jugador",
  },
];

const eventosNavText = [
  {
    to: "/gestion-evento-deportivo",
    text: "Gestion Evento Dep",
  },
  {
    to: "/enter-sports-event",
    text: "Entrar a evento deportivo",
  },
  {
    to: "/eventos-deportivos",
    text: "Eventos deportivos",
  },
];

const formatosNavText = [
  {
    to: "/crear-formato",
    text: "Crear formato",
  },
  {
    to: "/visualizar-formatos",
    text: "Visualizar formatos",
  },
];

const depcanNavText = [
  {
    to: "/nueva-cancha",
    text: "Nueva cancha",
  },
  {
    to: "/registro-deportivo",
    text: "Registro deportivo",
  },
];

function Navbar() {
  const { logout } = useAuthProvider();
  const { user, isLoading } = useUser();

  const {isAdmin} = useUser();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElAdmin, setAnchorElAdmin] = React.useState(null);
  const [anchorEquipos, setAnchorEquipos] = React.useState(null);
  const [anchorEventos, setAnchorEventos] = React.useState(null);
  const [anchorFormatos, setAnchorFormatos] = React.useState(null);
  const [anchorDepCan, setAnchorDepCan] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenAdminMenu = (event) => {
    setAnchorElAdmin(event.currentTarget);
  };

  const handleOpenEquiposMenu = (event) => {
    setAnchorEquipos(event.currentTarget);
  };

  const handleOpenEventosMenu = (event) => {
    setAnchorEventos(event.currentTarget);
  };

  const handleOpenFormatosMenu = (event) => {
    setAnchorFormatos(event.currentTarget);
  };

  const handleOpenDepCanMenu = (event) => {
    setAnchorDepCan(event.currentTarget);
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

  const handleCloseEquiposMenu = () => {
    setAnchorEquipos(null);
  };

  const handleCloseEventosMenu = () => {
    setAnchorEventos(null);
  };

  const handleCloseFormatosMenu = () => {
    setAnchorFormatos(null);
  };

  const handleCloseDepCanMenu = () => {
    setAnchorDepCan(null);
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
              if (text.text == "Deportivos y Canchas") {
                return (
                  <>
                    <Button
                      onClick={handleOpenDepCanMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {text.text}
                    </Button>
                    <Menu
                      id="menu-appbar-admin"
                      anchorEl={anchorDepCan}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorDepCan)}
                      onClose={handleCloseDepCanMenu}
                      sx={{
                        display: { xs: "block", md: "block" },
                      }}
                    >
                      {depcanNavText.map((text) => {
                        return (
                          <Link
                            to={text.to}
                            key={text.to}
                            className={styles.link}
                          >
                            <MenuItem onClick={handleCloseDepCanMenu}>
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
                if (text.text == "Equipos") {
                  return (
                    <>
                      <Button
                        onClick={handleOpenEquiposMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {text.text}
                      </Button>
                      <Menu
                        id="menu-appbar-admin"
                        anchorEl={anchorEquipos}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        open={Boolean(anchorEquipos)}
                        onClose={handleCloseEquiposMenu}
                        sx={{
                          display: { xs: "block", md: "block" },
                        }}
                      >
                        {equiposNavText.map((text) => {
                          return (
                            <Link
                              to={text.to}
                              key={text.to}
                              className={styles.link}
                            >
                              <MenuItem onClick={handleCloseEquiposMenu}>
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
                }
              }
              if (text.text == "Eventos deportivos") {
                return (
                  <>
                    <Button
                      onClick={handleOpenEventosMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {text.text}
                    </Button>
                    <Menu
                      id="menu-appbar-admin"
                      anchorEl={anchorEventos}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorEventos)}
                      onClose={handleCloseEventosMenu}
                      sx={{
                        display: { xs: "block", md: "block" },
                      }}
                    >
                      {eventosNavText.map((text) => {
                        return (
                          <Link
                            to={text.to}
                            key={text.to}
                            className={styles.link}
                          >
                            <MenuItem onClick={handleCloseEventosMenu}>
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
                if (text.text == "Formatos") {
                  return (
                    <>
                      <Button
                        onClick={handleOpenFormatosMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {text.text}
                      </Button>
                      <Menu
                        id="menu-appbar-admin"
                        anchorEl={anchorFormatos}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        open={Boolean(anchorFormatos)}
                        onClose={handleCloseFormatosMenu}
                        sx={{
                          display: { xs: "block", md: "block" },
                        }}
                      >
                        {formatosNavText.map((text) => {
                          return (
                            <Link
                              to={text.to}
                              key={text.to}
                              className={styles.link}
                            >
                              <MenuItem onClick={handleCloseFormatosMenu}>
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
                }
              }
              if (text.text == "Partidos" && text.text != "Admin") {
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

          <Box
            sx={{ flexGrow: 0, display: "flex", flexDirection: "row-reverse" }}
          >
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
            {
              isAdmin && navtexts.map((text) => {
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
              }
            })}
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
