import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchPosts } from "@/services/posts";
import { likePost } from "@/services/likes";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Button, Stack } from "@mui/material";
import style from "../styles/Home.module.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [likedPost, setLikedPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ posts });
  }, [posts]);

  useEffect(() => {
    fetchPosts().then((response) => {
      console.log(
        "🚀 ~ file: Home.jsx ~ line 18 ~ fetchPosts ~ response",
        response
      );
      setPosts(response.lista_anuncios);
      setLikedPost(
        response.liked.map((like) => {
          return like.AnuncioId;
        })
      );
    });
  }, []);

  const meGusta = (avisoID) => {
    likePost(avisoID).then((response) => {
      console.log({ response });
      const newPosts = posts.map((post) => {
        if (post.id === avisoID)
          if (response.liked) return { ...post, Likes: [...post.Likes, 0] };
          else {
            const auxArray = post.Likes;
            auxArray.pop();
            return { ...post, Likes: auxArray };
          }
        else return post;
      });

      setPosts(newPosts);

      if (!likedPost.includes(avisoID)) {
        setLikedPost([...likedPost, avisoID]);
        return;
      }
      const liked = likedPost.filter((id) => {
        return id !== avisoID;
      });
      setLikedPost(liked);
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
          {posts.map((value, key) => {
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
                      likedPost.includes(value.id) ? "azul" : "rojo"
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
