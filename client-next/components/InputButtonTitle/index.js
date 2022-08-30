import styles from "./InputButtonTitle.module.css";
import Button from "../Button";
import Label from "../Label";
import Input from "../Input/index";

// U de que es el parametro que ingresa el usuario
// Esta es la molecula
export default function InputButtonTitle({
  titleU,
  nameU,
  placeholderU,
  contentU,
}) {
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
            placeholder={placeholderU}
          />
          <div className={styles.buttonsContainer}>
            <Button
              value="numero-placeholder"
              classNames={[styles.button]}
            >
              {contentU}
            </Button>
          </div>
        </div>
      </div>
      {/* Seria el placeholder y el contenido del boton ? */}
    </>
  );
}
