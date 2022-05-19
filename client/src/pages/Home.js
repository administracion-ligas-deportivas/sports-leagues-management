import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

function Home(){

    const [lista_anuncios, setlista_anuncios] = useState([]);
    let navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:3001/posts').then((response) => {
        setlista_anuncios(response.data);
        });
    }, []);

    return(
        <div>
            <Link to="/CreateAdvise" > Crear aviso </Link>
            {lista_anuncios.map((value, key) => {
                return (
                    <div className='anuncio' 
                        key={key}
                        onClick={() => {
                            navigate(`/Advise/${value.id}`)
                        }}> 
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