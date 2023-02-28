import { useCustomForm, useEstados } from ".";
import { useEffect, useState } from "react";
import { getOnlyDate } from "@/utils";
import { registerSchema } from "@/validations";
import { useNavigate } from "react-router-dom";
import { usuariosService } from "@/services";

export const useRegister = () => {
  const {
    watch,
    // https://react-hook-form.com/api/useform/setvalue
    setValue,
    setError,
    ...form
  } = useCustomForm(registerSchema);

  const navigate = useNavigate();
  const watchEstadoId = watch("estadoId");
  const watchMunicipioId = watch("municipioId");
  const watchFechaNacimiento = watch("fechaNacimiento");

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

  const registerUser = async (userData) => {
    console.log({ userData });
    if (userData.password !== userData.confirmPassword) {
      setError("confirmPassword", {
        type: "focus",
        message: "Las contraseñas no coinciden",
      });
      return;
    }

    const {
      calle,
      colonia,
      codigoPostal,
      numeroExterior,
      numeroInterior,
      municipioId,
      fechaNacimiento,
      ...rest
    } = userData;

    const formattedFechaNacimiento = getOnlyDate(fechaNacimiento);

    const user = {
      ...rest,
      fechaNacimiento: formattedFechaNacimiento,
      domicilio: {
        calle,
        colonia,
        codigoPostal,
        numeroExterior,
        numeroInterior,
        municipioId,
      },
    };

    console.log({ user });

    usuariosService
      .createUser(user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setServerError(error);
      });
  };

  return {
    registerSchema,
    registerUser,
    serverError,
    currentEstado,
    selectedMunicipio,
    watchFechaNacimiento,
    setValue,
    ...form,
  };
};
