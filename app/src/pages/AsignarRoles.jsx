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
//import {AuthContext} from '../helpers/AuthContext';
import styles from "@/styles/AsignarRoles.module.css";

export default function AsignarRoles() {
  const usuarios = [
    { label: "Jesús Jiménez", id: 1 },
    { label: "Juan Pérez", id: 2 },
    { label: "Pedro García", id: 3 },
    { label: "Luisa López", id: 4 },
    { label: "María Martínez", id: 5 },
    { label: "Ana Sánchez", id: 6 },
    { label: "Javier Rodríguez", id: 7 },
    { label: "Sara Fernández", id: 8 },
    { label: "Miguel Hernández", id: 9 },
    { label: "Laura Gómez", id: 10 },
  ];

  return (
    <>
      <div className={styles.container}>
        <h1>Asignar Roles</h1>
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
              // options={usuarios.map((option) => option.title)}
              options={usuarios}
              renderInput={(params) => (
                <TextField {...params} label="Buscar Usuario" />
              )}
            />
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="jugador"
                  control={<Radio />}
                  label="Jugador"
                />
                <FormControlLabel
                  value="organizador"
                  control={<Radio />}
                  label="Organizador de Evento"
                />
                <FormControlLabel
                  value="capitan"
                  control={<Radio />}
                  label="Capitán"
                />
                <FormControlLabel
                  value="estadistico"
                  control={<Radio />}
                  label="Estadístico"
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
