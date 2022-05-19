import styles from "./InputButton.module.css";
import Button from "../Button";
import Input from "../Input/index";
// U parametros del Usuario

export default function InputButton({ nameU, placeholderU, contentU }) {
  return (
    // Seria el placeholder y el contenido del boton ?
    <div className={styles.inputButton}>
      <Input
        name={nameU}
        placeholder={placeholderU}
      />
      <Button variant="primary">{contentU}</Button>
    </div>
  );
}
