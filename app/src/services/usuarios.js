const baseUrl = "/api/usuarios";

export const fetchUser = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);

  const data = await response.json();
  return data;
};

export const createUser = async (user) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  return data;
};

export const usuariosService = {
  baseUrl,
};
