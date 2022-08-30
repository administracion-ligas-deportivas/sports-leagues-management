import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/Input/index";
import UserIcon from "../components/Icon";
import Label from "../components/Label";
import Button from "../components/Button";
import styles from "../styles/RegistroEstadistico.module.css";

function RegistroEstadistico() {
  return (
    <>
      <Head>
        <title>Registrar capturador de estadísticas</title>
        <meta
          name="Registrar capturador de estadísticas"
          content="Administración de Ligas Deportivas"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbar />
      <section className="container mx-auto py-2">
        <div className={styles.container}>
          <div>
            <h1 className={styles.titlePage}>
              Registrar capturador de estadísticas
            </h1>
          </div>
          <div className={styles.flexContainer}>
            <UserIcon />
            <div className={styles.formContainer}>
              <div className={styles.input}>
                <Label
                  className={styles.subtitlePage}
                  htmlFor="new-input"
                >
                  Clave de usuario
                  <Input
                    id="user-code"
                    placeholder="Clave de usuario"
                  />
                </Label>
              </div>
              <div className={styles.input}>
                <Label
                  className={styles.subtitlePage}
                  htmlFor="new-input"
                >
                  Clave de liga o torneo
                  <Input
                    id="tornament-league-code"
                    placeholder="Clave de liga o torneo"
                  />
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant="primary">
            <p>Aceptar</p>
          </Button>
          <Button variant="secondary">
            <p>Cancelar</p>
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default RegistroEstadistico;
