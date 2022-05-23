import "@fortawesome/fontawesome-svg-core/styles.css";

//import Head from "next/head";
import styles from "../styles/EditarPerfil.module.css";
import Footer from "../components/Footer";
import UserIcon from "../components/Icon";
// import Input from "../components/Input/index";

// import Image from "next/image";
import Input from "../components/Input";
import Label from "../components/Label";
// import Image from "next/image";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
/**
 * 
 * Se eliminó la tag 'Head' ya que no puede ser hija de div
 */


export default function EditarPerfil() {
  let {id} = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/ProfileInfo/${id}`).then(
      (response)=>{
        setUser({
          nombre: response.data.nombre,
          apellido: response.data.apellido,
          correo: response.data.email,
        });
      }
    )
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        <h1>Editar Perfil</h1>
        <div className={styles.rectangle}>
          <div className={styles.user}>
            <UserIcon />
          </div>
          <h2>Datos Personales</h2>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Nombre(s)
                <p>{user.nombre}</p>
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Apellidos
                <Input
                  id="last-name"
                  placeholder="Apellidos"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Fecha de Nacimiento
                <Input
                  id="date-birth"
                  placeholder="Fecha"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Correo
                <Input
                  id="email"
                  placeholder="Correo"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Número de Télefono
                <Input
                  id="phone-number"
                  placeholder="Teléfono"
                />
              </Label>
            </div>
          </div>
          <h2>Domicilio</h2>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Calle
                <Input
                  id="street"
                  placeholder="Calle"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Colonia
                <Input
                  id="colony"
                  placeholder="Colonia"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input2}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Num. Exterios
                <Input
                  id="external-number"
                  placeholder="Número Exterior"
                />
              </Label>
            </div>
            <div className={styles.input2}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Num. Interior
                <Input
                  id="internal-number"
                  placeholder="Número Interior"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Código Postal
                <Input
                  id="postal-code"
                  placeholder="C.P"
                />
              </Label>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Estado
                <Input
                  id="state"
                  placeholder="Estado"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Municipio
                <Input
                  id="municipality"
                  placeholder="Municipio"
                />
              </Label>
            </div>
          </div>
          
          <br />
         
          <div className={styles.buttons}>
            <Button onClick={()=>{}} variant="primary">
              <p>Primary</p>
            </Button>
            <Button onClick={()=>{}} variant="secondary">
              <p>Secondary</p>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
