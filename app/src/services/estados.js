// const baseUrl = "/local-api";

const fetchEstados = async () => {
  const response = await fetch(`/api/estados`);
  const data = await response.json();
  return data;
};

export { fetchEstados };


