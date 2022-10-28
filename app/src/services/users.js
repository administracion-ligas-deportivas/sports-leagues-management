const baseUrl = "/api/users";

export const fetchUser = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);

  const data = await response.json();
  return data;
};
