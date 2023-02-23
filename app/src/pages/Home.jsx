import { useEventos, useUser } from "@/hooks";
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
import Button from "@mui/material/Button";
import { fetchEventosReales } from "@/services/eventos";

export default function Home() {
  const navigate = useNavigate();
  const { isOrganizador } = useUser();

  const { eventos, error } = useEventos();

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

        <div className={style.flex}>
          <h2> Eventos deportivos </h2>
          { isOrganizador && <Button
            variant="contained"
            onClick={() => navigate("/crear-evento-deportivo")}
            sx={{ height: 30, marginTop: 2 }}
          >
            Crear evento
          </Button>}
        </div>
        <div className={style.containerAnuncio}>
          {error && <p> {error} </p>}
          {eventos &&
            eventos.map((evento, key) => {
              return (
                <div className={style.anuncio} key={key}>
                  <h3> {evento.nombre} </h3>

                  <div
                    className={style.anuncioBody}
                    onClick={() => {
                      navigate(`/gestion-evento-deportivo/${evento.id}`);
                    }}
                  >
                    <div className={style.anuncioText}>
                      <p>
                        <b>Fecha de inicio: </b>
                        {new Date(evento.fechaInicio).toLocaleDateString()}
                      </p>
                      {evento?.fechaFinalizacion && (
                        <p>
                          {new Date(evento.fechaFinalizacion).toLocaleString()}
                        </p>
                      )}
                      {evento?.formatoEventoDeportivo && (
                        <>
                          <p>
                            <b>Formato de evento:</b>{" "}
                            {evento.formatoEventoDeportivo?.nombre}
                          </p>
                          <p>
                            {
                              evento.formatoEventoDeportivo?.tipoEventoDeportivo
                                ?.nombre
                            }
                            {" de "}
                            {evento.formatoEventoDeportivo?.deporte?.nombre}
                          </p>
                        </>
                      )}
                    </div>
                    <div className={style.anuncioInfo}>
                      {evento.descripcionPagos && (
                        <p>
                          <b> Detalles de pagos: </b> {evento.descripcionPagos}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* <div className={style.flex}>
          <h2> Anuncios </h2>
          <Button
            variant="contained"
            onClick={() => navigate("/create-advise")}
            sx={{ height: 30, marginTop: 2 }}
          >
            {" "}
            Crear aviso{" "}
          </Button>
        </div> */}
        {/* <div className={style.containerAnuncio}>
          {posts &&
            posts.map((value, key) => {
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
                    <label> {value.likes.length}</label>
                  </div>
                </div>
              );
            })}
        </div> */}
      </div>
    </>
  );
}
