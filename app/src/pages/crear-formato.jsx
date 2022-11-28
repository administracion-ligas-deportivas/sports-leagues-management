import React from "react";
import { Button, Stack, TextField, MenuItem } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import styles from "@/styles/crear-formato.module.css";

export default function CrearFormato() {
  const sports = [
    {
      value: "futbol",
      label: "Fútbol",
    },
    {
      value: "beisbol",
      label: "Béisbol",
    },
    {
      value: "softball",
      label: "Softball",
    },
  ];

  const typeSportsEvent = [
    {
      value: "league",
      label: "Liga",
    },
    {
      value: "tournament",
      label: "Torneo",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <h1>Crear formato</h1>
        <Stack className={styles.rectangle}>
          <Stack direction="row" spacing={2}>
            <div className={styles.input}>
              <TextField
                fullWidth
                // size="small"
                id="max-equipos"
                label="Nombre del formato"
                //value={}
                //onChange={}
                //InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="sport"
                select
                label="Deporte"
                margin="normal"
                // value={currency}
                // onChange={handleChange}
              >
                {sports.map((sports) => (
                  <MenuItem key={sports.value} value={sports.value}>
                    {sports.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="type-of-sports-event"
                select
                label="Tipo de evento"
                margin="normal"
                // value={currency}
                // onChange={handleChange}
              >
                {typeSportsEvent.map((typeSportsEvent) => (
                  <MenuItem
                    key={typeSportsEvent.value}
                    value={typeSportsEvent.value}
                  >
                    {typeSportsEvent.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="nombre"
                label="Nombre del evento"
                //placeholder=""
                //value={}
                margin="normal"
                //onChange={(event) => setName(event.target.value)}
                //InputLabelProps={{ shrink: true }}
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div className={styles.input}>
              <TextField
                fullWidth
                // size="small"
                id="max-equipos"
                label="Número máximo de equipos"
                sx={{ width: "49%" }}
                //value={}
                //onChange={}
                //InputLabelProps={{ shrink: true }}
                margin="normal"
                helperText="Indicar si es necesario 
                tener un límite de equipos. "
              />
            </div>
          </Stack>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                id="descripcion"
                label="Descripción"
                multiline
                rows={5}
                sx={{ marginTop: "5px" }}
                fullWidth
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
