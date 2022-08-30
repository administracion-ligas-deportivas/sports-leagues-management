import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";

import Footer from "../components/Footer";
import UserIcon from "../components/Icon";
import Label from "../components/Label";
import Navbar from "../components/Navbar";

import style from "../styles/estadisticas-personales.module.css";

export default function EstadisticasPersonales() {
  return (
    <>
      <Head>
        <title>Estadisticas Personales</title>
        <meta
          name="Estadisticas Personales"
          content="Se muestran las estadisticas personales del usuario"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbar />

      <div className={style.container}>
        <div className={style.rectangle}>
          <h1>Estadisticas</h1>
          <div className={style.flexContainer}>
            <div className={style.user}>
              <UserIcon />
            </div>
            <div className={style.input}>
              <Label> Nombre </Label> <br />
              <Label> Edad </Label> <br />
              <Label> Equipo(s) </Label> <br />
              <Label> Posición </Label> <br />
            </div>
            <div className={style.input2}>
              <Label> Partidos Jugados </Label> <br />
              <Label> Sanciones Totales </Label> <br />
              <Label> Sustituciones </Label> <br />
              <Label> Anotaciones </Label> <br />
            </div>
          </div>
          <h2> Galeria </h2>
        </div>
      </div>

      <Footer />
    </>
  );
}
