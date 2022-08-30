import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";

import Footer from "../components/Footer";
import UserIcon from "../components/Icon";
import Input from "../components/Input";
import Label from "../components/Label";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

import styles from "../styles/nuevo-arbitro.module.css";

export default function NuevoArbitro() {
  return (
    <>
      <Head>
        <title>Nuevo Arbitro</title>
        <meta
          name="Nuevo Arbitro"
          content="SE agregara un nuevo arbitro"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.rectangle}>
          <div className={styles.flexContainer}>
            <div className={styles.user}>
              <UserIcon />
            </div>
            <div className={styles.input}>
              <Label> Nombre </Label>
              <Input />
              <Label> Apellidos </Label>
              <Input />
              <Label> Correo </Label>
              <Input />
              <Label> Telefono </Label>
              <Input />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div>
              <Label>Clave de Liga o Torneo </Label>
              <Input />
            </div>
          </div>
          <div className={styles.buttons}>
            <div>
              <Button variant="primary">
                {" "}
                <p> Aceptar </p>{" "}
              </Button>
            </div>
            <div>
              <Button variant="secondary">
                {" "}
                <p> Cancelar </p>{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
