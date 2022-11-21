import * as React from "react";
import styles from "../styles/GestionEquipo.module.css";
/* ----------------------------------- MUI ---------------------------------- */
import { Button, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
/* ----------------------------------- MUI ---------------------------------- */
import { useJugadores } from "@/hooks/useJugadores";

export default function GestionEquipoJugador() {
  const { jugadores, deleteJugador } = useJugadores();

  const columns = [
    {
      field: "nombre",
      width: 325,
      headerName: "Nombre(s)",
    },
    {
      field: "apellido",
      width: 325,
      headerName: "Apellidos",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <Stack>
          <h1 className={styles.titlePage}>Gestión de equipo</h1>
        </Stack>
        <Stack className={styles.rectangle}>
          <div className={styles.flexContainer}>
            <Stack className={styles.input}>
              <TextField
                fullWidth
                disabled
                id="nombre-equipo"
                label="Nombre del equipo"
                margin="normal"
                // InputLabelProps={{ shrink: true }}
              />
            </Stack>
            <Stack className={styles.input}>
              <TextField
                fullWidth
                disabled
                id="deporte-equipo"
                label="Deporte"
                margin="normal"
                // InputLabelProps={{ shrink: true }}
              />
            </Stack>
          </div>
          <div className={styles.flexContainer}>
            <Stack className={styles.input}>
              <TextField
                fullWidth
                disabled
                id="capitan-equipo"
                label="Capitán del equipo"
                margin="normal"
                // InputLabelProps={{ shrink: true }}
              />
            </Stack>
            {/* <Stack className={styles.input}> 
                <TextField
                  fullWidth
                  //disabled
                  id="sports-event-sp"
                  label="Código de acceso"
                  margin="normal"
                  value={codigoAcceso}
                  InputLabelProps={{ shrink: true }}
                />
              {/* </Stack> */}
          </div>
          <div style={{ height: 320, width: "100%" }} className={styles.table}>
            <Typography variant="h6" gutterBottom>
              Miembros del equipo:
            </Typography>
            <DataGrid
              rows={jugadores}
              columns={columns}
              pageSize={4}
              rowsPerPageOptions={[4]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </div>
          <div className={styles.contenedorAbandonar}>
            <Typography variant="h6" gutterBottom>
              Abandonar equipo.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Presiona el botón de abandonar, para dejar de ser parte de este
              equipo. Una vez completado el proceso, ya no formaras parte del
              equipo, de querer volver a el será necesario solicitar ser añadido
              al mismo de nuevo.
            </Typography>
            <Button
              variant="outlined"
              startIcon={<DirectionsRunIcon />}
              // size="small"
              color="error"
            >
              Abandonar
            </Button>
          </div>
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
