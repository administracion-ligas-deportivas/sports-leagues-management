import React from "react";
import styles from "@/styles/Equipos.module.css";
import { Button, Stack } from "@mui/material";
import { AcordionEquipo } from "@/components/AcordionEquipo";

export default function EquiposEnSistema() {
  return (
    <>
      <div className={styles.container}>
        <h1>Equipos</h1>
        <Stack direction="column" spacing={2} className={styles.rectangle}>
          <AcordionEquipo />
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
