import React from "react";
import {
  Button,
  Typography,
  Stack,
  Autocomplete,
  TextField,
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import styles from "@/styles/AsignarRoles.module.css";
import { useJugadores } from "@/hooks/useJugadores";

export default function AsignarRoles() {
  const { jugadores, deleteJugador } = useJugadores();

  return (
    <>
      <div className={styles.container}>
        <h1>Asignar roles</h1>
        <Stack spacing={2} className={styles.rectangle}>
          <h2>Asignar rol a los usuarios</h2>
          <Typography>
            {" "}
            Por favor ingrese el nombre del usurio y seleccione el rol que le
            quiere asignar{" "}
          </Typography>
          <Stack direction="row" spacing={10}>
            <Autocomplete
              id="buscar-usuario"
              sx={{ width: 700 }}
              options={jugadores.map((option) => option.nombre +' '+ option.apellido)}
              renderInput={(params) => (
                <TextField {...params} label="Buscar Usuario" />
              )}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Rol</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  // value="jugador"
                  control={<Radio />}
                  label="Administrador"
                />
                <FormControlLabel
                  // value="organizador"
                  control={<Radio />}
                  label="Organizador de Evento"
                />
                <FormControlLabel
                  // value="capitan"
                  control={<Radio />}
                  label="Jugador"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
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
