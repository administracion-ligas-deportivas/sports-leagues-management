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
import style from "../styles/EventosDeportivos.module.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "evento", headerName: "Evento", width: 130 },
  { field: "deporte", headerName: "Deporte", width: 130 },
];

const rows = [
  { id: 1, evento: "Snow", deporte: "Jon" },
  { id: 2, evento: "Lannister", deporte: "Cersei" },
  { id: 3, evento: "Lannister", deporte: "Jaime" },
  { id: 4, evento: "Stark", deporte: "Arya" },
  { id: 5, evento: "Targaryen", deporte: "Daenerys" },
  { id: 6, evento: "Melisandre", deporte: null },
  { id: 7, evento: "Clifford", deporte: "Ferrara" },
  { id: 8, evento: "Frances", deporte: "Rossini" },
  { id: 9, evento: "Roxie", deporte: "Harvey" },
];

export default function EventosDeportivos() {
  return (
    <>
      <div className={style.container}>
        <h1>Eventos Deportivos</h1>
        <div className={style.rectangle}>
          <Stack spacing={2} direction="row">
            <div style={{ width: "20%" }}></div>
            <FormGroup sx={{ width: "70%" }}>
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
