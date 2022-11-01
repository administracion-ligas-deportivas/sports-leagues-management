import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import style from "@/styles/Home.module.css";

const pages = [
  { to: "/create-advise", text: "Crear Aviso" },
  { to: "/gestion-torneo", text: "Gestionar Torneo" },
  { to: "/nuevo-arbitro", text: "Nuevo Arbitro " },
  { to: "/crear-evento-deportivo", text: "Crear Evento Deportivo" },
  { to: "/enter-sports-event", text: "Entrar a Evento Deportivo" },
  { to: "/estadisticas-personales", text: "Estadisticas Personales" },
  { to: "/gestion-equipo-jugador", text: "Gestión de equipo jugador" },
  { to: "/asignar-roles", text: "Asignar Roles" },
  { to: "/registro-deportivo", text: "Registro deportivo" },
  { to: "/traspaso-equipo", text: "Traspaso de equipo" },
  { to: "/nueva-cancha", text: "Nueva Cancha" },
  { to: "/eventos-deportivos", text: "Eventos Deportivos" },
  { to: "/registro-estadistico", text: "Registrar Estadistico" },
  { to: "/equipos-en-sistema", text: "Equipos en sistema" },
  { to: "/gestion-equipo", text: "Gestión de equipo" },
  { to: "/registro-pago-fisico", text: "Registro de pago físico " },
];

function HomeAdmin() {
  return (
    <>
      <div className={style.container}>
        <h2>Pantallas Realizadas</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".5rem",
          }}
        >
          {pages.map((page) => {
            return (
              <Link key={page.to} to={page.to} className={style.link}>
                <Button variant="contained">{page.text}</Button>
              </Link>
            );
          })}
        </div>
        <div>{pages.length} pantallas</div>
      </div>
    </>
  );
}

export default HomeAdmin;
