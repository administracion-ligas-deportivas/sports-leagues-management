import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";
import styles from "../styles/CreateTeam.module.css";
import Footer from "../components/Footer";
import InputCode from "../components/InputCode";
// import Input from "../components/Input/index";

// import Image from "next/image";
import Input from "../components/Input";
import Label from "../components/Label";
import Jugador from "../components/Jugador";
// import Image from "next/image";
import Navbar from "../components/Navbar";

export default function CrearEquipo() {
  return (
    <>
      <Head>
        <title>Crear Equipo</title>
        <meta
          name="Creación de un nuevo equipo"
          content="Administración de Ligas Deportivas"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div>
          <h1 className={styles.titlePage}>Crear Equipo</h1>
          <div className={styles.rectangle}>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <Label
                  className={styles.subtitlePage}
                  htmlFor="new-input"
                >
                  Nombre
                  <Input
                    id="team-name"
                    placeholder="Equipo"
                  />
                </Label>
              </div>
              <div className={styles.input}>
                <Label
                  className={styles.subtitlePage}
                  htmlFor="new-input"
                >
                  Deporte
                  <Input
                    id="team-name"
                    placeholder="Descripción"
                  />
                </Label>
              </div>
            </div>
            <div>
              <Label className={styles.subtitlePage}> Integrantes </Label>
            </div>
            <div className={styles.flexContainer}>
              <div>
                <Jugador />
                <Jugador />
                <Jugador />
                <Jugador />
                <Jugador />
              </div>
              <div>
                <Jugador />
                <Jugador />
                <Jugador />
                <Jugador />
                <Jugador />
              </div>
              <div>
                <Jugador />
                <Jugador />
                <Jugador />
                <Jugador />
                <Jugador />
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <Label
                  className={styles.subtitlePage}
                  htmlFor="new-input"
                >
                  Tipo de Torneo
                  <Input
                    id="tipo-torneo"
                    placeholder="Torneo"
                  />
                </Label>
              </div>
              <div className={styles.input}>
                <Label
                  className={styles.subtitlePage}
                  htmlFor="new-input"
                >
                  Añadir Integrante
                  <Input
                    id="user-name"
                    placeholder="Integrante"
                  />
                </Label>
              </div>
            </div>
            <div>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Código de Acceso
                <InputCode
                  titleU="Código de acceso"
                  nameU="accessCode"
                  placeholderU="Código"
                  contentU="Generar código"
                />
              </Label>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
