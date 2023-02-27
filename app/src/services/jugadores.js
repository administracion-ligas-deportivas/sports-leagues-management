const baseUrl = "/local-api";

const fetchJugadores = async () => {
  const response = await fetch(`${baseUrl}/jugadores.json`);
  const data = await response.json();
  return data;
};

const deleteJugador = async (id) => {};

const jugadoresService = {
  fetchJugadores,
  deleteJugador,
};

export { jugadoresService, fetchJugadores, deleteJugador };
