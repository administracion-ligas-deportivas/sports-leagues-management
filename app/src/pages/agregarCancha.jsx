import React from "react";
import { Button, Stack, Autocomplete, TextField, Alert} from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "@/styles/AgregarCancha.module.css";
import { useDeportivos } from "@/hooks/useDeportivos";
import { REGISTER_FORM_FIELDS } from "@/constants";
import { useCanchas } from "@/hooks/useCanchas";
import { width } from "@mui/system";
// import { canchasSchema } from "@/validations/canchasSchema";

export default function AgregarCancha() {
  const { 
    errors, 
    handleSubmit,
    registerField,
    registerCan,
    serverError, 
    setFieldErrors,
    setValue
  } = useCanchas();
  // const canchas = [
  //   { label: "Cancha 1", id: 1 },
  //   { label: "Cancha 2", id: 2 },
  //   { label: "Cancha 3", id: 3 },
  //   { label: "Cancha 4", id: 4 },
  //   { label: "Cancha 5", id: 5 },
  // ];

  const { deportivos } = useDeportivos();
  // const dep = deportivos?.map((deportivo) => {
  //   return {
  //     id: deportivo?.id,
  //     nombre: deportivo?.nombre,
  //   };
  // });

  return (
    <>
      <div className={style.container}>
        <h1>Registro de canchas</h1>
        <Stack className={style.rectangle}>
          <form onSubmit={handleSubmit(registerCan)}>
          <Stack direction="row" spacing={2}>
            <div className={style.input}>
              <TextField
                {...registerField(
                REGISTER_FORM_FIELDS.cancha.nombre)} 
                key={REGISTER_FORM_FIELDS.cancha.nombre.id}
                fullWidth
                // margin="normal"
              />
              {/* <Autocomplete
                id="buscar-usuario"
                fullWidth
                // size="small"
                options={dep.map((option) => option.nombre)}
                renderInput={(params) => (
                  <TextField {...params} label="Deportivo" />
                )}
                margin="normal"
              /> */}
            </div>
            <div className={style.input}>
            <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.cancha.numero)} 
                key={REGISTER_FORM_FIELDS.cancha.numero.id}
                fullWidth
                // margin="normal"
            />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
          <Autocomplete
                {...registerField(
                  REGISTER_FORM_FIELDS.cancha.deportivo.id,
                  { setErrors: false }
                )}
                fullWidth
                options={deportivos}
                getOptionLabel={(option) => option.nombre}
                onChange={(event, newValue) => {
                  console.log({ newValue });
                  setValue(REGISTER_FORM_FIELDS.cancha.deportivo.id, newValue?.id);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={REGISTER_FORM_FIELDS.cancha.deportivo.label}
                    {...setFieldErrors(
                      REGISTER_FORM_FIELDS.cancha.deportivo.id
                    )}
                    margin="normal"
                    sx={{ width: "49%" }}
                  />
                )}
              />
          </Stack>
          <div className={style.flexContainer}>
            <div className={style.input}>
              <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.cancha.descripcion)}
                key={REGISTER_FORM_FIELDS.cancha.descripcion.id} 
                multiline
                rows={5}
                sx={{ marginTop: "5px" }}
                fullWidth
              />
            </div>
          </div>
          {serverError && <Alert severity="error">{serverError}</Alert>}
          <div className={style.buttons}>
            <div>
              <Button variant="contained" type="submit">Guardar</Button>
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
