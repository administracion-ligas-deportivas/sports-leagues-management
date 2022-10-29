import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Button, Stack } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "../styles/Home.module.css";
import football from "../public/football.jpg";
import baseball from "../public/baseball.jpg";
import softball from "../public/softball.jpg";

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
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showStatus={false} dynamicHeight={true} showIndicators={true} showThumbs={false}>
                    <div>
                        <img src={football}/>
                    </div>
                    <div>
                        <img src={baseball}/>
                    </div>
                    <div>
                        <img src={softball}/>
                    </div>
                </Carousel>
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
