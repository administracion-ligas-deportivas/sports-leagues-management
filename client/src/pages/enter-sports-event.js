import "@fortawesome/fontawesome-svg-core/styles.css";

//import Head from "next/head";
import styles from "../styles/EnterSportsEvent.module.css";
import {
  Button,
  TextField
}from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { 
  useEffect, 
  useState 
} from "react";

function EnterSportsEvent() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.titlePage}>Nombre del equipo</h1>
          <div className={styles.containerForm}>
            <p className={styles.description}>
              Ingreso a liga/torneo: <br /> Por favor ingrese el código que le
              haya brindado el organizador del evento.
            </p>
            <div className={styles.form}>
              <TextField
                fullWidth
                margin="normal"
                id="codigoAcceso"
                label="Código de acceso"
                variant="outlined"
              />
              <Button variant="contained" className={styles.Button}>
                Ingresar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnterSportsEvent;
