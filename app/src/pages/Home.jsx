import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Button, Stack } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "../styles/Home.module.css";
import { authService } from "@/services/auth";

function Home() {
  const [lista_anuncios, setlista_anuncios] = useState([]);
  const [anuncioLiked, setAnuncioLiked] = useState([]);
  const navigate = useNavigate();
  //const {autState} = useContext(AuthContext);

  useEffect(() => {
    //Investigar pq la compilación marca error en esta línea pero funciona correctamente (si devuelve autState correctamente)
    //if(!localStorage.getItem('accessToken')) navigate('/');
    axios
      .get("/api/posts", {
        headers: {
          Authorization: authService.getBearerToken(),
        },
      })
      .then((response) => {
        setlista_anuncios(response.data.lista_anuncios);
        setAnuncioLiked(
          response.data.liked.map((like) => {
            return like.AnuncioId;
          })
        );
      });
  }, []);

  const meGusta = (avisoID) => {
    axios
      .post(
        "/api/like/",
        { PostID: avisoID },
        {
          headers: {
            Authorization: authService.getBearerToken(),
          },
        }
      )
      .then((response) => {
        setlista_anuncios(
          lista_anuncios.map((post) => {
            if (post.id === avisoID)
              if (response.data.liked)
                return { ...post, Likes: [...post.Likes, 0] };
              else {
                const auxArray = post.Likes;
                auxArray.pop();
                return { ...post, Likes: auxArray };
              }
            else return post;
          })
        );

        if (anuncioLiked.includes(avisoID)) {
          setAnuncioLiked(
            anuncioLiked.filter((id) => {
              return id !== avisoID;
            })
          );
        } else setAnuncioLiked([...anuncioLiked, avisoID]);
      });
  };

  return (
    <>
      <div className={style.container}>
        <h2>Pantallas Realizadas</h2>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="/CreateAdvise">
            {" "}
            Crear Aviso{" "}
          </Button>
          <Button variant="contained" href="/gestion-torneo">
            {" "}
            Gestionar Torneo{" "}
          </Button>
          <Button variant="contained" href="/NuevoArbitro">
            {" "}
            Nuevo Arbitro{" "}
          </Button>
          <Button variant="contained" href="/CrearEventoDeportivo">
            {" "}
            Crear Evento Deportivo{" "}
          </Button>
          <Button variant="contained" href="/EnterSportsEvent">
            {" "}
            Entrar a Evento Deportivo
          </Button>
          <Button variant="contained" href="/EstadisticasPersonales">
            {" "}
            Estadisticas Personales
          </Button>
        </Stack>
        <br></br>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" href="/AsignarRoles">
            {" "}
            Asignar Roles{" "}
          </Button>
          <Button variant="contained" href="/RegistroDeportivo">
            {" "}
            Registro deportivo{" "}
          </Button>
          <Button variant="contained" href="/TraspasoEquipo">
            {" "}
            Traspaso de equipo{" "}
          </Button>
          <Button variant="contained" href="/NuevaCancha">
            {" "}
            Nueva Cancha{" "}
          </Button>
          <Button variant="contained" href="/EventosDeportivos">
            {" "}
            Eventos Deportivos
          </Button>
          <Button variant="contained" href="/RegistroEstadistico">
            {" "}
            Registrar Estadistico
          </Button>
        </Stack>
        <h2> Anuncios </h2>
        <div className={style.containerAnuncio}>
          {lista_anuncios.map((value, key) => {
            return (
              <div className={style.anuncio} key={key}>
                {value.nombre === "" ? (
                  <h3> ANONIMO publico </h3>
                ) : (
                  <h3> {value.nombre} publico </h3>
                )}
                <div
                  className={style.anuncioBody}
                  onClick={() => {
                    navigate(`/Advise/${value.id}`);
                  }}
                >
                  <div className={style.anuncioText}>
                    <p>{value.descripcion}</p>
                  </div>
                  <div className={style.anuncioInfo}>
                    <p>
                      {" "}
                      <b> Prioridad: </b> {value.prioridad}{" "}
                    </p>
                    <p>
                      {" "}
                      <b> Autor: </b> {value.autor}{" "}
                    </p>
                  </div>
                </div>
                <div className={style.anuncioFooter}>
                  <ThumbUpAltIcon
                    onClick={() => {
                      meGusta(value.id);
                    }}
                    className={
                      //Verifica si se dio like o no
                      anuncioLiked.includes(value.id) ? "azul" : "rojo"
                    }
                  />
                  <label> {value.Likes.length}</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
