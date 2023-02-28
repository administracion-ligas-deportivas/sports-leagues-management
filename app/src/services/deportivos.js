import { authService } from "./auth";
const baseUrl = "/api/deportivos";

const fetchDeportivos = async () => {
  const bearerToken = authService.getBearerToken();
  
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: bearerToken
    }
  });
  
  const data = await response.json();
  return data;
};

export const createDeportivo = async (deportivo) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deportivo),
  });
  
  const data = await response.json();
  return data;
};

const fetchDeportivoById = async (id) => {
  const response = await fetch(`/api/deportivos/${id}`);
  const data = await response.json();
  return data;
};

const deportivosService = {
  baseUrl,
  createDeportivo,
  fetchDeportivos,
  fetchDeportivoById
};

export { deportivosService, fetchDeportivos, fetchDeportivoById};
