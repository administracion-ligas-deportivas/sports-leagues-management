import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "@/services/posts";
import { likePost } from "@/services/likes";

import { Carousel } from "react-responsive-carousel";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import style from "@/styles/Home.module.css";
// requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css";
import football from "/football.jpg";
import baseball from "/baseball.jpg";
import softball from "/softball.jpg";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [likedPost, setLikedPost] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ posts });
  }, [posts]);

  useEffect(() => {
    fetchPosts().then((response) => {
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
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          dynamicHeight={true}
          showIndicators={true}
          showThumbs={false}
        >
          <div>
            <img src={football} />
          </div>
          <div>
            <img src={baseball} />
          </div>
          <div>
            <img src={softball} />
          </div>
        </Carousel>

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
