import React from "react";
import {
  Button,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import style from "@/styles/EventosDeportivos.module.css";
import { useEventos } from "@/hooks/useEventos";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "evento", headerName: "Evento", width: 230 },
  { field: "formatoEventoDeportivo", headerName: "Formato", width: 230 },
];

export default function EventosDeportivos() {
  const { eventos } = useEventos();

  const rows = eventos?.map((evento) => {
    console.log({ evento });
    return {
      id: evento?.id,
      evento: evento?.nombre,
      formatoEventoDeportivo: evento?.formatoEventoDeportivo?.nombre,
    };
  });

  console.log({ rows });

  return (
    <>
      <div className={style.container}>
        <h1>Eventos deportivos</h1>
        <div className={style.rectangle}>
          <Stack spacing={2} direction="row">
            <div style={{ width: "10%" }}></div>
            <FormGroup>
              <Typography variant="h6">Filtrar por:</Typography>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Futbol"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Softball"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Baseball"
              />
            </FormGroup>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
          </Stack>
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
        </div>
      </div>
    </>
  );
}
