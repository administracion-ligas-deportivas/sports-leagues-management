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

export {fetchDeportivos};