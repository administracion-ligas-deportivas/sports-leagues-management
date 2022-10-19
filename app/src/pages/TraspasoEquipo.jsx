import React from "react";
import {
  Button,
  Typography,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "../styles/TraspasoEquipo.module.css";

export default function TraspasoEquipo() {
  const equipos = [
    { label: "Equipo A", id: 1 },
    { label: "Equipo B", id: 2 },
    { label: "Equipo C", id: 3 },
    { label: "Equipo D", id: 4 },
    { label: "Equipo E", id: 5 },
    { label: "Equipo F", id: 6 },
    { label: "Equipo G", id: 7 },
    { label: "Equipo H", id: 8 },
    { label: "Equipo I", id: 9 },
    { label: "Equipo J", id: 10 },
  ];

  const eventoActual = [
    { label: "Evento A", id: 1 },
    { label: "Evento B", id: 2 },
    { label: "Evento C", id: 3 },
    { label: "Evento D", id: 4 },
    { label: "Evento E", id: 5 },
    { label: "Evento F", id: 6 },
    { label: "Evento G", id: 7 },
    { label: "Evento H", id: 8 },
    { label: "Evento I", id: 9 },
    { label: "Evento J", id: 10 },
  ];

  const eventoNuevo = [
    { label: "Evento A", id: 1 },
    { label: "Evento B", id: 2 },
    { label: "Evento C", id: 3 },
    { label: "Evento D", id: 4 },
    { label: "Evento E", id: 5 },
    { label: "Evento F", id: 6 },
    { label: "Evento G", id: 7 },
    { label: "Evento H", id: 8 },
    { label: "Evento I", id: 9 },
    { label: "Evento J", id: 10 },
  ];

  return (
    <>
      <div className={style.container}>
        <h1>Traspaso de equipo</h1>
        <Stack spacing={2} className={style.rectangle}>
          <Typography>
            {" "}
            Por favor seleccione el equipo, evento actual y evento deportivo que
            quiere asignar.{" "}
          </Typography>
          <div>
            <Stack direction="row" spacing={10}>
              <Autocomplete
                fullWidth
                id="buscar-equipo"
                //sx={{ width: 1000 }}
                // options={usuarios.map((option) => option.title)}
                options={equipos}
                renderInput={(params) => (
                  <TextField {...params} label="Buscar equipo" />
                )}
              />
            </Stack>
          </div>
          <div className={style.autoc}>
            <Stack direction="row" spacing={10} >
              <Autocomplete
                fullWidth
                id="evento-actual"
                //sx={{ width: 1000 }}
                // options={usuarios.map((option) => option.title)}
                options={eventoActual}
                renderInput={(params) => (
                  <TextField {...params} label="Evento actual" />
                )}
              />
            </Stack>
            <Stack direction="row" spacing={10}>
              <Autocomplete
                fullWidth
                id="nuevo-evento"
                //sx={{ width: 1000 }}
                // options={usuarios.map((option) => option.title)}
                options={eventoNuevo}
                renderInput={(params) => (
                  <TextField {...params} label="Nuevo evento" />
                )}
              />
            </Stack>
          </div>
          <div className={style.buttons}>
            <div>
              <Button variant="contained">
              Aceptar
              </Button>
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
