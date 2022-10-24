import axios from "axios";

const ACCESS_TOKEN_STRING = "aldLoggedUser";
const API_PORT = 3001;
const BASE_AUTH_URL = `http://localhost:${API_PORT}/api`;
const LOGIN_URL = `${BASE_AUTH_URL}/login`;
const VERIFY_URL = `${BASE_AUTH_URL}/users/verify`;

const login = async ({ correo, password } = {}) => {
  const { data } = await axios.post(LOGIN_URL, { correo, password });
  return data;
};

const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_STRING);
};

const authenticateLoggedUser = async (signal) => {
  const user = localStorage.getItem(ACCESS_TOKEN_STRING);

  if (!user) {
    // Throw exception
    throw new Error("No hay user en el localStorage");
  }

  const { token } = JSON.parse(user);

  if (!token) {
    // Throw exception
    throw new Error("No hay token en el localStorage");
  }

  const accessToken = `Bearer ${token}`;

  const data = await fetch(VERIFY_URL, {
    signal,
    headers: { Authorization: accessToken },
  }).then((res) => res.json());

  return data;
};

const authService = {
  login,
  logout,
  authenticateLoggedUser,
};

export { authService };
