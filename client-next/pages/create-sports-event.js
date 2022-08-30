import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";
import styles from "../styles/create-sports-event.module.css";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Label from "../components/Label";
import Navbar from "../components/Navbar";

export default function CrearEventoDeportivo() {
  return (
    <>
      <Head>
        <title>Crear Evento Deportivo</title>
        <meta
          name="Creación de un nuevo Evento Deportivo"
          content="Administración de Ligas Deportivas"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.titlePage}>Crear Liga</h1>
        <div className={styles.rectangle}>
          <div className={styles.tipoLiga}>
            <Label> TIPO DE LIGA </Label>
            <Input />
          </div>
          <div className={styles.numTeams}>
            <Label> NÚMERO DE EQUIPOS </Label>
            <Input />
          </div>
          <div className={styles.fecha}>
            <Label> FECHA DE INICIO </Label>
            <Input />
            <Label> FECHA DE FIN </Label>
            <Input />
          </div>
          <div className={styles.datos}>
            <Label> CATEGORIA </Label>
            <Input />
            <Label> ARBITROS </Label>
            <Input />
            <Label> COSTO </Label>
            <Input />
          </div>
          <div className={styles.rules}>
            <Label> REGLAS </Label>
            <Input />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
