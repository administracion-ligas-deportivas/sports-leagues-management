//import {Image} from "react-router-dom";
import * as React from "react";
//import dayjs, { Dayjs } from 'dayjs';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useState } from "react";
import { Link } from "react-router-dom";
import myimg from "../public/img-login.png";
import styles from "../styles/LoginSignup.module.css";
//import Input from "@/components/Input/index";
//import Label from "@/components/Label";
//import Button from "@/components/Button/index";
import { useNavigate } from "react-router-dom";

/* ----------------------------------- MUI ---------------------------------- */
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTime } from "luxon";
import Button from "@mui/material/Button";
import { createUser } from "@/services/users";
//import TextField from "@mui/material";
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

function Signup() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    telefono: "",
  });

  const [fechaNacimiento, setFechaNacimiento] = useState(DateTime.now());

  const handleChange = ({ target: { name, value } }) => {
    setUsuario({ ...usuario, [name]: value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    console.log(usuario);
    createUser(usuario).then(() => {
      navigate("/");
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
        <main className={[styles.container, styles.loginContainer].join(" ")}>
          <Link to="/login">Inicia sesión</Link>
          <h1 className={styles.titlePage}>Registro</h1>

          {/*<Label htmlFor="user-label-pass" content="Nombre(s)" >
              <Input id="user-input-pass" name="nombre" placeholder="Nombre(s)" onChange={handleChange} />
            </Label>*/}

          {/*TextField para los nombres*/}
          <TextField
            required
            id="user-input-pass"
            name="nombre"
            label="Nombre(s)"
            onChange={handleChange}
          />

          {/*TextField para los apellidos*/}
          <TextField
            required
            id="user-input-pass"
            name="apellido"
            label="Apellido(s)"
            onChange={handleChange}
          />

          {/*TextField para el correo*/}
          <TextField
            required
            id="user-input-pass"
            name="correo"
            label="Correo"
            onChange={handleChange}
          />

          {/*TextField para el teléfono*/}
          <TextField
            required
            id="user-input"
            type="tel"
            name="telefono"
            label="Teléfono"
            onChange={handleChange}
          />

          {/*TextField para la contraseña*/}
          <TextField
            disabled
            id="user-input-pass"
            type="password"
            name="password"
            label="Contraseña"
            onChange={handleChange}
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
              onChange={handleChange}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date desktop"
                inputFormat="DD/MM/YYYY"
                value={fechaNacimiento}
                onChange={(newValue) => setFechaNacimiento(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          {/*TextField para contraseña*/}
          <TextField
            disabled
            id="user-input-pass"
            type="password"
            name="password"
            label="Contrase{a"
            onChange={handleChange}
          />

          {/*TextField para confirmar contraseña */}
          <TextField
            disabled
            id="user-input-pass"
            type="password"
            name="password"
            label="Confirmar contraseña"
            onChange={handleChange}
          />

          {/*<Label
                htmlFor="user-label-pass"
                content="Apellido(s)" >
                <Input
                  id="user-input-pass"
                  name="apellido"
                  placeholder="Apellido(s)"
                  onChange={handleChange}
            />
              </Label>
              <Label
                htmlFor="user-label-pass"
                content="Correo"
              >
                <Input
                  id="user-input-pass"
                  name="correo"
                  placeholder="Correo"
                  onChange={handleChange}
                />
              </Label>
              <Label
                htmlFor="user-label"
                content="Teléfono"
                
              >
                <Input
                  id="user-input"
                  placeholder="Teléfono"
                  type="tel"
                  name="telefono"
                  onChange={handleChange}

                />
              </Label>
              <Label
                htmlFor="user-label-pass"
                content="Contraseña"
              >
                <Input
                  id="user-input-pass"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                />
              </Label>
              
            
              <div className={styles.genderDataContainer}>
                <Label
                  htmlFor="user-label-pass"
                  content="Fecha de nacimiento"
                >
                  <Input
                    id="user-input-pass"
                    placeholder="DD/MM/AAAA"
                  />
                </Label>
                <Label
                  htmlFor="user-label-pass"
                  content="Genero"
                >
                  <Input
                    id="user-input-pass"
                    placeholder="Género"
                  />
                </Label>
              </div>
              
              <Label
                htmlFor="user-label-pass"
                content="Contraseña"
              >
                <Input
                  id="user-input-pass"
                  placeholder="Contraseña"
                />
              </Label>
              <Label
                htmlFor="user-label-pass"
                content="Confirmar contraseña"
              >
                <Input
                  id="user-input-pass"
                  placeholder="Confirmar contraseña"
                />
              </Label>*/}
          <Button variant="contained" onClick={registerUser} type="submit">
            Registrar
          </Button>
        </main>
      </section>
    </div>
  );
}

export default Signup;
