import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {AuthContext} from '../helpers/AuthContext';

function Home(){

    const [lista_anuncios, setlista_anuncios] = useState([]);
    const [anuncioLiked, setAnuncioLiked] = useState([]);
    let navigate = useNavigate();
    const {autState} = useContext(AuthContext);

    useEffect( () => {
        //Investigar pq la compilación marca error en esta línea pero funciona correctamente (si devuelve autState correctamente)
        //if(!autState.status) navigate('/');
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
        <div>
            <Link to="/CreateAdvise" > Crear aviso </Link>
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
                            {value.Likes.lenght}
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
    );
};

export default Home;