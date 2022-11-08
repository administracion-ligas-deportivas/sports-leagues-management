import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "@/styles/EnterSportsEvent.module.css";
import { Button, TextField } from "@mui/material";

function EnterSportsEvent() {
  return (
    <>
      <div className={styles.container}>
        <h1>Ingresar código</h1>
        <div className={styles.rectangle}>
          <h2>
            Para ingresar a equipo, evento deportivo o registrase como
            estadístico.
            <br /> Por favor ingrese el código que le hayan brindado.
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
    </>
  );
}

export default EnterSportsEvent;
