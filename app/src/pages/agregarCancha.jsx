import React from "react";
import { Button, Stack, Autocomplete, TextField } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "@/styles/AgregarCancha.module.css";
import { useDeportivos } from "@/hooks/useDeportivos";

export default function AgregarCancha() {
  // const canchas = [
  //   { label: "Cancha 1", id: 1 },
  //   { label: "Cancha 2", id: 2 },
  //   { label: "Cancha 3", id: 3 },
  //   { label: "Cancha 4", id: 4 },
  //   { label: "Cancha 5", id: 5 },
  // ];

  const { deportivos } = useDeportivos();
  const dep = deportivos?.map((deportivo) => {
    return {
      id: deportivo?.id,
      nombre: deportivo?.nombre,
    };
  });

  return (
    <>
      <div className={style.container}>
        <h1>Registro de canchas</h1>
        <Stack className={style.rectangle}>
          <Stack direction="row" spacing={2}>
            <div className={style.input}>
              <Autocomplete
                id="buscar-usuario"
                fullWidth
                // size="small"
                options={dep.map((option) => option.nombre)}
                renderInput={(params) => (
                  <TextField {...params} label="Deportivo" />
                )}
                margin="normal"
              />
            </div>
            <div className={style.input}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Número de cancha"
                variant="outlined"
                // margin="normal"
                // size="small"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <div className={style.input}>
              <TextField
                // fullWidth
                id="outlined-basic"
                label="Número de cancha"
                variant="outlined"
                sx={{ width: "49%" }}
                margin="normal"
                // size="small"
              />
            </div>
          </Stack>
          <div className={style.flexContainer}>
            <div className={style.input}>
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
          <div className={style.buttons}>
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
