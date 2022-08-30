// Ingreso a evento deportivo
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/EnterSportsEvent.module.css";
import InputButtonTitle from "../components/InputButtonTitle";

function EnterSportsEvent() {
  return (
    <>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.titlePage}>Nombre del equipo</h1>
          <p className={styles.description}>
            Ingreso a liga/torneo: <br /> Por favor ingrese el código que le
            haya brindado el organizador del evento.
          </p>
        </div>
        <div className={styles.sectionInput}>
          <InputButtonTitle
            titleU="Código"
            nameU="sportsEventCode"
            placeholderU="Ingresa código de acceso"
            contentU="Registrar"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EnterSportsEvent;
