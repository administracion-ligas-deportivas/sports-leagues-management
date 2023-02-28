import { canchasSchema } from "@/validations";
import { canchasService } from "@/services";
import { useCustomForm } from ".";
import { useState } from "react";

export const useCanchas = () => {
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
    canchasSchema,
    registerCancha,
    serverError,
    setValue,
    ...form,
  };
};
