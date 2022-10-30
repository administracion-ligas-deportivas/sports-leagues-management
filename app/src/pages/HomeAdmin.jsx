import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import style from "@/styles/Home.module.css";

function HomeAdmin() {
  return (
    <>
      <div className={style.container}>
        <h2>Pantallas Realizadas</h2>
        <Stack direction="row" spacing={2}>
          <Link to="/CreateAdvise" className={style.link}>
            <Button variant="contained"> Crear Aviso </Button>
          </Link>
          <Link to="/gestion-torneo" className={style.link}>
            <Button variant="contained"> Gestionar Torneo </Button>
          </Link>
          <Link to="/NuevoArbitro" className={style.link}>
            <Button variant="contained"> Nuevo Arbitro </Button>
          </Link>
          <Link to="/CrearEventoDeportivo" className={style.link}>
            <Button variant="contained"> Crear Evento Deportivo </Button>
          </Link>
          <Link to="/EnterSportsEvent" className={style.link}>
            <Button variant="contained"> Entrar a Evento Deportivo</Button>
          </Link>
          <Link to="/EstadisticasPersonales" className={style.link}>
            <Button variant="contained"> Estadisticas Personales</Button>
          </Link>
        </Stack>
        <br></br>
        <Stack direction="row" spacing={2}>
          <Link to="/GestionEquipoJugador" className={style.link}>
            <Button variant="contained"> Gestión de equipo jugador</Button>
          </Link>
          <Link to="/AsignarRoles" className={style.link}>
            <Button variant="contained"> Asignar Roles </Button>
          </Link>
          <Link to="/RegistroDeportivo" className={style.link}>
            <Button variant="contained"> Registro deportivo </Button>
          </Link>
          <Link to="/TraspasoEquipo" className={style.link}>
            <Button variant="contained"> Traspaso de equipo </Button>
          </Link>
          <Link to="/NuevaCancha" className={style.link}>
            <Button variant="contained"> Nueva Cancha </Button>
          </Link>
          <Link to="/EventosDeportivos" className={style.link}>
            <Button variant="contained"> Eventos Deportivos</Button>
          </Link>
        </Stack>
        <br></br>
        <Stack direction="row" spacing={2}>
          <Link to="/RegistroEstadistico" className={style.link}>
            <Button variant="contained"> Registrar Estadistico</Button>
          </Link>
          <Link to="/EquiposEnSistema" className={style.link}>
            <Button variant="contained"> Equipos en sistema</Button>
          </Link>
          <Link to="/GestionEquipo" className={style.link}>
            <Button variant="contained"> Gestión de equipo</Button>
          </Link>
          <Link to="/RegistroPagoFisico" className={style.link}>
            <Button variant="contained"> Registro de pago físico </Button>
          </Link>
        </Stack>
      </div>
    </>
  );
}

export default HomeAdmin;
