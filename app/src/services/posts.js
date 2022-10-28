import { authService } from "./auth";

const baseUrl = "/api/posts";

export const fetchPosts = async () => {
  const res = await fetch(baseUrl, {
    headers: {
      Authorization: authService.getBearerToken(),
    },
  });

  const data = await res.json();
  return data;
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`);
  const data = await response.json();

  return data;
};

export const createPost = async (data) => {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authService.getBearerToken(),
    },
    body: JSON.stringify(data),
  });
};

export const deletePost = async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authService.getBearerToken(),
    },
  });
};
