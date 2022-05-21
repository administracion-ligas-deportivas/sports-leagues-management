//import {Image} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";
import myimg from "../public/img-login.png";
import styles from "../styles/LoginSignup.module.css";
import Input from "../components/Input/index";
import Label from "../components/Label";
import Button from "../components/Button/index";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function Signup() {

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nombre:"",
    apellido:"",
    correo:"",
    contrasenia:"",
    telefono: ""
  });
  

  const handleChange = ({target: {name, value}}) => {
    setUsuario({...usuario, [name]:value});
  }

  const registerUser = async (e) => {
      e.preventDefault();
      console.log(usuario);
      await axios.post("http://localhost:3001/auth", usuario).then((response) => {
        navigate('/login');
      });
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
            alt="Register_image"
            width="300px"
            height="300px"
          />
        </section>
        <main className={[styles.container, styles.loginContainer].join(" ")}>
          <Link to="/" >
            Inicia Sesión
          </Link>
          <h1 className={styles.titlePage}>Registro</h1>
            <Label htmlFor="user-label-pass" content="Nombre(s)" >
              <Input id="user-input-pass" name="nombre" placeholder="Nombre(s)" onChange={handleChange} />
            </Label>
              <Label
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
                  name="contrasenia"
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
              </Label>
              <Button
                variant="primary"
                onClick={registerUser}
                type="submit"
              >
                <p>Registrar</p>
              </Button>
        </main>
      </section>
    </div>
  );
}

export default Signup;
