import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Button, Typography, Stack } from "@mui/material";
//import {AuthContext} from '../helpers/AuthContext';
import style from "../styles/Home.module.css";

function Home(){
    const [lista_anuncios, setlista_anuncios] = useState([]);
    const [anuncioLiked, setAnuncioLiked] = useState([]);
    const navigate = useNavigate();
    //const {autState} = useContext(AuthContext);

    useEffect( () => {
        //Investigar pq la compilación marca error en esta línea pero funciona correctamente (si devuelve autState correctamente)
        //if(!localStorage.getItem('accessToken')) navigate('/');
        axios.get('http://localhost:3001/posts',{headers: {
            accessToken: localStorage.getItem('accessToken')
        }}).then((response) => {
            setlista_anuncios(response.data.lista_anuncios);
            setAnuncioLiked(response.data.liked.map((like) => {return like.AnuncioId}));
        });
    }, []);

    const meGusta = ((avisoID) => {
        axios.post('http://localhost:3001/like/', {PostID: avisoID}, {headers: {
            accessToken: localStorage.getItem('accessToken')
        }}).then((response) => {
            setlista_anuncios(lista_anuncios.map((post) => {
                if(post.id === avisoID) 
                    if(response.data.liked) return {...post, Likes: [...post.Likes, 0]}
                    else
                    {
                        const auxArray = post.Likes;
                        auxArray.pop();
                        return {...post, Likes: auxArray}
                    }
                else return post;
            }));

            if(anuncioLiked.includes(avisoID)) {
                setAnuncioLiked(anuncioLiked.filter((id) => {
                    return id !== avisoID;
                }));
            }
            else setAnuncioLiked([...anuncioLiked, avisoID]);

        });
    })

    return(
        <>
        <div className={style.container}> 
            <Stack direction="row" spacing={2}>
                <Button variant="contained" href="/CreateAdvise"> Crear Aviso </Button>
                <Button variant="contained" href="/gestion-torneo"> Gestionar Torneo </Button>
                <Button variant="contained" href="/NuevoArbitro"> Nuevo Arbitro </Button>
                <Button variant="contained" href="/CrearEventoDeportivo"> Crear Evento Deportivo </Button>
                <Button variant='contained' href='/EnterSportsEvent'> Entrar a Evento Deportivo</Button>
            </Stack>
            <div>
                {
                    lista_anuncios.map((value, key) => {
                    return (
                        <div className='anuncio' 
                            key={key}> 
                            <div className='titulo'>
                                {value.nombre}
                            </div>
                            <div className='body' onClick={() => {
                                navigate(`/Advise/${value.id}`)
                            }}>
                                {value.descripcion}
                            </div>
                            <div className='prioridad'>
                                Prioridad: {value.prioridad}
                            </div>
                            <div className='Autor'>
                                Autor: {value.autor}
                            </div>
                            <div className='creacion'>
                                
                                <ThumbUpAltIcon onClick={() => {meGusta(value.id)}} 
                                    className={
                                        //Verifica si se dio like o no
                                        anuncioLiked.includes(value.id) ? "azul" : "rojo"
                                    } />
                                <label> {value.Likes.length}</label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
};

export default Home;