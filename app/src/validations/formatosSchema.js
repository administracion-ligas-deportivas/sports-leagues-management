import { date, number, object } from "yup";
import { transformNaN } from "@/utils";
import { string } from "yup/lib/locale";

// https://stackoverflow.com/a/60726477/13562806
export const formatosSchema = object({
nombre: string().required("Nombre requerido"),
descripcion: string().required("Descripción requerida"),
maximoEquipos: number().required("Número máximo de equipos requerido"),
deporteId: number().transform(transformNaN).required("Deporte requerido"),
tipoEventoDeportivoId: number().transform(transformNaN).required("Tipo de evento deportivo requerido"),
organizadorId: number().transform(transformNaN).required("Organizador requerido"),
});
