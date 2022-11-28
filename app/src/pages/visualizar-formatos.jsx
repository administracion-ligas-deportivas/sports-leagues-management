import React from "react";
import styles from "@/styles/visualizarFormatos.module.css";
import {
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFormatos } from "@/hooks/useFormatos";

export default function Formatos() {
  const { formatos } = useFormatos();

  return (
    <>
      <div className={styles.container}>
        <h1>Formatos</h1>
        <Stack direction="column" spacing={2} className={styles.rectangle}>
          {formatos.map((value, key) => {
            console.log(value);
            return (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="{value.nombre}-content"
                  id="{value.nombre}-header"
                >
                  <Typography>
                    {" "}
                    <b>{value.nombre}</b> | {value.deporte}{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.interlineado}>
                    <h3>Nombre: {value.nombre}</h3>
                    {/* <h3>Crado por: {value.nombre}</h3> */}
                    <h4>Deporte: {value.deporte}</h4>
                    <h4>Tipo de evento deportivo: {value.tipoEventoDeportivo}</h4>
                    <p>Máximo de equipos: {value.maximo_equipos}</p>
                    <p className={styles.interlineadoDescrip}>Descripción: {value.descripcion}</p>
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
