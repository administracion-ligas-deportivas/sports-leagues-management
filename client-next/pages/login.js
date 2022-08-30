// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import myimg from "../public/img-login.png";
import styles from "../styles/LoginSignup.module.css";
import Input from "../components/Input/index";
import Label from "../components/Label";
import Button from "../components/Button/index";

function Login() {
  const imageClasses = [styles.container, "hidden", "sm:flex"].join(" ");

  return (
    <div className="flex flex-col justify-between h-full">
      <section className={[styles.mainContainer]}>
        <section className={imageClasses}>
          <h1 className={styles.titleLeague}>
            Administración de Ligas Deportivas
          </h1>
          <Image
            src={myimg}
            width="300px"
            height="300px"
          />
        </section>
        <main className={[styles.container, styles.loginContainer].join(" ")}>
          <nav className={styles.navLogin}>
            <Link
              href="./signup"
              passHref
            >
              <a
                href="dummy-href"
                className={styles.elementsContainerAnchor}
              >
                {" "}
                Regístrate ahora{" "}
              </a>
            </Link>
          </nav>
          <h1 className={styles.titlePage}>Inicia sesión</h1>
          <form
            action=""
            className={styles.formContainer}
          >
            <Label
              htmlFor="user-label"
              content="Correo o teléfono"
            >
              <Input
                id="user-input"
                placeholder="Correo o teléfono"
              />
            </Label>
            <Label
              htmlFor="user-label-pass"
              content="Contraseña"
            >
              <Input
                id="user-input-pass"
                placeholder="Contraseña"
              />
            </Label>
            <Button variant="primary">
              <p>Iniciar sesión</p>
            </Button>
          </form>
        </main>
      </section>
    </div>
  );
}

export default Login;
