const baseUrl = "/local-api";

const fetchEventos = async () => {
  const response = await fetch(`${baseUrl}/eventos`);
  const data = await response.json();
  return data;
};

const fetchEventosReales = async () => {
  const response = await fetch("/api/eventos");
  const data = await response.json();
  return data;
};

const fetchEventoById = async (id) => {
  const response = await fetch(`/api/eventos/${id}`);
  const data = await response.json();
  console.log({ data });
  return data;
};

const deleteEvento = async (id) => {};

export { fetchEventos, deleteEvento, fetchEventosReales, fetchEventoById };
