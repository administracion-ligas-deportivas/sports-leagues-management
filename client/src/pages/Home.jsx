import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Button, Stack } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "../styles/Home.module.css";

function Home() {
  const [lista_anuncios, setlista_anuncios] = useState([]);
  const [anuncioLiked, setAnuncioLiked] = useState([]);
  const navigate = useNavigate();
  //const {autState} = useContext(AuthContext);

  useEffect(() => {
    //Investigar pq la compilación marca error en esta línea pero funciona correctamente (si devuelve autState correctamente)
    //if(!localStorage.getItem('accessToken')) navigate('/');
    axios
      .get("http://localhost:3001/posts", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
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
        "http://localhost:3001/like/",
        { PostID: avisoID },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
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
          <Link to="/CreateAdvise" className={style.link}>
            <Button variant="contained"> Crear Aviso </Button>
          </Link>
          <Link to="/GestionEventoDep" className={style.link}>
            <Button variant="contained"> Gestionar Evento Deportivo </Button>
          </Link>
          <Link to="/NuevoArbitro" className={style.link}>
            <Button variant="contained"> Nuevo Arbitro </Button>
          </Link>
          <Link to="/CrearEventoDeportivo" className={style.link}>
            <Button variant="contained"> Crear Evento Deportivo </Button>
          </Link>
          <Link to="/EnterSportsEvent" className={style.link}>
            <Button variant="contained"> Entrar a Evento Deportivo</Button>
          </Link>
          <Link to="/EstadisticasPersonales" className={style.link}>
            <Button variant="contained"> Estadisticas Personales</Button>
          </Link>
          <Link to="/GestionEquipoJugador" className={style.link}>
            <Button variant="contained"> Gestión de equipo jugador</Button>
          </Link>
        </Stack>
        <br></br>
        <Stack direction="row" spacing={2}>
          <Link to="/AsignarRoles" className={style.link}>
            <Button variant="contained"> Asignar Roles </Button>
          </Link>
          <Link to="/RegistroDeportivo" className={style.link}>
            <Button variant="contained"> Registro deportivo </Button>
          </Link>
          <Link to="/TraspasoEquipo" className={style.link}>
            <Button variant="contained"> Traspaso de equipo </Button>
          </Link>
          <Link to="/NuevaCancha" className={style.link}>
            <Button variant="contained"> Nueva Cancha </Button>
          </Link>
          <Link to="/EventosDeportivos" className={style.link}>
            <Button variant="contained"> Eventos Deportivos</Button>
          </Link>
          <Link to="/RegistroEstadistico" className={style.link}>
            <Button variant="contained"> Registrar Estadistico</Button>
          </Link>
          <Link to="/EquiposEnSistema" className={style.link}>
            <Button variant="contained"> Equipos en sistema</Button>
          </Link>
          <Link to="/GestionEquipo" className={style.link}>
            <Button variant="contained"> Gestión de equipo</Button>
          </Link>
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
