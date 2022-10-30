import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

library.add(faFacebook, faInstagram, faTwitter);

export default function Footer() {
  return (
    <footer className={styles.divFooter}>
      <div className={styles.divFooterDivIcons}>
        <FontAwesomeIcon icon={faTwitter} className={styles.divFooterIcons} />
        <FontAwesomeIcon icon={faInstagram} className={styles.divFooterIcons} />
        <FontAwesomeIcon icon={faFacebook} className={styles.divFooterIcons} />
      </div>
      <div className={styles.pageName}>
        <p>© Administración de Ligas Deportivas</p>
      </div>
      <div className={styles.pagesContainer}>
        <Link to="/home">Acerca de</Link>
      </div>
    </footer>
  );
}
