import * as React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
//import Head from "next/head";
//import styles from "../styles/EditarPerfil.module.css";
import styles from "../styles/create-sports-event.module.css";
import Footer from "../components/Footer";
//import UserIcon from "../components/Icon";

/* ----------------------------------- MUI ---------------------------------- */
import { Button, TextField, MenuItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
/* ----------------------------------- MUI TABLE ---------------------------------- */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
/* ----------------------------------- MUI ---------------------------------- */

//import { useParams } from "react-router-dom";
//import axios from "axios";
//import { useEffect, useState } from "react";
import styles from "../styles/EditarPerfil.module.css";
import {
    Button,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
}from "@mui/material";


export default function CrearEventoDeportivo() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const options = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const sports = [
    {
      value: "beisbol",
      label: "Béisbol",
    },
    {
      value: "futbol",
      label: "Fútbol",
    },
    {
      value: "softball",
      label: "Softball",
    },
  ];

  const typeSportsEvent = [
    {
      value: "league",
      label: "Liga",
    },
    {
      value: "tournament",
      label: "Torneo",
    },
  ];

  /*--------------Información para llenar la tabla----------------*/
  function createData(name, email) {
    return { name, email };
  }

  const rows = [
    createData("Equipo alfa buena maravilla", "djkdhjdsjk"),
    createData("Onda dinamita escuadron lobo", "kshjshks"),
  ];
  /*--------------Información para llenar la tabla----------------*/

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titlePage}>Crear evento deportivo</h1>
        <div className={styles.rectangle}>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="sports-event-name"
                label="Nombre del evento deportivo"
                margin="normal"
                // onChange={(event) => setName(event.target.value)}
                // InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="sport"
                select
                label="Deporte"
                margin="normal"
                // value={currency}
                // onChange={handleChange}
                helperText="Selecciona el deporte"
              >
                {sports.map((sports) => (
                  <MenuItem key={sports.value} value={sports.value}>
                    {sports.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="type-of-sports-event"
                select
                label="Tipo de evento"
                margin="normal"
                // value={currency}
                // onChange={handleChange}
                helperText="Selecciona el tipo de evento"
              >
                {typeSportsEvent.map((typeSportsEvent) => (
                  <MenuItem
                    key={typeSportsEvent.value}
                    value={typeSportsEvent.value}
                  >
                    {typeSportsEvent.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="sports-event-format"
                label="Formato para la liga o torneo"
                margin="normal"
                // onChange={(event) => setName(event.target.value)}
                // InputLabelProps={{ shrink: true }}
              />
            </div>
          </div>
          <div className={styles.divButtonA}>
            <Button variant="contained" onClick={handleOpen}>
              Crear equipo
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  Crear equipos
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Para crear un equipo en este evento deportivo, por favor
                  ingrese el nombre del equipo y correo del capitán.
                </Typography>
                <div>
                  <div className={styles.inputModal}>
                    <TextField
                      fullWidth
                      id="team-name-sports-event"
                      label="Nombre del equipo"
                      margin="normal"
                      // onChange={(event) => setName(event.target.value)}
                      // InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <div className={styles.inputModal}>
                    <TextField
                      fullWidth
                      id="captain-email-team-se"
                      label="Correo del capitán de equipo"
                      margin="normal"
                      // onChange={(event) => setName(event.target.value)}
                      // InputLabelProps={{ shrink: true }}
                    />
                  </div>
                  <Stack direction="row" spacing={2} className={styles.buttons}>
                    <Button variant="contained" color="error">
                      Cancelar
                    </Button>
                    <Button variant="contained">Aceptar</Button>
                  </Stack>
                </div>
              </Box>
            </Modal>
          </div>
          <div className={styles.table}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre del equipo</TableCell>
                    <TableCell align="right">Correo del capitán</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          {/*<TextField
            fullWidth
            id="sports-event-name"
            label="Nombre del evento deportivo"
            margin="normal"
            // onChange={(event) => setName(event.target.value)}
            // InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            id="sports"
            select
            label="Deporte"
            margin="normal"
            // value={currency}
            // onChange={handleChange}
            helperText="Selecciona el deporte"
          >
            {sports.map((sports) => (
              <MenuItem key={sports.value} value={sports.value}>
                {sports.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={styles.numTeams}>
          <TextField
            fullWidth
            id="numTeams"
            label="Número de Equipos"
            margin="normal"
            // onChange={(event) => setName(event.target.value)}
            // InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className={styles.fecha}>
          <TextField
            fullWidth
            id="dateStart"
            label="Fecha de inicio"
            margin="normal"
            // onChange={(event) => setName(event.target.value)}
            // InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            id="dateEnd"
            label="Fecha de fin"
            margin="normal"
            // onChange={(event) => setName(event.target.value)}
            // InputLabelProps={{ shrink: true }}
          />
        </div>
        <div className={styles.datos}>
          <TextField
            id="category"
            select
            label="Categoria"
            margin="normal"
            // value={currency}
            // onChange={handleChange}
            helperText="Selecciona la categoria"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            id="referees"
            label="Arbitros"
            margin="normal"
            // onChange={(event) => setName(event.target.value)}
            // InputLabelProps={{ shrink: true }}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="amount"
              // value={values.amount}
              // onChange={handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="cantidad"
            />
          </FormControl>
        </div>
        <div className={styles.rules}>
          <TextField
            fullWidth
            margin="normal"
            id="rules"
            label="Reglas"
            multiline
            rows={5}
            placeholder=" 1.- Regla 1
                        2.- Regla 2 
                        3.- Regla 3"
          />
        </div>}*/}
        </div>
      </div>
      <Footer />
    </>
  );
}
            </div>
        </>
    );
}

