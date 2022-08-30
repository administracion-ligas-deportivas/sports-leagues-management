import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import Button from "../components/Button";
import Label from "../components/Label";
import Jugador from "../components/Jugador";
import Input from "../components/Input";
import styles from "../styles/TeamStatistics.module.css";

export default function EstadisticasEquipo() {
  return (
    <>
      <Head>
        <title>Estadísticas de Equipo</title>
        <meta
          name="Subir estadísticas por equipo"
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
            <h1 className={styles.titlePage}>Subir estadísticas de Equipo</h1>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Equipo
                <Input
                  id="team-name"
                  placeholder="Nombre del equipo"
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
                  id="tornament-sport"
                  placeholder="Deporte"
                />
              </Label>
            </div>
          </div>
          <div className={styles.resultsFlexContainer}>
            <Label
              className={styles.subtitlePage}
              htmlFor="new-input"
            >
              Resultados del Evento:
            </Label>
            <div className={styles.resultsContainer}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Duración del juego
                <Input
                  id="game-length"
                  placeholder="Duración del juego"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Tarjetas rojas
                <Input
                  id="red-card"
                  placeholder="Tarjetas rojas"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Categoría 1
                <Input
                  id="category-1"
                  placeholder="Categoría 1"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Lesionados
                <Input
                  id="injured"
                  placeholder="Lesionados"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Amonestaciones
                <Input
                  id="admonitions"
                  placeholder="Amonestaciones"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Categoría 2
                <Input
                  id="category-2"
                  placeholder="Categoría 2"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Tarjetas amarillas
                <Input
                  id="yellow-cards"
                  placeholder="Tarjetas amarillas"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Puntaje
                <Input
                  id="score"
                  placeholder="Puntaje"
                />
              </Label>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Categoría 3
                <Input
                  id="category-3"
                  placeholder="Categoría 3"
                />
              </Label>
            </div>
          </div>
          <div className={styles.playersContainerBig}>
            <Label
              className={styles.subtitlePage}
              htmlFor="new-input"
            >
              Jugadores
            </Label>
            <div className={styles.playersContainer}>
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
            </div>
          </div>
        </div>
        <div className={styles.observationsContainer}>
          <Label
            className={styles.subtitlePage}
            htmlFor="new-input"
          >
            Observaciones
            <Input id="observations" />
          </Label>
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
