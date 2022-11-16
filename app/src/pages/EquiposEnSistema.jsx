import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "@/styles/Equipos.module.css";
import {
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEquipos } from "@/hooks/useEquipos";
import { useJugadores } from "@/hooks/useJugadores";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";


export default function EquiposEnSistema() {
  const { equipos } = useEquipos();
  const { jugadores, deleteJugador } = useJugadores();

  return (
    <>
      <div className={styles.container}>
        <h1>Equipos</h1>
        <Stack direction="column" spacing={2} className={styles.rectangle}>
          {equipos.map((value, key) => {
            console.log(value);
            return(
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="{value.nombre}-content"
                  id="{value.nombre}-header"
                >
                  <Typography> {value.nombre} | {value.deporte} </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.centrar}>
                  <table>
                    <tr>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Eliminar</th>
                    </tr>

                  {jugadores.map((player) => {
                    if(player.id_equipo === value.id){
                      return(
                        <tr className={styles.info}>
                            <td>{player.nombre}</td>
                            <td>{player.apellido}</td>
                            <td className={styles.centrar}><Button
                              variant="outlined"
                              startIcon={<DirectionsRunIcon />}
                              size="small"
                              color="error"
                            >
                              Eliminar
                            </Button></td>
                        </tr>
                      )
                    }
                  })}
                  </table>
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
          
          <div className={styles.buttons}>
            <div>
              <Button variant="contained">Guardar</Button>
            </div>
            <div>
              <Button variant="contained" color="error">
                Cancelar
              </Button>
            </div>
          </div>
        </Stack>
      </div>
    </>
  );
}
