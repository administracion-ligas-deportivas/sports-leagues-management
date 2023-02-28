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

export const createCancha = async (cancha) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(cancha),
    });
    
    const data = await response.json();
    return data;
};

const canchasService = {
    baseUrl,
    createCancha,
    fetchCanchas,
};

export { canchasService, fetchCanchas };