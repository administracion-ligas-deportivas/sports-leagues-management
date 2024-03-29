import "@fortawesome/fontawesome-svg-core/styles.css";
import{
  TextField,
  Button
} from "@mui/material";

import UserIcon from "@/components/Icon";

import styles from "@/styles/NuevoArbitro.module.css";

export default function NuevoArbitro() {
  return (
    <>
      <div className={styles.container}>
        <h1>Nuevo árbitro</h1>
        <div className={styles.rectangle}>
          <div className={styles.flexContainer}>
            <div className={styles.user}>
              <UserIcon />
            </div>
            <div className={styles.input}>
              <TextField fullWidth id="outlined-basic" label="Nombre" margin="normal" />
              <TextField fullWidth id="outlined-basic" label="Apellidos" margin="normal" />
              <TextField fullWidth id="outlined-basic" label="Correo" type='mail' margin="normal" />
              <TextField fullWidth id="outlined-basic" label="Teléfono" type='number' margin="normal" />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div>
              <TextField fullWidth id="outlined-basic" label="Clave de liga/torneo"/>
            </div>
          </div>
          <div className={styles.buttons}>
            <div>
              <Button variant="contained">
              Ingresar
              </Button>
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
