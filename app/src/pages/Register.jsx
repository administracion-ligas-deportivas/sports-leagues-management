import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Autocomplete,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import {
  GENEROS,
  REGISTER_ADDRESS_FIELDS,
  REGISTER_FORM_FIELDS,
} from "@/constants";

import { useEstados, useRegister } from "@/hooks";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTime } from "luxon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { LoginSignupStyles } from "@/styles";
import { capitalizeFirstLetter } from "@/utils";

function Signup() {
  const { 
    currentEstado,
    watchFechaNacimiento,
    errors, 
    handleSubmit,
    registerField,
    registerUser, 
    selectedMunicipio,
    serverError, 
    setFieldErrors,
    setValue
  } = useRegister();

  const { estados } = useEstados();

  const imageClasses = [
    LoginSignupStyles.container, "hidden", "sm:flex"
  ].join(" ");

  return (
    <section className={[LoginSignupStyles.mainContainerRegister]}>
      <section className={imageClasses}>
        <h1 className={LoginSignupStyles.titleLeague}>
          Administración de Ligas Deportivas
        </h1>
        <img src="/img-login.png" alt="Baseball player swinging a bat" width="300" height="300" />
      </section>
      <form
        onSubmit={handleSubmit(registerUser)}
        className={[LoginSignupStyles.container, LoginSignupStyles.signupContainer].join(" ")}
      >
        <Link to="/login">Iniciar sesión</Link>
        <h1 className={LoginSignupStyles.titlePageSignUp}>Regístrate</h1>

        {REGISTER_FORM_FIELDS.password.map((field) => {
          return (
            <TextField
              key={field.id}
              autoComplete="new-password"
              {...registerField(field)}
              fullWidth
            />
          );
        })}

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="datos-personales"
            id="datos-personales"
          >
            <Typography sx={{ fontWeight: "500" }}>
              Datos personales
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* Primer step */}
            {REGISTER_FORM_FIELDS.text.map((field) => {
              return (
                <TextField
                  key={field?.name}
                  {...registerField(field)}
                  fullWidth
                  sx={{ marginTop: "1.5em" }}
                />
              );
            })}
            <div className={LoginSignupStyles.genderDataContainer}>
              <FormControl>
                <InputLabel id="genero">Género</InputLabel>
                <Select
                  labelId="genero"
                  name="genero"
                  label="Género"
                  {...registerField("genero", { setHelperText: false })}
                >
                  {GENEROS.map((genero) => {
                    const capitalized = capitalizeFirstLetter(genero);
                    return (
                      <MenuItem value={genero} key={genero}>
                        {capitalized}
                      </MenuItem>
                    );
                  })}
                </Select>
                {errors?.genero && (
                  <FormHelperText
                    {...setFieldErrors("genero", { setHelperText: false })}
                  >
                    {errors?.genero?.message}
                  </FormHelperText>
                )}
              </FormControl>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Fecha de nacimiento"
                  inputFormat="DD/MM/YYYY"
                  defaultValue={DateTime.now()}
                  {...registerField("fechaNacimiento")}
                  value={watchFechaNacimiento}
                  onChange={(newValue) => {
                    setValue("fechaNacimiento", newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="direccion"
            id="direccion"
          >
            <Typography sx={{ fontWeight: "500" }}>
              Datos de dirección
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
            <TextField
              {...registerField(
                REGISTER_FORM_FIELDS.address.calle,
              )}
              fullWidth
              sx={{ marginTop: "1.5em" }}
            />
            {
              Object.values(REGISTER_ADDRESS_FIELDS).map((addressProperty, index) => {
                return (
                  <Stack direction="row" spacing={2} sx={{ marginTop: "1.5em" }} key={index}>
                    {
                      addressProperty.map((field) => {
                        return (
                          <TextField
                            {...registerField(field,)}
                            fullWidth
                            key={field?.id}
                          />
                        );
                      })
                    }
                  </Stack>
                );
              })}
          </AccordionDetails>
        </Accordion>

        {serverError && <Alert severity="error">{serverError}</Alert>}

        <Button variant="contained" type="submit">
          Registrar
        </Button>
      </form>
    </section>
  );
}

export default Signup;
