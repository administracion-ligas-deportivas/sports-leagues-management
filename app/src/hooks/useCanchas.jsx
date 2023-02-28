import { ROUTE_PATHS } from "@/constants";
import { canchasSchema } from "@/validations";
import { canchasService } from "@/services";
import { useCustomForm } from ".";
import useSWR from "swr";
import { useState } from "react";

export const useCanchas = () => {
  const { data, error, mutate } = useSWR(
    ROUTE_PATHS.canchas,
    canchasService.fetchCanchas
  );

  const {
    watch,
    // https://react-hook-form.com/api/useform/setvalue
    setValue,
    setError,
    reset,
    ...form
  } = useCustomForm(canchasSchema);

  // const watchDeportivoId = watch("deportivoId");

  const [serverError, setServerError] = useState("");

  // useEffect(() => {
  //     if (!watchDeportivoId) {
  //         resetCurrentDeportivo();
  //         return;
  //     }

  //     setValue("deportivoId", null);
  // }, [watchDeportivoId]);

  const registerCancha = ({ nombre, numero, descripcion, deportivoId } = {}) => {
    console.log({ nombre, numero, descripcion, deportivoId });

    canchasService
      .createCanchaInDeportivo({ 
        nombre, 
        numero, 
        descripcion, 
        deportivoId 
      })
      .then(() => {
        alert("Cancha registrada correctamente");
        // reset();
      })
      .catch((error) => {
        setServerError(error);
      });
  };

  return {
    canchas: error ? null : data,
    canchasSchema,
    isLoading: !error && !data,
    mutateCanchas: mutate,
    registerCancha,
    serverError,
    setValue,
    ...form,
  };
};
