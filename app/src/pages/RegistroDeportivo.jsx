import React from "react";
import { Autocomplete, Button, Stack, TextField, Alert } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import styles from "@/styles/RegistroDeportivo.module.css";
import { createDeportivo } from "@/services/deportivos";
import { useState } from "react";
import { useEffect } from "react";
import { REGISTER_FORM_FIELDS,
} from "@/constants";
import {  useDep } from "@/hooks/useDep"
import { useEstados } from "@/hooks";


export default function RegistroDeportivo() {
  const { 
    currentEstado,
    errors, 
    handleSubmit,
    registerField,
    selectedMunicipio,
    registerDep,
    serverError, 
    setFieldErrors,
    setValue
  } = useDep();

  const { estados } = useEstados();

  return (
    <>
      <div className={styles.container}>
        <h1>Registro de deportivo</h1>
        <Stack spacing={2} className={styles.rectangle}>
          <form onSubmit={handleSubmit(registerDep)}>
            <div className={styles.flexContainer}>
              <div className={styles.input}>
              <TextField
                {...registerField(
                REGISTER_FORM_FIELDS.deportivo.nombre)} 
                key={REGISTER_FORM_FIELDS.deportivo.nombre.id}
                fullWidth
                margin="normal"
              />
              </div>
              <div className={styles.input}>
              <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.deportivo.calle)} 
                key={REGISTER_FORM_FIELDS.deportivo.calle.id}
                fullWidth
                margin="normal"
              />
              </div>
            </div>
            <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.deportivo.colonia)} 
                key={REGISTER_FORM_FIELDS.deportivo.colonia.id}
                fullWidth
                margin="normal"
              />
              </div>
              <div className={styles.input}>
              <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.deportivo.codigoPostal)}
                key={REGISTER_FORM_FIELDS.deportivo.codigoPostal.id} 
                fullWidth
                margin="normal"
              />
              </div>
            </div>
            <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.deportivo.numeroExterior)}
                key={REGISTER_FORM_FIELDS.deportivo.numeroExterior.id} 
                fullWidth
                margin="normal"
              />
              </div>
              <div className={styles.input}>
              <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.deportivo.numeroInterior)}
                key={REGISTER_FORM_FIELDS.deportivo.numeroInterior.id} 
                fullWidth
                margin="normal"
              />
              </div>
            </div>
            <Stack direction="row" spacing={2}>
              <Autocomplete
                {...registerField(
                  REGISTER_FORM_FIELDS.address.estado.id,
                  { setErrors: false }
                )}
                fullWidth
                options={estados}
                getOptionLabel={(option) => option.nombre}
                onChange={(event, newValue) => {
                  console.log({ newValue });
                  setValue(REGISTER_FORM_FIELDS.address.estado.id, newValue?.id);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={REGISTER_FORM_FIELDS.address.estado.label}
                    {...setFieldErrors(
                      REGISTER_FORM_FIELDS.address.estado.id
                    )}
                  />
                )}
              />
              <Autocomplete
                {...registerField(
                  REGISTER_FORM_FIELDS.address.municipio.id, 
                  { setErrors: false }
                )}
                onChange={(event, newValue) => {
                  console.log({ municipio: newValue });
                  setValue(REGISTER_FORM_FIELDS.address.municipio.id, newValue?.id);
                }}
                fullWidth
                value={selectedMunicipio}
                options={currentEstado?.municipios || []}
                getOptionLabel={(option) => option?.nombre}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={REGISTER_FORM_FIELDS.address.municipio.label}
                    {...setFieldErrors(
                      REGISTER_FORM_FIELDS.address.municipio.id
                    )}
                  />
                )}
              />
            </Stack>
            {serverError && <Alert severity="error">{serverError}</Alert>}
            <div className={styles.buttons}>
              <div>
                <Button variant="contained" type="submit">Aceptar</Button>
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
