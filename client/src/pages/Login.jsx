// import Head from "next/head";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myimg from "../public/img-login.png";
import styles from "../styles/LoginSignup.module.css";
//import Input from "../components/Input/index";
//import Label from "../components/Label";
// import Button from "../components/Button/index";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

/* ----------------------------------- MUI ---------------------------------- */
import { Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
//import Typography from "@mui/material/Typography";

function Login() {
  const navigate = useNavigate();

  const [Uemail, setUEmail] = useState("");
  const [Ucontrasenia, setUContrasenia] = useState("");

  const { setAuthState } = useContext(AuthContext);

  const loginUser = (event) => {
    event.preventDefault();

    const data = { correo: Uemail, contrasenia: Ucontrasenia };
    axios.post("http://localhost:3001/auth/login", data).then((Response) => {
      if (Response.data.error) alert(Response.data.error);
      else {
        localStorage.setItem("accessToken", Response.data.token);
        setAuthState({
          correo: Response.data.userEmail,
          nombre: Response.data.nombre,
          id: Response.data.id,
          status: true,
        });
        navigate("/Home");
      }
    });
  };

  const imageClasses = [styles.container, "hidden", "sm:flex"].join(" ");

  return (
    <div className="flex flex-col justify-between h-full full-height">
      <section className={[styles.mainContainer]}>
        <section className={imageClasses}>
          <h1 className={styles.titleLeague}>
            Administración de Ligas Deportivas
          </h1>
          <img src={myimg} alt="Login_Image" width="300px" height="300px" />
        </section>
        <form
          className={[styles.container, styles.loginContainer].join(" ")}
          onSubmit={loginUser}
        >
          <nav className={styles.navLogin}>
            <Link to="/Register">Registrate</Link>
          </nav>
          <h1 className={styles.titlePage}>Inicia sesión</h1>

          <TextField
            required
            id="user-input"
            label="Correo"
            onChange={(event) => {
                setUEmail(event.target.value);
            }}
          />
          <TextField
            disabled
            id="user-input-pass"
            label="Contrseña"
            onChange={(event) => {
                setUEmail(event.target.value);
            }}
          />
          <Button variant="contained" onClick={loginUser} type="submit">
            Iniciar sesión
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Login;
