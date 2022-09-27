import "@fortawesome/fontawesome-svg-core/styles.css";

//import Head from "next/head";
import styles from "../styles/EditarPerfil.module.css";
import UserIcon from "../components/Icon";
import {
  Button,
  TextField
  // LocalizationProvider,
  // DateTimePicker 
}from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { 
  useEffect, 
  useState 
} from "react";
/**
 * 
 * Se eliminó la tag 'Head' ya que no puede ser hija de div
 */


export default function EditarPerfil() {
  let {id} = useParams();
  const [user, setUser] = useState({});
  const [name, setName] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3001/auth/ProfileInfo/${id}`).then(
      (response)=>{
        setUser({
          nombre: response.data.nombre,
          apellido: response.data.apellido,
          correo: response.data.email,
        });
        setName(response.data.nombre)
      }
    )
  }, [id]);

  
  console.log(name);

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
              <TextField
                fullWidth 
                id="nombre"
                label="Nombre"
                // placeholder="Nombre"
                value = {name}
                margin="normal"
                onChange={(event) => setName(event.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="apellido"
                label="Apellido"
                value={user.apellido}
                onChange={(event) => setUser({ ...user, apellido: event.target.value })}
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="fechaNacimiento"
                label="Fecha de Nacimiento"
                value=""
                margin="normal"
              />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="DateTimePicker"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider> */}
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="email"
                label="Correo"
                value={user.correo}
                onChange={(event) => setUser({...user, correo: event.target.value})}
                InputLabelProps={{ shrink: true }}
                type='mail'
                margin="normal"
            />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="numero"
                label="Número de Teléfono"
                value="(55) 5555-5555"
                margin="normal"
              />
            </div>
          </div>
          <h2>Domicilio</h2>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="direccion"
                label="Calle"
                margin="normal"
              />
            </div>
            <div className={styles.input}>
            <TextField
                fullWidth 
                id="colonia"
                label="Colonia"
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input2}>
              <TextField
                fullWidth 
                id="num-ext"
                label="Núm. Exterior"
                type='number'
                margin="normal"
              />
            </div>
            <div className={styles.input2}>
              <TextField
                fullWidth 
                id="num-int"
                label="Núm. interior"
                type='number'
                margin="normal"
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="cp"
                label="Código Postal"
                type='number'
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="estado"
                label="Estado"
                margin="normal"
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth 
                id="municipio"
                label="Municipio"
                margin="normal"
              />
            </div>
          </div>
          
          <br />
         
          <div className={styles.buttons}>
            <Button variant="contained">
              Aceptar
            </Button>      
            <Button variant="contained" color="error">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
