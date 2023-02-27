import { authService } from "./auth";
const baseUrl = "/api/usuarios";

const fetchUsuarios = async () => {
const bearerToken = authService.getBearerToken();

  const response = await fetch(baseUrl, {
    headers: {
      Authorization: bearerToken
    }
  });

  const data = await response.json();
  return data;
};

export { fetchUsuarios };
