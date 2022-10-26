import axios from "axios";

const ACCESS_TOKEN_STRING = "aldLoggedUser";

const baseUrl = "/api";
const LOGIN_URL = `${baseUrl}/login`;
const VERIFY_URL = `${baseUrl}/users/verify`;

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN_STRING));
};

const getBearerToken = (token) => {
  const authToken = token ?? getUserFromLocalStorage()?.token;
  return `Bearer ${authToken}`;
};

const login = async ({ correo, password } = {}) => {
  const { data } = await axios.post(LOGIN_URL, { correo, password });
  return data;
};

const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN_STRING);
};

const authenticateLoggedUser = async (signal) => {
  const user = getUserFromLocalStorage();

  if (!user?.token) {
    // Throw exception
    throw new Error("No hay user o token en el localStorage");
  }

  const bearerToken = getBearerToken(user?.token);
  console.log(
    "🚀 ~ file: auth.js ~ line 36 ~ authenticateLoggedUser ~ bearerToken",
    bearerToken
  );

  const data = await fetch(VERIFY_URL, {
    signal,
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
  ACCESS_TOKEN_STRING,
};

export { authService };
