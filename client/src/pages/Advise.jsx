import axios from "axios";
import React, {useEffect, useState, useContext} from "react";
import {useParams, useNavigate} from "react-router-dom";
//import Button from "@/components/Button";
import {AuthContext} from "../helpers/AuthContext";

/* ----------------------------------- MUI ---------------------------------- */
import { Button} from "@mui/material";
/* ----------------------------------- MUI ---------------------------------- */

/**
 * Cambiar componente de botón para hacer que pueda recibir funciones onClick y que también no pase nada
 * si no las recibe, actualmente (21/05/2022) da un error en consola (Hacer proyecto sin errores)
 * 
 */

function Advise() {
  let {id} = useParams();
  const [advise, setAdvise] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [crearComentario, setcrearComentario] = useState("");
  const navigate = useNavigate();
  const {autState} = useContext(AuthContext);

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
    axios.post("http://localhost:3001/comentarios", 
      {
        comentario: crearComentario,
        AnuncioId: id
      }, 
      {
        headers:{
          accessToken: localStorage.getItem("accessToken"),
        }
      }).then((response) => {
      if(response.data.error) console.log(response.data.error);
      else
      {
        const comentario_A_Agregar = {comentario: crearComentario, usuario: response.data.usuario};
        setComentarios([...comentarios, comentario_A_Agregar]);
        setcrearComentario("");
      }
                
    });
  };

  const borrarComentario = (id) => {
    axios.delete(`http://localhost:3001/comentarios/${id}`, {
      headers:{
        accessToken: localStorage.getItem("accessToken"),
      }
    }).then(() => {
      setAdvise(comentarios.filter((val) => {
        return val.id !== id;
      }));
    });
  };

  const borrarAviso = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`, {
      headers:{
        accessToken: localStorage.getItem("accessToken"),
      }
    }).then(() => {
      alert("Post eliminado");
      navigate("/home");
    });
  };

  return (
    <div>
      {/*  to="/Home" > Home </Link> */}
        Aviso: {advise.nombre} 
      {autState.correo === advise.autor && (
        <Button onClick={() => {borrarAviso(advise.id);}} variant="contained">Borrar Aviso</Button>
      )}
      <div>
            COMENTARIOS
        <div>
                Mostrar comentarios:
          {comentarios.map((comentario, key) => {
            return(
              <div key = {key}>
                <label> <br/> Autor: {comentario.usuario} </label> <br/>
                <label> Comentario: {comentario.comentario} <br/></label>
                {autState.nombre === comentario.usuario && 
                  <Button onClick={() => {borrarComentario(comentario.id);}} variant="contained">Borrar</Button>
                }
              </div>
            );
          })}
        </div>
        <div>
                Añadir comentario:
          <input type='text' value={crearComentario} placeholder='Ingesa tu comentario...' onChange={(event) => {setcrearComentario(event.target.value);}}/>
          <Button onClick={nuevoComentario} type='submit' variant="contained"> Subir comentario </Button>
        </div>
      </div>
    </div>
    
  );
}

export default Advise;
