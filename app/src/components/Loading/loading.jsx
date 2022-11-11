import React from "react";
import styles from "../Loading/Loading.module.css";

function Loading() {
  const futbolImg = "/cargar2.gif";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={futbolImg} alt="PageNotFound" width="400px" />
          <p>Cargando...</p>
        </div>
      </div>
    </>
  );
}

export default Loading;
