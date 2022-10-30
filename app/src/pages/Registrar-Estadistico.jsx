import "@fortawesome/fontawesome-svg-core/styles.css";
import UserIcon from "../components/Icon";
import styles from "@/styles/RegistroEstadistico.module.css";
import { 
  TextField,
  Button
} from "@mui/material";

function RegistroEstadistico() {
  return (
    <>
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
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Clave de usuario"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Clave de liga o torneo"
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button variant="contained">
                Aceptar
          </Button>      
          <Button variant="contained" color="error">
                Cancelar
          </Button>
        </div>
      </section>
    </>
  );
}

export default RegistroEstadistico;
