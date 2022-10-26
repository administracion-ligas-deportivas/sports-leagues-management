import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuthProvider } from "@/context/AuthContext";
import style from "../styles/Advise.module.css";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { fetchPostById } from "@/services/posts";
import {
  createComentario,
  deleteComentario,
  fetchComentariosByAnuncioId,
} from "@/services/comentarios";

/**
 * Cambiar componente de botón para hacer que pueda recibir funciones onClick y que también no pase nada
 * si no las recibe, actualmente (21/05/2022) da un error en consola (Hacer proyecto sin errores)
 *
 */

function Advise() {
  let { id: anuncioId } = useParams();
  const [advise, setAdvise] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState("");
  const navigate = useNavigate();
  const { user } = useAuthProvider();

  useEffect(() => {
    fetchPostById(anuncioId).then((posts) => {
      setAdvise(posts);
    });

    fetchComentariosByAnuncioId(anuncioId).then((comentarios) => {
      setComentarios(comentarios);
    });
    //Este arreglo evita que se envíen solicitudes constantemente
  }, [anuncioId]);

  const nuevoComentario = () => {
    createComentario(anuncioId, comentario)
      .then((nuevoComentario) => {
        const comment = {
          comentario,
          usuario: nuevoComentario.usuario,
        };
        setComentarios([...comentarios, comment]);
        setComentario("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const borrarComentario = (id) => {
    deleteComentario(id).then(() => {
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
      <div className={style.container}>
        <h3>{advise.nombre} </h3>
        <p>{advise.descripcion}</p>
        <h2>Comentarios</h2>
        <div className={style.comentarios}>
          {comentarios.map((comentario, key) => {
            return (
              <div key={key} className={style.coment}>
                <h4>{comentario.usuario} dijo: </h4>
                <p>{comentario.comentario}</p>
                {user.nombre === comentario.usuario && (
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
            value={comentario}
            placeholder="Ingesa tu comentario..."
            onChange={(event) => {
              setComentario(event.target.value);
            }}
          />
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
    </>
    // <div>
    //   <Link to="/Home" > Home </Link>
    //     Advise: {advise.nombre}
    //   {user.correo === advise.autor && (
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
    //             {user.nombre === comentario.usuario &&
    //                             <Button onClick={() => {borrarComentario(comentario.id);}}>Borrar</Button>
    //             }
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <div>
    //             Añadir comentario:
    //       <input type='text' value={comentario} placeholder='Ingesa tu comentario...' onChange={(event) => {setComentario(event.target.value);}}/>
    //       <Button onClick={nuevoComentario} type='submit'> Subir comentario </Button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Advise;
