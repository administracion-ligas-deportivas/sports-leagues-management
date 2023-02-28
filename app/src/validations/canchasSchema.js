import { number, object, string } from "yup";
import { transformNaN } from "@/utils";

// https://stackoverflow.com/a/60726477/13562806
export const canchasSchema = object({
  nombre: string().required("Nombre requerido"),
  numero: number().required("Número de cancha requerido"),
  descripcion: string().required("Descripción requerida"),
  deportivoId: number().transform(transformNaN).required("Deportivo requerido"),
});
