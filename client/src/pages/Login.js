// import Head from "next/head";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import myimg from "../public/img-login.png";
import styles from "../styles/LoginSignup.module.css";
import Input from "../components/Input/index";
import Label from "../components/Label";
import Button from "../components/Button/index";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const[Uemail, setUEmail] = useState("");
  const[Ucontrasenia, setUContrasenia] = useState("");

  const[resetEmail, setResetEmail] = useState(""); 
  const[resetPassword, setResetPassword] = useState("");

  const loginUser = () => {
    const data = {correo: Uemail, contrasenia: Ucontrasenia};
    axios.post("http://localhost:3001/auth/login", data ).then((Response) => {
      console.log(Response.data);
      const email_to_Add = {correo: resetEmail};
      const pass_to_Add = { contrasenia: resetPassword};
      setUEmail([...Uemail, email_to_Add]);
      setUContrasenia([...Ucontrasenia, pass_to_Add]);
      setResetEmail('');
      setResetPassword('');
      navigate('/Home');
    })
  };

  const imageClasses = [styles.container, "hidden", "sm:flex"].join(" ");
  
  return (
    <div className="flex flex-col justify-between h-full">
      <section className={[styles.mainContainer]}>
        <section className={imageClasses}>
          <h1 className={styles.titleLeague}>
            Administración de Ligas Deportivas
          </h1>
          <img
            src={myimg}
            alt="Login_Image"
            width="300px"
            height="300px"
          />
        </section>
        <main className={[styles.container, styles.loginContainer].join(" ")}>
          <nav className={styles.navLogin}>
            <Link to="/Register">
              Registrate
            </Link>
          </nav>
          <h1 className={styles.titlePage}>Inicia sesión</h1>
          
            <Label
              htmlFor="user-label"
              content="Correo"
            >
              <Input
                id="user-input"
                placeholder="Correo"
                onChange={(event)=>{setUEmail(event.target.value)}}
              />
            </Label>
            <Label
              htmlFor="user-label-pass"
              content="Contraseña"
            >
              <Input
                id="user-input-pass"
                placeholder="Contraseña"
                type="password"
                onChange={(event)=>{setUContrasenia(event.target.value)}}
              />
            </Label>
            <Button 
              variant="primary"
              onClick={loginUser}
              type="submit">
              <p>Iniciar sesión</p>
            </Button>
        </main>
      </section>
    </div>
  );
}

export default Login;
