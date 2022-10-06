import React from "react";
import { Button, Stack, TextField } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import styles from "../styles/RegistroDeportivo.module.css";

export default function RegistroDeportivo() {
  return (
    <>
      <div className={styles.container}>
        <h1>Registro de deportivo</h1>
        <Stack spacing={2} className={styles.rectangle}>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="municipio"
                label="Municipio"
                //placeholder="Municipio"
                //value={}
                margin="normal"
                //onChange={(event) => setName(event.target.value)}
                //InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="nombre-deportivo"
                label="Nombre del deportivo"
                //value={}
                //onChange={}
                //InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="calle"
                label="Calle"
                //placeholder="Tipo de evento deportivo"
                //value={}
                margin="normal"
                //onChange={(event) => setName(event.target.value)}
                //InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                // size="small"
                id="colonia"
                label="Colonia"
                //value={}
                //onChange={}
                //InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth
                // size="small"
                id="codigo-postal"
                label="Código postal"
                //placeholder="Tipo de evento deportivo"
                //value={}
                margin="normal"
                //onChange={(event) => setName(event.target.value)}
                //InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                // size="small"
                id="numero-exterior"
                label="Número exterior"
                //value={}
                //onChange={}
                //InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <div>
              <Button variant="contained">Aceptar</Button>
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
