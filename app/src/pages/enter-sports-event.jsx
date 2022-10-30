import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "@/styles/EnterSportsEvent.module.css";
import { Button, TextField } from "@mui/material";

function EnterSportsEvent() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Ingresar a evento deportivo</h1>
          <div className={styles.rectangle}>
            <h2>
              Ingreso a liga/torneo: <br /> Por favor ingrese el código que le
              haya brindado el organizador del evento.
            </h2>
            <TextField
              fullWidth
              margin="normal"
              id="codigoAcceso"
              label="Código de acceso"
              variant="outlined"
            />
            <div className={styles.buttons}>
              <div>
                <Button variant="contained">Ingresar</Button>
              </div>
              <div>
                <Button variant="contained" color="error">
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnterSportsEvent;
