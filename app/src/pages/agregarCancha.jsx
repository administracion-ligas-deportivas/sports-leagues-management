import { Alert, Autocomplete, Button, Stack, TextField } from "@mui/material";
// import {AuthContext} from '../helpers/AuthContext';
import { AgregarCanchaStyles } from "@/styles";
import { useDeportivos } from "@/hooks/useDeportivos";
import { CANCHAS_FORM_FIELDS } from "@/constants";
import { useCanchas } from "@/hooks/useCanchas";
import { width } from "@mui/system";
import { Link } from "react-router-dom";
// import { canchasSchema } from "@/validations/canchasSchema";

export default function AgregarCancha() {
  const { 
    errors, 
    handleSubmit,
    registerField,
    registerCancha,
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
  // const dep = deportivos?.map((deportivoId) => {
  //   return {
  //     id: deportivoId?.id,
  //     nombre: deportivoId?.nombre,
  //   };
  // });

  return (
    <div className={AgregarCanchaStyles.container}>
      <h1>Registro de canchas</h1>
      {
        Boolean(deportivos?.length) === false && (
          <>
            <Alert severity="error">
                No se encontraron deportivos. Crea un deportivoId para añadir sus canchas.
            </Alert>
            <Link to="/registro-deportivoId" >Registrar deportivoId</Link>
          </>  
        )
      }
      <Stack className={AgregarCanchaStyles.rectangle}>
        <form onSubmit={handleSubmit(registerCancha)}>
          <Stack direction="row" spacing={2}>
            <div className={AgregarCanchaStyles.input}>
              <TextField
                {...registerField(CANCHAS_FORM_FIELDS.nombre)} 
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
            <div className={AgregarCanchaStyles.input}>
              <TextField
                {...registerField(
                  CANCHAS_FORM_FIELDS.numero)} 
                key={CANCHAS_FORM_FIELDS.numero.id}
                fullWidth
                // margin="normal"
              />
            </div>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              {...registerField(
                CANCHAS_FORM_FIELDS.deportivoId.id,
                { setErrors: false }
              )}
              fullWidth
              options={deportivos}
              getOptionLabel={(option) => option.nombre}
              onChange={(event, newValue) => {
                console.log({ newValue });
                setValue(CANCHAS_FORM_FIELDS.deportivoId.id, newValue?.id);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={CANCHAS_FORM_FIELDS.deportivoId.label}
                  {...setFieldErrors(
                    CANCHAS_FORM_FIELDS.deportivoId.id
                  )}
                  margin="normal"
                  sx={{ width: "49%" }}
                />
              )}
            />
          </Stack>
          <div className={AgregarCanchaStyles.flexContainer}>
            <div className={AgregarCanchaStyles.input}>
              <TextField
                {...registerField(
                  CANCHAS_FORM_FIELDS.descripcion)}
                key={CANCHAS_FORM_FIELDS.descripcion.id} 
                multiline
                rows={5}
                sx={{ marginTop: "5px" }}
                fullWidth
              />
            </div>
          </div>
          {serverError && <Alert severity="error">{serverError}</Alert>}
          <div className={AgregarCanchaStyles.buttons}>
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
  );
}
