import useSWR from "swr";
import { authService } from "@/services/auth";

// https://swr.vercel.app/docs/getting-started#make-it-reusable
export function useUser() {
  // https://swr.vercel.app/docs/conditional-fetching#conditional
  const { data, error, mutate } = useSWR(
    "/api/users/verify",
    authService.authenticateLoggedUser
  );
  // const mutateUser = useCallback((user) => mutate(user), [mutate]);

  return {
    isLoading: !error && !data,
    isError: error,
    mutateUser: mutate,
  };
}
