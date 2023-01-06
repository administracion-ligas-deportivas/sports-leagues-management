import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import styles from "@/styles/Equipos.module.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEquipos } from "@/hooks/useEquipos";
import { useJugadores } from "@/hooks/useJugadores";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export function AcordionEquipo() {
  const { equipos } = useEquipos();
  const { jugadores, deleteJugador } = useJugadores();

  return equipos?.map((equipo, valor) => {
    console.log(equipo);
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
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Eliminar</th>
              </tr>

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
            </table>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  });
}
