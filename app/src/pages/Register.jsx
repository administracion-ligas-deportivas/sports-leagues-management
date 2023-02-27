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
  REGISTER_ADDRESS,
  REGISTER_FORM_FIELDS,
} from "@/constants";
import { Link, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter, getOnlyDate } from "@/utils";
import { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTime } from "luxon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LoginSignupStyles } from "@/styles";
import { registerSchema } from "@/validations";
import { useEstados } from "@/hooks";
import { useForm } from "react-hook-form";
import { usuariosService } from "@/services";
import { yupResolver } from "@hookform/resolvers/yup";

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

    const {
      calle,
      colonia,
      codigoPostal,
      numeroExterior,
      numeroInterior,
      municipioId,
      fechaNacimiento,
      ...rest
    } = userData;

    const formattedFechaNacimiento = getOnlyDate(fechaNacimiento);

    const user = {
      ...rest,
      fechaNacimiento: formattedFechaNacimiento,
      domicilio: {
        calle,
        colonia,
        codigoPostal,
        numeroExterior,
        numeroInterior,
        municipioId,
      },
    };

    console.log({ user });

    usuariosService
      .createUser(user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setServerError(error);
      });
  };

  const setFieldErrors = (prop, { setHelperText = true } = {}) => {
    if (!errors[prop]) return null;

    const hasProp = Object.hasOwn(errors, prop);

    if (!hasProp) return null;

    const props = {
      error: hasProp,
    };

    if (setHelperText) {
      props.helperText = errors?.[prop]?.message ?? null;
    }

    return props;
  };

  const register = (prop, { setErrors = true, setHelperText = true } = {}) => {
    const fieldErrors = setErrors
      ? { ...setFieldErrors(prop, { setHelperText }) }
      : null;

    return { ...registerProp(prop), ...fieldErrors };
  };

  const imageClasses = [LoginSignupStyles.container, "hidden", "sm:flex"].join(" ");

  // stepper
  // stepper
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
              {...field}
              key={field.id}
              autoComplete="new-password"
              {...register(field.name)}
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
                  {...field}
                  key={field?.name}
                  {...register(field.name)}
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
                  {...register("genero", { setHelperText: false })}
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
                  {...register("fechaNacimiento")}
                  value={watch("fechaNacimiento")}
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
                {...register(
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
                {...register(
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
              {...REGISTER_FORM_FIELDS.address.calle}
              {...register(REGISTER_FORM_FIELDS.address.calle.id)}
              fullWidth
              sx={{ marginTop: "1.5em" }}
            />
            {
              Object.values(REGISTER_ADDRESS).map((addressProperty, index) => {
                return (
                  <Stack direction="row" spacing={2} sx={{ marginTop: "1.5em" }} key={index}>
                    {
                      addressProperty.map((field) => {
                        return (
                          <TextField
                            {...register(field.id)}
                            {...field}
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
