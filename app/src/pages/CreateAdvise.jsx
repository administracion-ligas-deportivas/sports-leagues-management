import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//import Button from "@/components/Button";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { createPost } from "@/services/posts";

/* ----------------------------------- MUI ---------------------------------- */
import { Button, Stack, TextField } from "@mui/material";
import styles from "@/styles/RegistroDeportivo.module.css";
/* ----------------------------------- MUI ---------------------------------- */

function CreateAdvise() {
  const navigate = useNavigate();

  const initialValues = {
    nombre: "",
    prioridad: "",
    descripcion: "",
    autor: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required(),
    prioridad: Yup.number().integer().required(),
    descripcion: Yup.string(),
  });

  const onSubmit = (data) => {
    createPost(data).then(() => {
      navigate("/");
    });
  };

  const aux = () => {
    console.log("Funciona");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div className={styles.container}>
      {/* <Link to="/Home" > Home </Link> */}
      <h1>Crear aviso</h1>
      <Stack spacing={2} className={styles.rectangle}>
        {/*<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> */}
        <form onSubmit={formik.handleSubmit}>
          {/* <label>Nombre: </label> */}
          {/* <ErrorMessage name="errorNombre" component="span" /> */}
          {/* <Field id="inputCrearAnuncio" name="nombre" placeholder="Nombre" /> */}
          <TextField
            fullWidth
            id="nombre"
            name="nombre"
            label="Nombre"
            margin="normal"
            // value={formik.values.nombre}
            onChange={formik.handleChange}
          />

          {/* <label>Prioridad: </label> */}
          {/* <ErrorMessage name="errorPrioridad" component="span" /> */}
          {/* <Field id="inputCrearAnuncio" name="prioridad" placeholder="Prioridad"/> */}
          <TextField
            fullWidth
            id="prioridad"
            // type="numeric"
            name="prioridad"
            label="Prioridad"
            margin="normal"
            // value={formik.values.prioridad}
            onChange={formik.handleChange}
          />

          {/* <label>Descripcion: </label> */}
          {/* <ErrorMessage name="errorDescripcion" component="span" /> */}
          {/* <Field id="inputCrearAnuncio" name="descripcion" placeholder="Descripcion"/> */}

          <TextField
            fullWidth
            id="descripcion"
            name="descripcion"
            label="Descripción"
            margin="normal"
            // value={formik.values.descripcion}
            onChange={formik.handleChange}
          />
          {/* <Button variant="contained" onClick={aux} type="submit">Crear aviso</Button> */}
          <div className={styles.buttons}>
            <div>
              <Button variant="contained" onClick={aux} type="submit">
                Crear aviso
              </Button>
            </div>
            <div>
              <Button variant="contained" color="error">
                Cancelar
              </Button>
            </div>
          </div>
        </form>
        {/* </Formik> */}
      </Stack>
    </div>
  );
}

export default CreateAdvise;
