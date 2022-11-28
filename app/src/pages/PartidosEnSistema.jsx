import React from "react";
import style from "@/styles/Home.module.css";
import { Typography, Box} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function PartidosEnSistema() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fecha',
      headerName: 'Fecha',
      width: 100,
    },
    {
      field: 'duracion_partido',
      headerName: 'Duración del partido',
      width: 150,
    },
    {
      field: 'efectuado',
      headerName: 'Efectuado',
      width: 90,
    },
    {
      field: 'cancelado',
      headerName: 'Cancelado',
      width: 90,
    },
    {
      field: 'cancha_id',
      headerName: 'Cancha',
      type: 'number',
      width: 60,
    },
    {
      field: 'evento_deportivo_id',
      headerName: 'Evento deportivo',
      type: 'number',
      width: 60,
    },
    {
      field: 'estadistico',
      headerName: 'Estadístico',
      width: 110,
    }
  ];
  
  const rows = [ /* Ejemplo */
    { id: 1, lastName: 'Snow', nombrePartido: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', nombrePartido: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', nombrePartido: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', nombrePartido: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', nombrePartido: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', nombrePartido: null, age: 150 },
    { id: 7, lastName: 'Clifford', nombrePartido: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', nombrePartido: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', nombrePartido: 'Harvey', age: 65 },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Partidos en el sistema</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={style.rectangle}>
              <Typography> Actualmente, los partidos que existen en el sistema son: </Typography>
              <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  experimentalFeatures={{ newEditingApi: true }}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartidosEnSistema;
