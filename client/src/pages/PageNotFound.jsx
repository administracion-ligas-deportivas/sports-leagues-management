import React from "react";
/*---------RECURSOS---------*/
import style from "../styles/PageNotFound.module.css";
import myimg from "../../public/FUTBOL.gif";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className={style.container}>
        <div className={style.img}>
          <img src={myimg} alt="PageNotFound" width="500px" />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Oh, no!</h1>
          {/* <p className={style.parrafo}>Al parecer has alcanzado el limite permitido, pero no te preocupes, aquí está el camino de regreso</p> */}
          <p className={style.parrafo}>A veces uno gana y a veces uno se pierde, pero no te preocupes que aqui está el camino de regreso</p>
          <p className={style.error}>Error 404 | Page not found</p>
          <div className={style.cuadro}>
            <Link to='/home' className={style.link}> 
              <Button variant="outlined" size="large"> Inicio </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;