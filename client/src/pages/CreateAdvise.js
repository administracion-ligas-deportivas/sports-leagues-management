import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '../components/Button';

function CreateAdvise() {
    const initialValues = {
        nombre:'',
        prioridad:'',
        descripcion:''
    };

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required(),
        prioridad: Yup.number().integer().required(),
        descripcion: Yup.string()
    })

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/posts', data).then((response) => {
            console.log('Correcto');
        });
    };

  return (
    <div className='crearAnuncio-container'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <label>Nombre: </label>
                <ErrorMessage name='errorNombre' component='span'/>
                <Field id='inputCrearAnuncio' name='nombre' placeholder='Nombre'/>
                <label>Prioridad: </label>
                <ErrorMessage name='errorPrioridad' component='span'/>
                <Field id='inputCrearAnuncio' name='prioridad' placeholder='Prioridad'/>
                <label>Descripcion: </label>
                <ErrorMessage name='errorDescripcion' component='span'/>
                <Field id='inputCrearAnuncio' name='descripcion' placeholder='Descripcion'/>
                <Button type='submit'>Crear Aviso</Button>
            </Form>
        </Formik>
    </div>
  );
}

export default CreateAdvise