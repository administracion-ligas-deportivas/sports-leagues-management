const baseUrl = "/local-api";

const fetchEventos = async () => {
  const response = await fetch(`${baseUrl}/eventos`);
  const data = await response.json();
  return data;
};

const fetchEventosReales = async () => {
  const response = await fetch(`/api/eventos`);
  const data = await response.json();
  return data;
};

const deleteEvento = async (id) => {};

export { fetchEventos, deleteEvento, fetchEventosReales };
