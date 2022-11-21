import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "@/services/usuarios";

import { TextField, Button, Alert } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTime } from "luxon";
import { yupResolver } from "@hookform/resolvers/yup";

import myimg from "/img-login.png";
import styles from "@/styles/LoginSignup.module.css";
import { registerSchema } from "@/validations/registerSchema";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerUser = async (userData) => {
    if (userData.password !== userData.confirmPassword) {
      setError("confirmPassword", {
        type: "focus",
        message: "Las contraseñas no coinciden",
      });
      return;
    }
    console.log(
      "🚀 ~ file: Register.jsx ~ line 44 ~ registerUser ~ userData",
      userData
    );

    createUser(userData)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setServerError(error);
      });
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

          {/*<Label htmlFor="user-label-pass" content="Nombre(s)" >
              <Input id="user-input-pass" name="nombre" placeholder="Nombre(s)" onChange={handleChange} />
            </Label>*/}

          {/*TextField para los nombres*/}
          <TextField
            error={errors.nombre}
            helperText={errors.nombre?.message}
            id="user-input-pass"
            name="nombre"
            label="Nombre(s)"
            {...register("nombre")}
          />

          {/*TextField para los apellidos*/}
          <TextField
            error={errors.apellido}
            helperText={errors.apellido?.message}
            id="user-input-pass"
            name="apellido"
            label="Apellido(s)"
            {...register("apellido")}
          />

          {/*TextField para el correo*/}
          <TextField
            error={errors.correo}
            helperText={errors.correo?.message}
            id="user-input-pass"
            name="correo"
            label="Correo"
            {...register("correo")}
          />

          {/*TextField para el teléfono*/}
          <TextField
            error={errors.telefono}
            helperText={errors.telefono?.message}
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
            <TextField
              disabled
              id="user-input-pass"
              name="genero"
              label="Género"
              {...register("genero")}
            />

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
            error={errors.password}
            helperText={errors.password?.message}
            id="user-input-pass"
            type="password"
            name="password"
            label="Contraseña"
            {...register("password")}
          />

          {/*TextField para confirmar contraseña */}
          <TextField
            error={errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            id="user-input-pass"
            type="password"
            name="password"
            label="Confirmar contraseña"
            {...register("confirmPassword", {
              // validate: (value) => value === watch("password"),
            })}
          />

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
