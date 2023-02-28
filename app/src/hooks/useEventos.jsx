import { ROUTE_PATHS } from "@/constants";
import { eventosService } from "@/services";
import { useEffect } from "react";
import useSWR from "swr";

export function useEventos(id) {
  const { 
    data: evento,
    error: eventoError,
    mutate: mutateEvento,
    isLoading: isLoadingEvento
  } = useSWR(
    // https://swr.vercel.app/docs/arguments
    id && [ROUTE_PATHS.eventos, id],
    ([url, id]) => eventosService.fetchEventoById(id)
  );

  const {
    data: eventos,
    error,
    mutate: mutateEventos,
    isLoading: isLoadingEventos
  } = useSWR(
    // https://swr.vercel.app/docs/conditional-fetching
    id === false && ROUTE_PATHS.eventos,
    eventosService.fetchEventosReales
  );

  useEffect(() => {
    console.log({ eventos, evento, eventoError, error });
  }, [eventos, evento, eventoError, error]);

  return {
    error,
    evento,
    eventoError,
    eventos,
    isLoadingEvento,
    mutateEvento,
    mutateEventos,
    isLoadingEventos
  };
}
