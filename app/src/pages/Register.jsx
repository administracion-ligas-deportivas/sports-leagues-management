import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "@/services/usuarios";

import {
  TextField,
  Button,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Autocomplete,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTime } from "luxon";
import { yupResolver } from "@hookform/resolvers/yup";

import myimg from "/img-login.png";
import styles from "@/styles/LoginSignup.module.css";
import { registerSchema } from "@/validations/registerSchema";
import { useState } from "react";
import { useEstados } from "@/hooks/useEstados";
import { useEffect } from "react";
import { GENEROS } from "@/constants/usuario";
import { capitalizeFirstLetter } from "@/utils/capitalize";

function Signup() {
  const {
    register: registerProp,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setError,
    // https://react-hook-form.com/api/useform/setvalue
    setValue,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate();
  const watchEstadoId = watch("estadoId");
  const watchMunicipioId = watch("municipioId");
  const { estados, currentEstado, findMunicipiosEstado, resetCurrentEstado } =
    useEstados();
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (!watchEstadoId) {
      resetCurrentEstado();
      setSelectedMunicipio(null);
      return;
    }

    findMunicipiosEstado(watchEstadoId);
    setValue("municipioId", null);
  }, [watchEstadoId]);

  useEffect(() => {
    if (!watchMunicipioId && !currentEstado?.municipios) {
      setSelectedMunicipio(null);
      return;
    }

    const newSelectedMunicipio = currentEstado?.municipios.find(
      (municipio) => municipio.id === watchMunicipioId
    );

    setSelectedMunicipio(newSelectedMunicipio ?? null);
  }, [watchMunicipioId]);

  const registerUser = async (userData) => {
    console.log({ userData });
    if (userData.password !== userData.confirmPassword) {
      setError("confirmPassword", {
        type: "focus",
        message: "Las contraseñas no coinciden",
      });
      return;
    }

    createUser(userData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setServerError(error);
      });
  };

  const setFieldErrors = (prop) => {
    if (!errors[prop]) return null;

    return {
      error: errors?.[prop],
      helperText: errors?.[prop]?.message,
    };
  };

  const register = (prop) => {
    return { ...registerProp(prop), ...setFieldErrors(prop) };
  };

  const imageClasses = [styles.container, "hidden", "sm:flex"].join(" ");

  return (
    <div className="flex flex-col justify-between h-full">
      <section className={[styles.mainContainerRegister]}>
        <section className={imageClasses}>
          <h1 className={styles.titleLeague}>
            Administración de Ligas Deportivas
          </h1>
          <img src={myimg} alt="Register_image" width="300px" height="300px" />
        </section>
        <form
          onSubmit={handleSubmit(registerUser)}
          className={[styles.container, styles.loginContainer].join(" ")}
        >
          <Link to="/login">Inicia sesión</Link>
          <h1 className={styles.titlePage}>Registro</h1>

          {/*TextField para los nombres*/}
          <TextField
            id="user-input-pass"
            name="nombre"
            label="Nombre(s)"
            {...register("nombre")}
          />

          {/*TextField para los apellidos*/}
          <TextField
            id="user-input-pass"
            name="apellido"
            label="Apellido(s)"
            {...register("apellido")}
          />

          {/*TextField para el correo*/}
          <TextField
            id="user-input-pass"
            name="correo"
            label="Correo"
            {...register("correo")}
          />

          {/*TextField para el teléfono*/}
          <TextField
            id="user-input"
            type="tel"
            name="telefono"
            label="Teléfono"
            {...register("telefono")}
          />

          <div className={styles.genderDataContainer}>
            {/*TextField para el fecha de nacimiento*/}
            {/*<DesktopDatePicker
            disabled
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            />*/}

            {/*TextField para el género*/}

            <FormControl>
              <InputLabel id="select-genero">Género</InputLabel>
              <Select
                labelId="select-genero"
                name="genero"
                label="Género"
                {...register("genero")}
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
                <FormHelperText {...setFieldErrors("genero")}>
                  {errors?.genero?.message}
                </FormHelperText>
              )}
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date desktop"
                inputFormat="DD/MM/YYYY"
                defaultValue={DateTime.now()}
                {...register("fechaNacimiento")}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          {/*TextField para contraseña*/}
          <TextField
            id="user-input-pass"
            type="password"
            name="password"
            label="Contraseña"
            {...register("password")}
          />

          {/*TextField para confirmar contraseña */}
          <TextField
            id="user-input-pass"
            type="password"
            name="password"
            label="Confirmar contraseña"
            {...register("confirmPassword", {
              // validate: (value) => value === watch("password"),
            })}
          />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="direccion"
              id="direccion"
            >
              <Typography> Dirección </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={2}>
                <Autocomplete
                  {...register("estadoId")}
                  fullWidth
                  id="buscar-estadoId"
                  options={estados}
                  getOptionLabel={(option) => option.nombre}
                  onChange={(event, newValue) => {
                    console.log({ newValue });
                    setValue("estadoId", newValue?.id);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Selecciona un estado"
                      {...setFieldErrors("estadoId")}
                    />
                  )}
                />

                <Autocomplete
                  {...register("municipioId")}
                  onChange={(event, newValue) => {
                    console.log({ municipio: newValue });
                    setValue("municipioId", newValue?.id);
                  }}
                  fullWidth
                  id="buscar-municipio"
                  // onInputChange={(event, newInputValue) => {}}
                  // isOptionEqualToValue={(option, value) => {
                  //   const municipioId = getValues("municipioId");
                  //   console.log({ municipioId, option });
                  //   return option.id === getValues("municipioId");
                  // }}
                  value={selectedMunicipio}
                  options={currentEstado?.municipios || []}
                  getOptionLabel={(option) => option?.nombre}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Selecciona un municipio"
                      {...setFieldErrors("municipioId")}
                    />
                  )}
                />
              </Stack>
              <TextField
                {...register("calle")}
                fullWidth
                id="user-input-calle"
                type="text"
                name="calle"
                label="Calle"
              />
              <Stack direction="row" spacing={2}>
                <TextField
                  {...register("numeroExterior")}
                  fullWidth
                  id="user-input-numero-exterior"
                  type="text"
                  name="numeroExterior"
                  label="Número Exterior"
                />
                <TextField
                  {...register("numeroInterior")}
                  fullWidth
                  id="user-input-numero-interior"
                  type="text"
                  name="numeroInterior"
                  label="Número Interior"
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField
                  {...register("colonia")}
                  fullWidth
                  id="user-input-colonia"
                  type="text"
                  name="colonia"
                  label="Colonia"
                />
                <TextField
                  {...register("codigoPostal")}
                  fullWidth
                  id="user-input-codigo-postal"
                  type="text"
                  name="codigoPostal"
                  label="Código Postal"
                />
              </Stack>
            </AccordionDetails>
          </Accordion>

          {serverError && <Alert severity="error">{serverError}</Alert>}

          <Button variant="contained" type="submit">
            Registrar
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Signup;
