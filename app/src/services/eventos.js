const baseUrl = '/local-api';

const fetchEventos = async () => {
  const response = await fetch(`${baseUrl}/eventos.json`);
  const data = await response.json();
  return data;
};

const deleteEvento = async (id) => {};

export { fetchEventos, deleteEvento };