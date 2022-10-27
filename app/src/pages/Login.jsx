// import Head from "next/head";
import { useEffect, useState } from "react";
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
  const { state } = useLocation();
  const nextPath = state?.location?.pathname ?? "/";

  const [userData, setUserData] = useState({
    correo: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onChange = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Si el usuario venía de otra ruta, redirigir a la que iba. Si no, a la
      // raíz.
      await login(userData);
      setUserData({
        correo: "",
        password: "",
      });
      navigate(nextPath);
    } catch (e) {
      setError("Usuario o contraseña incorrectos");
    }

    setTimeout(() => {
      setError("");
    }, 3000);
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
          onSubmit={(e) => handleLogin(e)}
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
            autoComplete="email"
            onChange={(event) => onChange(event)}
            value={userData.correo}
          />
          <TextField
            id="password"
            label="Contraseña"
            name="password"
            onChange={(event) => onChange(event)}
            type="password"
            autoComplete="current-password"
            value={userData.password}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button variant="contained" type="submit">
            Iniciar sesión
          </Button>
        </form>
      </section>
    </div>
  );
}

export default Login;