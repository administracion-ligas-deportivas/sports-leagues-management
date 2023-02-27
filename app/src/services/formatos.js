import { authService } from "./auth";
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

// const deleteEquipo = async (id) => {};

const formatosService = {
  fetchFormatos,
  // deleteEquipo,
};

export { formatosService, fetchFormatos };
