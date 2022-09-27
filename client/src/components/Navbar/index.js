// import { library } from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import { useContext } from "react";
import {AuthContext} from '../../helpers/AuthContext';
//import {useParams} from 'react-router-dom';

import * as React from 'react';
/*----------------------MUI----------------------------*/
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
/*-----------------------------------------------------*/

const pages = ['Ligas', 'Torneos', 'Calendario', 'Estadisticas'];
const settings = ['Perfil', 'Logout'];


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

  return (
    <AppBar position="static" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <FontAwesomeIcon
              icon={faMedal}
              style={{ marginRight: '10px', fontSize: '2.5rem' }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
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
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <FontAwesomeIcon
              icon={faMedal}
              style={{ marginRight: '10px', fontSize: '2.5rem' }}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  style={{ fontSize: '2.5rem', color: 'white' }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

  // return (
  //   <div className={styles.container}>
  //     <div>
  //       <FontAwesomeIcon
  //         icon={faCompass}
  //         className={styles.logo}
  //       />
  //     </div>
  //     <div className={styles.opciones}>
  //       <Link to="/home">
  //         Ligas
  //       </Link>
  //       <Link to="/home">
  //         Torneos
  //       </Link>
  //       <Link to="/home">
  //         Equipo
  //       </Link>
  //       <Link to="/home">
  //         Calendario
  //       </Link>
  //       <Link to="/home">
  //         Estadisticas
  //       </Link>
  //     </div>
  //     <div>
  //       <FontAwesomeIcon
  //         icon={faGear}
  //         className={styles.config}
  //       />
  //     </div>
  //     <div>
  //       <Link to={`/Profile/${autState.id}`}>
  //       <FontAwesomeIcon
  //         icon={faCircleUser}
  //         className={styles.user}
  //       />
  //       Perfil</Link>
  //     </div>
  //   </div>
  // );
}

export default Navbar;
