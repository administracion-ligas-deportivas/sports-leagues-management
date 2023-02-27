import React from "react";
import { Button, Stack, TextField } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import styles from "@/styles/RegistroDeportivo.module.css";
import { createDeportivo } from "@/services/deportivos";
import { useState } from "react";
import { useEffect } from "react";

export default function RegistroDeportivo() {
  // const deportivoFields = {
  //   calle: {
  //     id: "user-input-calle",
  //     type: "text",
  //     name: "calle",
  //     label: "Calle",
  //   },
  // };

  // const {
  //   calle,
  //   colonia,
  //   codigoPostal,
  //   numeroExterior,
  //   numeroInterior,
  //   municipioId,
  //   ...rest
  // } = deportivoData;

  // const user = {
  //   ...rest,
  //   deportivo: {
  //     calle,
  //     colonia,
  //     codigoPostal,
  //     numeroExterior,
  //     numeroInterior,
  //     municipioId,
  //   },
  // };

  // const setFieldErrors = (prop, { setHelperText = true } = {}) => {
  //   if (!errors[prop]) return null;

  //   const hasProp = Object.hasOwn(errors, prop);

  //   if (!hasProp) return null;

  //   const props = {
  //     error: hasProp,
  //   };

  //   if (setHelperText) {
  //     props.helperText = errors?.[prop]?.message ?? null;
  //   }

  //   return props;
  // };

  // const register = (prop, { setErrors = true, setHelperText = true } = {}) => {
  //   const fieldErrors = setErrors
  //     ? { ...setFieldErrors(prop, { setHelperText }) }
  //     : null;

  //   return { ...registerProp(prop), ...fieldErrors };
  // };

  return (
    <>
      <div className={styles.container}>
        <h1>Registro de deportivo</h1>
        <Stack spacing={2} className={styles.rectangle}>
          <form>
            <div className={styles.flexContainer}>
            <div className={styles.input}>
                <TextField
                  // {...deportivoFields.calle}
                  // {...register("calle")}
                  fullWidth
                  id="nombre-deportivo"
                  label="Nombre del deportivo"
                  //placeholder="Tipo de evento deportivo"
                  //value={}
                  margin="normal"
                  //onChange={(event) => setName(event.target.value)}
                  //InputLabelProps={{ shrink: true }}
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  id="calle"
                  label="Calle"
                  //placeholder="Tipo de evento deportivo"
                  //value={}
                  margin="normal"
                  //onChange={(event) => setName(event.target.value)}
                  //InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  // size="small"
                  id="colonia"
                  label="Colonia"
                  //value={}
                  //onChange={}
                  //InputLabelProps={{ shrink: true }}
                  margin="normal"
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  // size="small"
                  id="codigo-postal"
                  label="Código postal"
                  //placeholder="Tipo de evento deportivo"
                  //value={}
                  margin="normal"
                  //onChange={(event) => setName(event.target.value)}
                  //InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  // size="small"
                  id="numero-exterior"
                  label="Número exterior"
                  //value={}
                  //onChange={}
                  //InputLabelProps={{ shrink: true }}
                  margin="normal"
                />
              </div>
              <div className={styles.input}>
                <TextField
                  fullWidth
                  id="numero-interior"
                  label="Número interior"
                  //placeholder=""
                  //value={}
                  margin="normal"
                  //onChange={(event) => setName(event.target.value)}
                  //InputLabelProps={{ shrink: true }}
                />
              </div>
            </div>
            <div className={styles.buttons}>
              <div>
                <Button variant="contained">Aceptar</Button>
              </div>
              <div>
                <Button variant="contained" color="error">
                  Cancelar
                </Button>
              </div>
            </div>
          </form>
        </Stack>
      </div>
    </>
  );
}
