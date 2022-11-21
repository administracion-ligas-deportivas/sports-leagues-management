import { ACCESS_TOKEN_STRING } from "@/constants/auth";
import { usuariosService } from "./usuarios";

const baseUrl = "/api";
const LOGIN_URL = `${baseUrl}/login`;
export const VERIFY_URL = `${usuariosService.baseUrl}/verify`;

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN_STRING));
};

const getBearerToken = (token) => {
  const authToken = token ?? getUserFromLocalStorage()?.token;
  return `Bearer ${authToken}`;
};

const login = async ({ correo, password } = {}) => {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ correo, password }),
  });

  const data = await response.json();
  return data;
};

const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_STRING);
};

const authenticateLoggedUser = async () => {
  const user = getUserFromLocalStorage();

  if (!user?.token) {
    throw new Error("No hay user o token en el localStorage");
  }

  const bearerToken = getBearerToken(user?.token);

  const data = await fetch(VERIFY_URL, {
    headers: { Authorization: bearerToken },
  }).then((res) => {
    console.log(res);
    return res.json();
  });

  return data;
};

const authService = {
  login,
  logout,
  authenticateLoggedUser,
  getBearerToken,
};

export { authService };
