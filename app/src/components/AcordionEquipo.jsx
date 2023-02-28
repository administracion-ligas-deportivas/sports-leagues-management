import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";

import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "@/styles/Equipos.module.css";
import { useEquipos } from "@/hooks";

export function AcordionEquipo() {
  const { equipos } = useEquipos();
  // const { jugadores, deleteJugador } = useJugadores();

  return equipos?.map((equipo, valor) => {
    return (
      <Accordion key={valor}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="{value.nombre}-content"
          id="{value.nombre}-header"
        >
          <Typography>
            {" "}
            <b>{equipo.nombre}</b> | {equipo?.deporte?.nombre}{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.interlineado}>
            <h3>Nombre: {equipo.nombre}</h3>
            {equipo?.deporte && <h4>Deporte: {equipo?.deporte?.nombre}</h4>}
          </div>
          <div className={styles.centrar}>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Eliminar</th>
                </tr>
              </thead>

              <tbody>
                {equipo?.jugadores?.map((jugador) => {
                  return (
                    <tr key={jugador.id} className={styles.info}>
                      <td>{jugador.nombre}</td>
                      <td>{jugador.apellido}</td>
                      <td className={styles.centrar}>
                        <Button
                          variant="outlined"
                          startIcon={<DirectionsRunIcon />}
                          size="small"
                          color="error"
                        >
                        Eliminar
                        </Button>
                      </td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  });
}
