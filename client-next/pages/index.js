import "@fortawesome/fontawesome-svg-core/styles.css";

import Head from "next/head";

import InputButton from "../components/InputButton";
import Footer from "../components/Footer";
import SingleStat from "../components/Statistics";
import UserIcon from "../components/Icon";
import InputButtonTitle from "../components/InputButtonTitle";
import InputCode from "../components/InputCode";
// import Input from "../components/Input/index";

// import Image from "next/image";
import OldInput from "../components/OldInput";
import Input from "../components/Input";
import Label from "../components/Label";
import Jugador from "../components/Jugador";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const getButtonVariants = (variant, index) => {
  const buttons = [];

  for (let i = 0; i < 2; i++) {
    const disabled = i === 1;
    const key = `${variant}${disabled ? "-disabled" : ""}-${index}`;

    buttons.push(
      <Button
        variant={variant}
        disabled={disabled}
        key={key}
      >
        {`${variant}${disabled ? " disabled" : ""}`}
      </Button>
    );
  }
  return buttons;
};

export default function Home() {
  const buttonTypes = ["primary", "secondary", "accent"];
  const pages = [
    { route: "/", title: "Home" },
    { route: "/create-sports-event", title: "Crear Evento Deportivo" },
    { route: "/create-team", title: "Crear Equipo" },
    { route: "/editar-perfil", title: "Editar Perfil" },
    { route: "/enter-sports-event", title: "Ingreso a evento deportivo" },
    { route: "/estadisticas-personales", title: "Estadisticas Personales" },
    { route: "/gestion-equipo", title: "Gestion Equipo" },
    { route: "/gestion-torneo", title: "Gestión torneo" },
    { route: "/login", title: "Iniciar sesión" },
    { route: "/registro-arbitro", title: "Registro de Arbitro" },
    {
      route: "/registro-estadistico",
      title: "Registro capturador de estadísticas",
    },
    { route: "/signup", title: "Registrarse" },
    { route: "/team-statistics", title: "Subir estadísticas de equipo" },
  ];

  return (
    <>
      <Head>
        <title>Administración de Ligas Deportivas</title>
        <meta
          name="description"
          content="Administración de Ligas Deportivas"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbar />
      <div className="container mx-auto p-2">
        <div>
          <Label
            htmlFor="new-input"
            content="Nuevo Input"
          >
            <Input
              id="new-input"
              placeholder="Nuevo Input"
            />
          </Label>
          {/* <OldInput /> */}
          <Jugador />

          <section className="flex flex-wrap flex-row p-1 gap-2">
            <Button
              variant="accent"
              isSpaLink
              href="/login"
            >
              Iniciar sesión
            </Button>
            <Button
              variant="secondary"
              href="/signup"
              isSpaLink
            >
              Regístrate
            </Button>
            {buttonTypes.map((variant, index) => {
              const buttons = getButtonVariants(variant, index);
              return buttons.map((button) => button);
            })}
          </section>
        </div>
        <section className="py-3">
          <h1 className="text-xl font-bold"> PANTALLAS </h1>
          <div className="flex flex-wrap flex-row p-1 gap-2">
            {pages.map((page) => (
              <Button
                variant="accent"
                href={page.route}
                isSpaLink
                key={page.route}
              >
                {page.title}
              </Button>
            ))}
          </div>
        </section>
        <div>
          {/* <InputButton
            nameU="codigo"
            placeholderU="Ingresa"
            contentU="Registro"
          /> */}
          <SingleStat
            pj={20}
            pg={20}
            pp={20}
            pe={20}
            nj={20}
          />
          <UserIcon />
          <InputButtonTitle
            titleU="Añadir integrante"
            nameU="addIntegrante"
            placeholderU="Ingresa el nombre del jugador"
            contentU="Añadir"
          />
          <InputCode
            titleU="Código de acceso"
            nameU="accessCode"
            placeholderU="Código"
            contentU="Generar código"
          />
          {/* <Input
          title="Titulo"
          name="input"
          placeholder="Input"
        /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
