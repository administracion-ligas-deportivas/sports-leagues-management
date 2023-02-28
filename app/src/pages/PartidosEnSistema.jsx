import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { HomeStyles } from "@/styles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { usePartidos } from "@/hooks";

function PartidosEnSistema() {
  const { partidos, isLoadingPartidos } = usePartidos();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      partidos?.map(({ 
        id, fecha, efectuado, cancha, estadistico, eventoDeportivo 
      }) => ({
        id,
        fecha: dayjs(fecha).format("DD/MMM/YYYY"),
        efectuado: efectuado ? "Sí" : "No",
        cancha: `#${cancha?.numero} - ${cancha?.nombre}`,
        estadistico: `${estadistico?.nombre} ${estadistico?.apellido}`,
        eventoDeportivo: {
          nombre: eventoDeportivo?.nombre,
          id: eventoDeportivo?.id,
        },
      }))
    );
  }, [partidos]);

  const columns = [
    { field: "id", headerName: "ID", },
    {
      field: "efectuado",
      headerName: "Efectuado",
    },
    {
      field: "fecha",
      headerName: "Fecha",
      flex: 1
    },
    {
      field: "cancha",
      headerName: "Cancha",
      flex: 1
    },
    {
      field: "estadistico",
      headerName: "Estadístico",
      flex: 1
    },
    {
      field: "eventoDeportivo",
      headerName: "Evento deportivo",
      flex: 1,
      renderCell: (params) => params.value?.id && (
        <Link to={`/gestion-evento-deportivo/${params.value.id}`}>
          {params.value.nombre}
        </Link>
      ),
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Partidos en el sistema</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={HomeStyles.rectangle}>
            <Box sx={{ width: "100%" }}>
              <DataGrid
                rows={rows || []}
                columns={columns}
                pageSize={5}
                autoPageSize={true}
                loading={isLoadingPartidos}
                autoHeight={true}
                rowsPerPageOptions={[5]}
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartidosEnSistema;
