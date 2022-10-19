import "@fortawesome/fontawesome-svg-core/styles.css";
import { TextField } from "@mui/material";
import UserIcon from "@/components/Icon";
import style from "../styles/estadisticas-personales.module.css";

export default function EstadisticasPersonales() {
  return (
    <>
      <div className={style.container}>
        <div className={style.rectangle}>
          <h1>Estadisticas</h1>
          <div className={style.flexContainer}>
            <div className={style.user}>
              <UserIcon />
            </div>
            <div className={style.input}>
              <TextField fullWidth disabled label='Nombre' variant="filled" margin="normal" ></TextField>
              <TextField fullWidth disabled label='Edad' variant="filled" margin="normal" ></TextField>
              <TextField fullWidth disabled label='Equipo(s)' variant="filled" margin="normal" ></TextField>
              <TextField fullWidth disabled label='Posición' variant="filled" margin="normal" ></TextField>
            </div>
            <div className={style.input2}>
              <TextField fullWidth disabled label='Partidos Jugados' variant="filled" margin="normal" ></TextField>
              <TextField fullWidth disabled label='Sanciones Totales' variant="filled" margin="normal" ></TextField>
              <TextField fullWidth disabled label='Sustituciones' variant="filled" margin="normal" ></TextField>
              <TextField fullWidth disabled label='Anotaciones' variant="filled" margin="normal" ></TextField>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
