// import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <FontAwesomeIcon
          icon={faCompass}
          className={styles.logo}
        />
      </div>
      <div className={styles.opciones}>
        <Link href="/">
          <a>Ligas</a>
        </Link>
        <Link href="/">
          <a>Torneos</a>
        </Link>
        <Link href="/">
          <a>Equipo</a>
        </Link>
        <Link href="/">
          <a>Calendario</a>
        </Link>
        <Link href="/">
          <a>Estadisticas</a>
        </Link>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faGear}
          className={styles.config}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCircleUser}
          className={styles.user}
        />
      </div>
    </div>
  );
}

export default Navbar;
