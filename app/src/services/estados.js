const baseUrl = "/api/estados";

const fetchEstados = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const fetchMunicipiosEstado = async (estadoId) => {
  const response = await fetch(`${baseUrl}/${estadoId}/municipios`);
  const data = await response.json();
  return data;
};

export { fetchEstados, fetchMunicipiosEstado };
