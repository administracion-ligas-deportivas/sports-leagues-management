import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthProvider } from "@/context/AuthContext";
import style from "../styles/Advise.module.css";
import { Alert, Button, TextField } from "@mui/material";
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
  const navigate = useNavigate();
  const { user } = useAuthProvider();
  const { id: anuncioId } = useParams();

  const [advise, setAdvise] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPostById(anuncioId)
      .then((posts) => {
        setAdvise(posts);
      })
      .catch((error) => {
        console.log(error);
        navigate("/404");
      });

    fetchComentariosByAnuncioId(anuncioId)
      .then((comentarios) => {
        setComentarios(comentarios);
      })
      .catch(() => {
        setError("Error al cargar los comentarios");
      });
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [error]);

  useEffect(() => {
    console.log({ comentarios });
  }, [comentarios]);

  const nuevoComentario = (e) => {
    e.preventDefault();

    if (comentario.trim() === "") {
      setError("El comentario no puede estar vacío");
      return;
    }

    createComentario(anuncioId, comentario)
      .then((newComment) => {
        setComentarios((currentComments) => [...currentComments, newComment]);
        setComentario("");
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError("Error al crear el comentario");
      });
  };

  const borrarComentario = (id) => {
    deleteComentario(id)
      .then(() => {
        setComentarios((currentComments) =>
          currentComments.filter((comment) => {
            return comment.id !== id;
          })
        );
      })
      .catch((error) => {
        console.log(error);
        setError("Error al borrar el comentario");
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
        navigate("/");
      });
  };

  return (
    <>
      <h1>Aviso</h1>
      <div className={style.container}>
        <h3>{advise.nombre} </h3>
        <p>{advise.descripcion}</p>
        <h2>Comentarios</h2>
        <form
          className={style.comentarios}
          onSubmit={(e) => nuevoComentario(e)}
        >
          {comentarios.map((comentario) => {
            return (
              <div key={comentario.id} className={style.coment}>
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
            placeholder="Ingresa tu comentario..."
            onChange={(event) => {
              setComentario(event.target.value);
            }}
          />
          {error && (
            <Alert severity="warning" style={{ marginTop: ".5rem" }}>
              {error}
            </Alert>
          )}
          <Button
            startIcon={<SendIcon />}
            variant="contained"
            type="submit"
            sx={{ marginTop: "10px" }}
            size="small"
          >
            Subir comentario
          </Button>
        </form>
      </div>
    </>
  );
}

export default Advise;
