import { authService } from "@/services/auth";
import { useCallback, useEffect } from "react";
import useSWR from "swr";

// https://swr.vercel.app/docs/getting-started#make-it-reusable
export function useUser() {
  // https://swr.vercel.app/docs/conditional-fetching#conditional
  const { data, error, mutate } = useSWR(
    "/api/users/verify",
    authService.authenticateLoggedUser
  );
  console.log("🚀 ~ file: useUser.js ~ line 8 ~ useUser ~ data", error);

  // const mutateUser = useCallback((user) => mutate(user), [mutate]);

  return {
    user: error ? null : data?.user,
    isLoading: !error && !data,
    isError: error,
    mutateUser: mutate,
  };
}
