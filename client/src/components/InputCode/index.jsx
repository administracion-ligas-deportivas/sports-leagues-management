import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
/*  
Hay que agregar directamente los estilos. Si no, PostCSS los purga.

https://stackoverflow.com/a/66575373/13562806 
*/

import styles from "./InputCode.module.css";

import Button from "../Button";
import Label from "../Label";
import Input from "../Input";

/*----------------------MUI----------------------------*/
import { InputLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import Link from '@mui/material/Link';
/*-----------------------------------------------------*/

// U parametros del Usuario
// Molecula
export default function InputCode({ titleU, nameU, contentU }) {
  // const elementsContainer = [].join(" ");

  return (
    <>
      <div className={styles.container}>
        <Label
          content={titleU}
          htmlFor={nameU}
        />

        {/* <div className="flex flex-row gap-2"> */}
        <div className={styles.elementsContainer}>
          <Input
            id={nameU}
            name=""
            type="text"
            title=""
            placeholder=""
            readOnly
            disabled
          />
          <div className={styles.buttonsContainer}>
            <Button
              value="numero-placeholder"
              classNames={[styles.button]}
            >
              {contentU}
            </Button>
            <Button
              variant="primary"
              inverse
            >
              <FontAwesomeIcon
                icon={faCopy}
                className={styles.copyIcon}
                // size="2x"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* Seria el placeholder y el contenido del boton ? */}
    </>
  );
}
