import { useCustomForm, useEstados } from "..";
import { useEffect, useState } from "react";
import { deportivoSchema } from "@/validations";
import { deportivosService } from "@/services";
import { useNavigate } from "react-router-dom";

export const useDeportivosForm = () => {
  const {
    watch,
    // https://react-hook-form.com/api/useform/setvalue
    setValue,
    setError,
    ...form
  } = useCustomForm(deportivoSchema);

  const navigate = useNavigate();
  const watchEstadoId = watch("estadoId");
  const watchMunicipioId = watch("municipioId");

  const { 
    currentEstado, 
    findMunicipiosEstado, 
    resetCurrentEstado 
  } = useEstados();

  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (!watchEstadoId) {
      resetCurrentEstado();
      setSelectedMunicipio(null);
      return;
    }

    findMunicipiosEstado(watchEstadoId);
    setValue("municipioId", null);
  }, [watchEstadoId]);

  useEffect(() => {
    if (!watchMunicipioId && !currentEstado?.municipios) {
      setSelectedMunicipio(null);
      return;
    }

    const newSelectedMunicipio = currentEstado?.municipios.find(
      (municipio) => municipio.id === watchMunicipioId
    );

    setSelectedMunicipio(newSelectedMunicipio ?? null);
  }, [watchMunicipioId]);

  const registerDeportivo = async (userData) => {
    console.log({ userData });
    const {
      nombre,
      calle,
      colonia,
      codigoPostal,
      numeroExterior,
      numeroInterior,
      municipioId,
      ...rest
    } = userData;

    const deportivo = {
      ...rest,
      nombre,
      calle,
      colonia,
      codigoPostal,
      numeroExterior,
      numeroInterior,
      municipioId
    };

    console.log({ deportivo });

    deportivosService
      .createDeportivo(deportivo)
      .then(() => {
        alert("Deportivo registrado con éxito");
      })
      .catch((error) => {
        setServerError(error);
      });
  };

  return {
    deportivoSchema,
    registerDeportivo,
    serverError,
    currentEstado,
    selectedMunicipio,
    setValue,
    ...form,
  };
};
