const baseUrl = "/api";

const fetchEquipos = async () => {
  const response = await fetch(`${baseUrl}/equipos`);
  const data = await response.json();
  return data;
};

const deleteEquipo = async (id) => {};

export { fetchEquipos, deleteEquipo };
