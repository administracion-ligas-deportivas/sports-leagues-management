import React from "react";
import {
  Button,
  Typography,
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import style from "@/styles/TraspasoEquipo.module.css";
import { useEquipos } from "@/hooks/useEquipos";
import { useEventos } from "@/hooks/useEventos";

export default function TraspasoEquipo() {
  const { equipos } = useEquipos();
  const { eventos } = useEventos();

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
                options={equipos.map((option) => option.nombre)}
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
                options={eventos.map((option) => option.nombre)}
                renderInput={(params) => (
                  <TextField {...params} label="Evento actual" />
                )}
              />
            </Stack>
            <Stack direction="row" spacing={10}>
              <Autocomplete
                fullWidth
                id="nuevo-evento"
                options={eventos.map((option) => option.nombre)}
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
