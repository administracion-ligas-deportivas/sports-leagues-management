import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom';
import Button from '../components/Button';

function Advise() {
    let {id} = useParams();
    const [advise, setAdvise] = useState({});
    const [comentarios, setComentarios] = useState([]);
    const [crearComentario, setcrearComentario] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((Response) => {
            setAdvise(Response.data);
        });

        axios.get(`http://localhost:3001/comentarios/${id}`).then((Response) => {
            setComentarios(Response.data);
        });
        //Este arreglo evita que se envíen solicitudes constantemente
    }, [id]);

    const nuevoComentario = () => {
        axios.post('http://localhost:3001/comentarios', {
            comentario: crearComentario,
             AnuncioId: id
            }).then((response) => {
                const comentario_A_Agregar = {comentario: crearComentario};
                setComentarios([...comentarios, comentario_A_Agregar]);
                setcrearComentario('');
            });
    };

    return (
    <div>
    <Link to="/Home" > Home </Link>
        Advise: {advise.nombre} 
        <div>
            COMENTARIOS
            <div>
                Mostrar comentarios:
                {comentarios.map((comentario, key) => {
                    return(
                        <div key = {key}>
                            {comentario.comentario}
                        </div>
                    )
                })}
            </div>
            <div>
                Añadir comentario:
                <input type='text' value={crearComentario} placeholder='Ingesa tu comentario...' onChange={(event) => {setcrearComentario(event.target.value)}}/>
                <Button onClick={nuevoComentario} type='submit'> Subir comentario </Button>
            </div>
        </div>
    </div>
    
  )
}

export default Advise