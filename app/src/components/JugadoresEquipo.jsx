import { useJugadores } from "@/hooks/useJugadores";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function JugadoresEquipo() {
  const { jugadores, deleteJugador } = useJugadores();
  const columns = [
    {
      field: "Eliminar",
      width: 90,
      renderCell: () => {
        return (
          <IconButton onClick={(e) => deleteJugador(e.target.value.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
    {
      field: "nombre",
      headerName: "Nombre(s)",
    },
    {
      field: "apellido",
      headerName: "Apellidos",
    },
    {
      field: "fechaNacimiento",
      headerName: "Fecha de nacimiento",
    },
  ];

  return (
    <DataGrid
      rows={jugadores}
      columns={columns}
      pageSize={4}
      rowsPerPageOptions={[4]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
