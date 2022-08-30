import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";
import styles from "../styles/EditarPerfil.module.css";
import Footer from "../components/Footer";
import UserIcon from "../components/Icon";
// import Input from "../components/Input/index";

// import Image from "next/image";
import Input from "../components/Input";
import Label from "../components/Label";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function EditarPerfil() {
  return (
    <>
      <Head>
        <title>Editar Perfil</title>
        <meta
          name="Edición del Perfil del usuario"
          content="Administración de Ligas Deportivas"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <h1>Editar Perfil</h1>
        <div className={styles.rectangle}>
          <div className={styles.user}>
            <UserIcon />
          </div>
          <h2>Datos Personales</h2>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Nombres
                <Input
                  id="first-name"
                  placeholder="Nombres"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Apellidos
                <Input
                  id="last-name"
                  placeholder="Apellidos"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Fecha de Nacimiento
                <Input
                  id="date-birth"
                  placeholder="Fecha"
                />
              </Label>
            </div>
          </div>
          <h2>Domicilio</h2>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Calle
                <Input
                  id="street"
                  placeholder="Calle"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Colonia
                <Input
                  id="colony"
                  placeholder="Colonia"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input2}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Num. Exterios
                <Input
                  id="external-number"
                  placeholder="Número Exterior"
                />
              </Label>
            </div>
            <div className={styles.input2}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Num. Interior
                <Input
                  id="internal-number"
                  placeholder="Número Interior"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Código Postal
                <Input
                  id="postal-code"
                  placeholder="C.P"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Estado
                <Input
                  id="state"
                  placeholder="Estado"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Municipio
                <Input
                  id="municipality"
                  placeholder="Municipio"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Número de Télefono
                <Input
                  id="phone-number"
                  placeholder="Teléfono"
                />
              </Label>
            </div>
          </div>
          <br />
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Correo
                <Input
                  id="email"
                  placeholder="Correo"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Contraseña
                <Input id="password" />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Nueva Contraseña
                <Input
                  id="new-password"
                  placeholder="Nueva Contraseña"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Confirmar Contraseña
                <Input
                  id="confirm-password"
                  placeholder="Confirmar Contraseña"
                />
              </Label>
            </div>
          </div>
          <br />
          <div className={styles.buttons}>
            <Button variant="primary">
              <p>Primary</p>
            </Button>
            <Button variant="secondary">
              <p>Secondary</p>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
