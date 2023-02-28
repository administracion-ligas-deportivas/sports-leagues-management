import { ROUTE_PATHS } from "@/constants";
import { useEffect, useState } from "react";
import { fetchFormatos } from "@/services/formatos";
import { formatosSchema } from "@/validations/formatosSchema";
import { formatosService } from "@/services/formatos";
import { useCustomForm } from ".";
import useSWR from "swr";

export function useFormatos() {

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
  } = useCustomForm(formatosSchema);

  const registerFormato = ({ nombre, numero, descripcion, deportivoId } = {}) => {
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
  const [formatos, setFormatos] = useState([]);
  // const [error, setError] = useState(null);
  useEffect(() => {
    fetchFormatos().then(( { formatos } ) => {
      if (!formatos) {
        setError("No se encontraron formatos");
        return;
      }

      setFormatos(formatos);
    })
      .catch((error) => {
        console.log({ error });
        setError(error);
      });
  }, []);

  useEffect(() => {
    console.log({ formatos, error });
  }, [formatos, error]);

  return {
    formatos,
    error
  };
}
