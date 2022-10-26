const baseUrl = "/api/posts";

export const fetchPostById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const data = await response.json();
  return data;
};
