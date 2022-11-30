const baseUrl = "/api";

const fetchFormatos = async () => {
  const response = await fetch(`${baseUrl}/formatos`);
  const data = await response.json();
  return data;
};

// const deleteEquipo = async (id) => {};

export { fetchFormatos };
