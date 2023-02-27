import "@fortawesome/fontawesome-svg-core/styles.css";

//import Head from "next/head";
import styles from "@/styles/EditarPerfil.module.css";
import UserIcon from "@/components/Icon";
import {
  Button,
  TextField,
  // LocalizationProvider,
  // DateTimePicker
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
import { useEstados } from "@/hooks/useEstados";

export default function EditarPerfil() {
  const { user } = useUser();
  const { nombre, apellido, fechaNacimiento, correo, telefono, domicilioUsuario } = user;
  // const { id } = useParams();
  console.log(domicilioUsuario.municipioId);
  const municipio = useEstados().findMunicipio(domicilioUsuario.municipioId);
  console.log(municipio);

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
                value={nombre}
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
                value={apellido}
                onChange={(event) =>
                  setUser({ ...user, apellido: event.target.value })
                }
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
                value={fechaNacimiento}
                margin="normal"
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="email"
                label="Correo"
                value={correo}
                onChange={(event) =>
                  setUser({ ...user, correo: event.target.value })
                }
                InputLabelProps={{ shrink: true }}
                type="mail"
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
                value={telefono}
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
                value={domicilioUsuario.calle}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="colonia"
                label={"Colonia"}
                value={domicilioUsuario.colonia}
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input2}>
              <TextField
                fullWidth
                id="num-ext"
                label="Núm. Exterior"
                value={domicilioUsuario.numeroExterior}
                type="number"
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div className={styles.input2}>
              {domicilioUsuario.numeroInterior ? (
                <TextField
                  fullWidth
                  id="num-int"
                  label="Núm. interior"
                  type="number"
                  value={domicilioUsuario.numeroInterior}
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                />
                ) :
                (
                <TextField
                  fullWidth
                  id="num-int"
                  label="Núm. interior"
                  type="number"
                  margin="normal"
                  disabled
                />
                )}
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="cp"
                label="Código Postal"
                type="number"
                value={domicilioUsuario.codigoPostal}
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              <TextField 
                fullWidth 
                id="estado"
                value={domicilioUsuario.estado}
                InputLabelProps={{ shrink: true }}
                label="Estado"
                margin="normal"
              />
            </div>
            <div className={styles.input}>
              <TextField
                fullWidth
                id="municipio"
                label="Municipio"
                value={domicilioUsuario.municipio}
                InputLabelProps={{ shrink: true }}
                margin="normal"
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <div>
              <Button variant="contained">Guardar</Button>
            </div>
            <div>
              <Button variant="contained" color="error">
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
