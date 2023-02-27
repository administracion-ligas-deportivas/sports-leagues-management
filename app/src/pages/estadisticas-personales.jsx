import "@fortawesome/fontawesome-svg-core/styles.css";
import { Button, TextField } from "@mui/material";
import UserIcon from "@/components/Icon";
import styles from "@/styles/EstadisticasPersonales.module.css";

export default function EstadisticasPersonales() {
  return (
    <>
      <div className={styles.container}>
        <h1>Estadisticas</h1>
        <div className={styles.rectangle}>
          <div className={styles.flexContainer}>
            <div className={styles.user}>
              <UserIcon />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                disabled
                label="Nombre"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                disabled
                label="Edad"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                disabled
                label="Equipo(s)"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                disabled
                label="Posición"
                variant="filled"
                margin="normal"
              ></TextField>
            </div>
            <div className={styles.input2}>
              <TextField
                fullWidth
                disabled
                label="Partidos Jugados"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                disabled
                label="Sanciones Totales"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                disabled
                label="Sustituciones"
                variant="filled"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                disabled
                label="Anotaciones"
                variant="filled"
                margin="normal"
              ></TextField>
            </div>
          </div>
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
