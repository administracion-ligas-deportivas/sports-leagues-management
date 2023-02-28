import { authService } from "./auth";
// import { ROUTE_PATHS } from "@/constants";
const baseUrl = "/api/formatos";

const fetchFormatos = async () => {
  const bearerToken = authService.getBearerToken();
  
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: bearerToken
    }
  });
  
  const data = await response.json();
  return data;
};

export const createFormato = async (formato) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formato),
  });
  
  const data = await response.json();
  return data;
};


// const deleteEquipo = async (id) => {};

const formatosService = {
  baseUrl,
  fetchFormatos,
  createFormato,
  // deleteEquipo,
};

export { formatosService, fetchFormatos };
