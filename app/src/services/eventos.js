import { authService } from "./auth";

const baseUrl = "/api/eventos";

const fetchEventos = async () => {
  const response = await fetch(`${baseUrl}/eventos`);
  const data = await response.json();
  return data;
};

const fetchEventosReales = async () => {
  const bearerToken = authService.getBearerToken();

  const response = await fetch(baseUrl, {
    headers: {
      Authorization: bearerToken
    }
  });

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
