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

  console.log(eventos);

  const rows = eventos?.map((evento) => {
    return {
      id: evento?.id,
      evento: evento?.nombre,
      formatoEventoDeportivo: evento?.formatoEventoDeportivo?.nombre,
    };
  });

  // console.log({ rows });
  // const rows = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  // ];

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
                experimentalFeatures={{ newEditingApi: true }}
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
