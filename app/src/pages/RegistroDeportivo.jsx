import { 
  Alert, 
  Autocomplete, 
  Button, 
  Stack, 
  TextField 
} from "@mui/material";
// import {AuthContext} from '../helpers/AuthContext';
import { DEPORTIVOS_FORM_FIELDS, REGISTER_FORM_FIELDS } from "@/constants";
import {  useDeportivosForm, useEstados } from "@/hooks";
import { RegistroDeportivoStyles } from "@/styles";

export default function RegistroDeportivo() {
  const { 
    currentEstado,
    errors, 
    handleSubmit,
    registerField,
    selectedMunicipio,
    registerDeportivo,
    serverError, 
    setFieldErrors,
    setValue
  } = useDeportivosForm();

  const { estados } = useEstados();

  return (
    <>
      <div className={RegistroDeportivoStyles.container}>
        <h1>Registro de deportivo</h1>
        <Stack spacing={2} className={RegistroDeportivoStyles.rectangle}>
          <form onSubmit={handleSubmit(registerDeportivo)}>
            <div className={RegistroDeportivoStyles.flexContainer}>
              <div className={RegistroDeportivoStyles.input}>
                <TextField
                  {...registerField(
                    DEPORTIVOS_FORM_FIELDS.nombre)} 
                  key={DEPORTIVOS_FORM_FIELDS.nombre.id}
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className={RegistroDeportivoStyles.input}>
                <TextField
                  {...registerField(
                    DEPORTIVOS_FORM_FIELDS.calle)} 
                  key={DEPORTIVOS_FORM_FIELDS.calle.id}
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
            <div className={RegistroDeportivoStyles.flexContainer}>
              <div className={RegistroDeportivoStyles.input}>
                <TextField
                  {...registerField(
                    DEPORTIVOS_FORM_FIELDS.colonia)} 
                  key={DEPORTIVOS_FORM_FIELDS.colonia.id}
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className={RegistroDeportivoStyles.input}>
                <TextField
                  {...registerField(
                    DEPORTIVOS_FORM_FIELDS.codigoPostal)}
                  key={DEPORTIVOS_FORM_FIELDS.codigoPostal.id} 
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
            <div className={RegistroDeportivoStyles.flexContainer}>
              <div className={RegistroDeportivoStyles.input}>
                <TextField
                  {...registerField(
                    DEPORTIVOS_FORM_FIELDS.numeroExterior)}
                  key={DEPORTIVOS_FORM_FIELDS.numeroExterior.id} 
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className={RegistroDeportivoStyles.input}>
                <TextField
                  {...registerField(
                    DEPORTIVOS_FORM_FIELDS.numeroInterior)}
                  key={DEPORTIVOS_FORM_FIELDS.numeroInterior.id} 
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
            <div className={RegistroDeportivoStyles.buttons}>
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
