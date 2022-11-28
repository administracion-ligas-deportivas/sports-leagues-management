import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import style from "@/styles/Home.module.css";

function PanelAdmin() {
  const pages = [
    { to: "/asignar-roles", text: "Asignar Roles" },
    { to: "/eventos-deportivos", text: "Eventos Deportivos" },
    { to: "/equipos-en-sistema", text: "Equipos en sistema" },
  ];

  return (
    <>
      <div className={style.container}>
        <Stack>
          <h1>Panel de administrador</h1>
        </Stack>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5rem",
            justifyContent: "center",
            // justifyContent: "space-between"
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
        {/* <div>{pages.length} pantallas</div> */}
      </div>
    </>
  );
}

export default PanelAdmin;
