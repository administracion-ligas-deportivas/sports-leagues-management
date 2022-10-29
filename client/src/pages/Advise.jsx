import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
//import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import style from "../styles/Advise.module.css";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

/**
 * Cambiar componente de botón para hacer que pueda recibir funciones onClick y que también no pase nada
 * si no las recibe, actualmente (21/05/2022) da un error en consola (Hacer proyecto sin errores)
 *
 */

function Advise() {
  let { id } = useParams();
  const [advise, setAdvise] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [crearComentario, setcrearComentario] = useState("");
  const navigate = useNavigate();
  const { autState } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((Response) => {
      setAdvise(Response.data);
    });

    axios.get(`http://localhost:3001/comentarios/${id}`).then((Response) => {
      setComentarios(Response.data);
    });
    //Este arreglo evita que se envíen solicitudes constantemente
  }, [id]);

  const nuevoComentario = () => {
    axios
      .post(
        "http://localhost:3001/comentarios",
        {
          comentario: crearComentario,
          AnuncioId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) console.log(response.data.error);
        else {
          const comentario_A_Agregar = {
            comentario: crearComentario,
            usuario: response.data.usuario,
          };
          setComentarios([...comentarios, comentario_A_Agregar]);
          setcrearComentario("");
        }
      });
  };

  const borrarComentario = (id) => {
    axios
      .delete(`http://localhost:3001/comentarios/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        setAdvise(
          comentarios.filter((val) => {
            return val.id !== id;
          })
        );
      });
  };

  const borrarAviso = (id) => {
    axios
      .delete(`http://localhost:3001/posts/${id}`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then(() => {
        alert("Post eliminado");
        navigate("/home");
      });
  };

  return (
    <>
      <h1>Aviso</h1>
      <div className={style.rectangle}>
        {advise.nombre === "" ? <h3>ANONIMO</h3> : <h3>{advise.nombre}</h3>}
        {/* <h3> {advise.nombre} </h3> */}
        <p>{advise.descripcion}</p>
        <h2>Comentarios</h2>
        <div className={style.comentarios}>
          {comentarios.map((comentario, key) => {
            return (
              <div key={key} className={style.coment}>
                <h4>{comentario.usuario} dijo: </h4>
                <p>{comentario.comentario}</p>
                {autState.nombre === comentario.usuario && (
                  <div className={style.buttonsDel}>
                    <Button
                      startIcon={<DeleteIcon />}
                      size="small"
                      color="error"
                      variant="contained"
                      onClick={() => {
                        borrarComentario(comentario.id);
                      }}
                    >
                      Borrar
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
          <h3>Añadir un comentario:</h3>
          <TextField
            fullWidth
            size="small"
            label="Comentar"
            variant="outlined"
            value={crearComentario}
            placeholder="Ingesa tu comentario..."
            onChange={(event) => {
              setcrearComentario(event.target.value);
            }}
          />
          <div className={style.buttons}>
            <Button
              startIcon={<SendIcon />}
              variant="contained"
              onClick={nuevoComentario}
              type="submit"
              sx={"margin-top: 10px;"}
              size="small"
            >
              {" "}
              Subir comentario{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <Link to="/Home" > Home </Link>
    //     Advise: {advise.nombre}
    //   {autState.correo === advise.autor && (
    //     <Button onClick={() => {borrarAviso(advise.id);}}>Borrar Aviso</Button>
    //   )}
    //   <div>
    //         COMENTARIOS
    //     <div>
    //             Mostrar comentarios:
    //       {comentarios.map((comentario, key) => {
    //         return(
    //           <div key = {key}>
    //             <label> <br/> Autor: {comentario.usuario} </label> <br/>
    //             <label> Comentario: {comentario.comentario} <br/></label>
    //             {autState.nombre === comentario.usuario &&
    //                             <Button onClick={() => {borrarComentario(comentario.id);}}>Borrar</Button>
    //             }
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <div>
    //             Añadir comentario:
    //       <input type='text' value={crearComentario} placeholder='Ingesa tu comentario...' onChange={(event) => {setcrearComentario(event.target.value);}}/>
    //       <Button onClick={nuevoComentario} type='submit'> Subir comentario </Button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Advise;
