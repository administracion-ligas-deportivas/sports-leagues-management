// import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faGear,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import MobileNavbar from "./MobileNavbar";
import DropdownList from "../Dropdown/DropdownList";
import styles from "./Navbar.module.css";

function Navbar() {
  const eventos = [
    { title: "Torneos", href: "/gestion-torneo" },
    { title: "Ligas", href: "/gestion-liga" },
  ];

  return (
    <div className={styles.container}>
      <Link
        href="/"
        passHref
      >
        <FontAwesomeIcon
          icon={faCompass}
          className={[styles.logo, styles.link].join(" ")}
        />
      </Link>
      <div className={[styles.opciones, "hidden", "sm:flex"].join(" ")}>
        <DropdownList title="Eventos">{eventos}</DropdownList>
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
      <section className={styles.userContainer}>
        <Link
          href="/editar-perfil"
          passHref
        >
          <FontAwesomeIcon
            icon={faGear}
            className={[styles.config, styles.link].join(" ")}
          />
        </Link>
        <FontAwesomeIcon
          icon={faCircleUser}
          className={[styles.link, styles.user].join(" ")}
        />
      </section>
    </div>
  );
}

export default Navbar;
