// import Head from "next/head";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import myimg from "/img/login.png";
import styles from "../styles/LoginSignup.module.css";

/* ----------------------------------- MUI ---------------------------------- */
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useAuthProvider } from "@/context/AuthContext";

function Login() {
  const { login } = useAuthProvider();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    correo: "",
    password: "",
  });

  const onChange = ({ e }) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { state } = useLocation();
    // Si el usuario venía de otra ruta, redirigir a la que iba. Si no, a la raíz.
    const nextPath = state?.location?.pathname ?? "/";
    login(user);
    navigate(nextPath);
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
          onSubmit={handleLogin}
        >
          <nav className={styles.navLogin}>
            <Link to="/Register">Regístrate</Link>
          </nav>
          <h1 className={styles.titlePage}>Inicia sesión</h1>

          <TextField
            required
            id="correo"
            label="Correo"
            name="correo"
            onChange={(event) => onChange(event)}
          />
          <TextField
            disabled
            id="password"
            label="Contraseña"
            name="password"
            onChange={(event) => onChange(event)}
          />
          <Button variant="contained" type="submit">
            Iniciar sesión
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Login;
