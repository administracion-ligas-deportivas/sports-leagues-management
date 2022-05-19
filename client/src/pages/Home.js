import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Home(){

    const [lista_anuncios, setlista_anuncios] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/posts').then((response) => {
        setlista_anuncios(response.data);
        });
    }, []);

    return(
        <div>
            {lista_anuncios.map((value, key) => {
            return (
            <div className='anuncio'> 
                <div className='titulo'>
                {value.nombre}
                </div>
                <div className='body'>
                {value.descripcion}
                </div>
                <div className='prioridad'>
                {value.prioridad}
                </div>
                <div className='creacion'>
                {value.createdAt}
                </div>
            </div>
            );
            })}
        </div>
    );
};

export default Home;