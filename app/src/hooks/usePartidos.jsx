import { ROUTE_PATHS } from "@/constants";
import { partidosService } from "@/services";
import { useEffect } from "react";
import useSWR from "swr";

export const usePartidos = (id) => {
  const { 
    data: partido,
    error: partidoError,
    mutate: mutatePartido,
    isLoading: isLoadingPartido
  } = useSWR(
    // https://swr.vercel.app/docs/arguments
    id && [ROUTE_PATHS.partidos, id],
    ([url, id]) => partidosService.fetchPartidoById(id)
  );

  const {
    data: partidos,
    error,
    mutate: mutatePartidos,
    isLoading: isLoadingPartidos
  } = useSWR(
    // https://swr.vercel.app/docs/conditional-fetching
    !id && ROUTE_PATHS.partidos,
    partidosService.fetchPartidos
  );

  useEffect(() => {
    console.log({ partidos, partido, partidoError, error });
  }, [partidos, partido, partidoError, error]);

  return {
    error,
    partidos,
    partido,
    partidoError,
    isLoadingPartido,
    mutatePartido,
    mutatePartidos,
    isLoadingPartidos
  };
};
