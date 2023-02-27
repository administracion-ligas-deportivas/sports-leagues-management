import React from "react";
import styles from "@/styles/visualizarFormatos.module.css";
import {
  Stack,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFormatos } from "@/hooks/useFormatos";

export default function Formatos() {
  const { formatos } = useFormatos();
  console.log(formatos);

  return (
    <>
      <div className={styles.container}>
        <h1>Formatos</h1>
        <Stack direction="column" spacing={2} className={styles.rectangle}>
        {
          formatos.length === 0 ? (
            <p>No hay formatos</p>
          ) : 
          formatos.map((formato, key) => {
            console.log(formato);
            return (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="{formato.nombre}-content"
                  id="{formato.nombre}-header"
                >
                  <Typography>
                    {" "}
                    <b>{formato.nombre}</b> | {formato.deporte.nombre}{" "}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={styles.interlineado}>
                    <h3>Nombre: {formato.nombre}</h3>
                    <h3>Crado por: {formato.nombre}</h3>
                    <h4>Deporte: {formato.deporte.nombre}</h4>
                    <h4>
                      Tipo de evento deportivo: {formato.tipoEventoDeportivo}
                    </h4>
                    <p>Máximo de equipos: {formato.maximoEquipos}</p>
                    <p className={styles.interlineadoDescrip}>
                      Descripción: {formato.descripcion}
                    </p>
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
