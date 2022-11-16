const baseUrl = "/local-api";

const fetchEquipos = async () => {
  const response = await fetch(`${baseUrl}/jugadores.json`);
  const data = await response.json();
  return data;
};

const deleteEquipo = async (id) => {};

export { fetchEquipos, deleteEquipo };