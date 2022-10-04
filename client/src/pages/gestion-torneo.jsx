
import styles from "../styles/GestionTorneo.module.css";
//import InputCode from "../components/InputCode/index";

/* ----------------------------------- MUI ---------------------------------- */
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";

import Jugador from "./../components/Jugador/index";
//import { useParams } from "react-router-dom";
//import axios from "axios";
//import { useEffect, useState } from "react";

export default function GestionTorneo() {
  return (
    <>
      <section className="container mx-auto py-2">
        <div className={styles.container}>
          <div>
            <h1 className={styles.titlePage}>Gestión evento deportivo</h1>
          </div>
          <div className={styles.rectangle}>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="sports-event-name"
                  label="Nombre"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="sports-event-sp"
                  label="Deporte"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.playersContainer}>
                Componente de jugadores
                <Jugador playerName="kdjskj">
                </Jugador>
                {/*<Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />*/}
              </div>
              <div className={styles.playersContainer}>
                Componente de jugadores
                {/*<Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />*/}
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="sports-event-type"
                  label="Tipo de evento"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  disabled
                  id="sports-event-name"
                  label="Nombre"
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.codeContainer}>
              {/*<InputCode
              titleU="Código de acceso"
              nameU="accessCode"
              placeholderU="Código"
              contentU="Generar código"
            />*/}
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttonsSingleDiv}>
                <Button variant="contained" color="error">
                  Cancelar
                </Button>
              </div>
              <Button variant="contained">Aceptar</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
