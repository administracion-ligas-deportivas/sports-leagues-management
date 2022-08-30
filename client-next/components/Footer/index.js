import Link from "next/link";
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
        <FontAwesomeIcon
          icon={faTwitter}
          className={styles.divFooterIcons}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.divFooterIcons}
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className={styles.divFooterIcons}
        />
      </div>
      <div className={styles.pageName}>
        <p>© Administración de Ligas Deportivas</p>
      </div>
      <div className={styles.pagesContainer}>
        <Link
          href="/"
          passHref
        >
          {/* 
            ESLint lanza un error por no utilizar href en un anchor (a), pero el 
            anchor no lo necesita porque utilizamos Link de Next.js y este recibe 
            el href. 

            La solución que se propone en la documentación oficial es utilizar la 
            prop passHref para que Next.js pueda pasar el href a la etiqueta a. 
            Nosotros solo pasamos un href a la etiqueta a para simular el href 
            del anchor y que el Linter no dé problemas.

            También se menciona que esto es un problema conocido, pero que por el 
            momento no hay implementada una solución en la API de Next.js.

            https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/112261cbc84f5b7d74de9b427b529a10b41faece/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links
         */}
          <a href="dummy-href"> Contáctanos </a>
        </Link>
        <Link
          href="/"
          passHref
        >
          <a href="dummy-href"> Acerca de </a>
        </Link>
      </div>
    </footer>
  );
}
