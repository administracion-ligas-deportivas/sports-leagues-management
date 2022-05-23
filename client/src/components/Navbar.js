// import { library } from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Navbar.module.css";
import { useContext } from "react";
import {AuthContext} from '../helpers/AuthContext';
//import {useParams} from 'react-router-dom';

function Navbar() {
  const {autState} = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon
          icon={faCompass}
          className={styles.logo}
        />
      </div>
      <div className={styles.opciones}>
        <Link to="/home">
          Ligas
        </Link>
        <Link to="/home">
          Torneos
        </Link>
        <Link to="/home">
          Equipo
        </Link>
        <Link to="/home">
          Calendario
        </Link>
        <Link to="/home">
          Estadisticas
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faGear}
          className={styles.config}
        />
      </div>
      <div>
        <Link to={`/Profile/${autState.id}`}>
        <FontAwesomeIcon
          icon={faCircleUser}
          className={styles.user}
        />
        Perfil</Link>
      </div>
    </div>
  );
}

export default Navbar;
