import { useCustomForm, useDeportivos} from ".";
import { useEffect, useState } from "react";
import { canchasSchema } from "@/validations/canchasSchema";
import { useNavigate } from "react-router-dom";
import { canchasService } from "@/services/canchas";

export const useCanchas = () => {
const {
    watch,
    // https://react-hook-form.com/api/useform/setvalue
    setValue,
    setError,
    ...form
} = useCustomForm(canchasSchema);

const navigate = useNavigate();
// const watchDeportivoId = watch("deportivoId");


const [serverError, setServerError] = useState("");

// useEffect(() => {
//     if (!watchDeportivoId) {
//         resetCurrentDeportivo();
//         return;
//     }

//     setValue("deportivoId", null);
// }, [watchDeportivoId]);

const registerCan = async (userData) => {
    console.log({ userData });
    const {
        nombre,
        numero,
        descripcion,
        deportivoId,
        ...rest
    } = userData;

    const cancha = {
        ...rest,
        nombre,
        numero,
        descripcion,
        deportivoId,
    };

    console.log({ cancha });
    
    canchasService.createCancha(cancha)
    .then(() => {
        navigate("/");
    })
    .catch((error) => {
        setServerError(error);
    });
};

return {
    canchasSchema,
    registerCan,
    serverError,
    setValue,
    ...form,
};
};
