const baseUrl = "/api/formatos";

const fetchFormatos = async () => {
  const response = await fetch(`${baseUrl}`);
  const data = await response.json();
  return data;
};

// const deleteEquipo = async (id) => {};

export { fetchFormatos };
