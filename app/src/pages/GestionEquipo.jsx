import * as React from "react";
import styles from "../styles/GestionEquipo.module.css";
/* ----------------------------------- MUI ---------------------------------- */
import { Button, Stack, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
/* ----------------------------------- MUI ---------------------------------- */

export default function GestionEquipo() {
  //Funcion para crear el código de acceso, creo que debería ir en crear evento deportivo, no en la gestión.
  function randomString(length, chars) {
    //Yo creo lo de generar código deberia ir en crear evento no en gestionm, porque el codigo cambiaria. ¿?
    var mask = "";
    if (chars.indexOf("a") > -1) mask += "abcdefghijklmnopqrstuvwxyz";
    if (chars.indexOf("A") > -1) mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (chars.indexOf("#") > -1) mask += "0123456789";
    if (chars.indexOf("!") > -1) mask += "!@#$%&*?/";
    var result = "";
    for (var i = length; i > 0; --i)
      result += mask[Math.floor(Math.random() * mask.length)];
    return result;
  }

  const codigoAcceso = randomString(16, "#aA!");

  const columns = [
    {
      field: "Eliminar",
      width: 90,
      renderCell: () => {
        return (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
    {
      field: "firstName",
      width: 325,
      headerName: "Nombre(s)",
    },
    {
      field: "lastName",
      width: 325,
      headerName: "Apellidos",
    },
  ];

  const rows = [
    { id: 1, lastName: "Rodríguez", firstName: "Ximena" },
    { id: 2, lastName: "Rodríguez", firstName: "Paola" },
    { id: 3, lastName: "Rodríguez", firstName: "Patricia" },
    { id: 4, lastName: "Rodríguez", firstName: "José" },
    { id: 5, lastName: "Rodríguez", firstName: "Ximena" },
    { id: 6, lastName: "Rodríguez", firstName: "Paola" },
    { id: 7, lastName: "Rodríguez", firstName: "Patricia" },
    { id: 8, lastName: "Rodríguez", firstName: "José" },
  ];

  return (
    <>
      <section className="container mx-auto py-2">
        <Stack className={styles.container}>
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
              <Stack className={styles.input}>
                <TextField
                  fullWidth
                  //disabled
                  id="sports-event-sp"
                  label="Código de acceso"
                  margin="normal"
                  value={codigoAcceso}
                  InputLabelProps={{ shrink: true }}
                />
              </Stack>
            </div>
            <div style={{ height: 320, width: "100%" }} className={styles.table}>
              <Typography variant="h6" gutterBottom>
                Miembros del equipo:
              </Typography>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={4}
                rowsPerPageOptions={[4]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
              />
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
        </Stack>
      </section>
    </>
  );
}
