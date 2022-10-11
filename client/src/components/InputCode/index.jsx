// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopy } from "@fortawesome/free-solid-svg-icons";
/*  
Hay que agregar directamente los estilos. Si no, PostCSS los purga.

https://stackoverflow.com/a/66575373/13562806 
*/

import styles from "./InputCode.module.css";

// import Button from "../Button";
// import Label from "../Label";
// import Input from "../Input";

/*----------------------MUI----------------------------*/
// import { InputLabel } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CancelIcon from "@mui/icons-material/Cancel";
// import Link from "@mui/material/Link";
import { TextField } from "@mui/material";
/*-----------------------------------------------------*/

// U parametros del Usuario
// Molecula
export default function InputCode() {
  // const elementsContainer = [].join(" ");

  return (
    <>
      <div className={styles.container}>
        {/* <div className="flex flex-row gap-2"> */}
        <div className={styles.elementsContainer}>
          <TextField
            fullWidth
            disabled
            id="access-code"
            label="Código de acceso"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <div className={styles.buttonsContainer}></div>
        </div>
      </div>
      {/* Seria el placeholder y el contenido del boton ? */}
    </>
  );
}
