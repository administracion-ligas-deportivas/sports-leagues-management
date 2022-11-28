import { authService, VERIFY_URL } from "@/services/auth";
import useSWR from "swr";

// https://swr.vercel.app/docs/getting-started#make-it-reusable
export function useUser() {
  // https://swr.vercel.app/docs/conditional-fetching#conditional
  const { data, error, mutate } = useSWR(
    VERIFY_URL,
    authService.authenticateLoggedUser
  );

  // console.log({ data });
  // const mutateUser = useCallback((user) => mutate(user), [mutate]);

  return {
    user: error ? null : data?.user,
    isLoading: !error && !data,
    isError: error,
    mutateUser: mutate,
  };
}
