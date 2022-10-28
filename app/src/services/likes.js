import { authService } from "./auth";

const baseUrl = "/api/likes";

export const likePost = async (postId) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authService.getBearerToken(),
    },
    body: JSON.stringify({ PostID: postId }),
  });

  const data = await response.json();
  return data;
};
