import { ROUTE_PATHS } from "@/constants";
import { authService } from "./auth";
const baseUrl = "/api/canchas";

const fetchCanchas = async () => {
  const bearerToken = authService.getBearerToken();
    
  const response = await fetch(baseUrl, {
    headers: {
      Authorization: bearerToken
    }
  });
    
  const data = await response.json();
  return data;
};

export const createCanchaInDeportivo = async ({ nombre, numero, descripcion, deportivoId } = {}) => {
  const url = `${ROUTE_PATHS.deportivos}/${deportivoId}/canchas`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, numero, descripcion }),
  });
    
  return await response.json();
};

const canchasService = {
  baseUrl,
  createCanchaInDeportivo,
  fetchCanchas,
};

export { canchasService, fetchCanchas };
