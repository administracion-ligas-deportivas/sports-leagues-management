import { number, object, string } from "yup";
import { transformNaN } from "@/utils";

export const domicilioUsuarioSchema = object({
  calle: string().required("Calle requerida"),
  colonia: string().required("Colonia requerida"),
  codigoPostal: string().required("Código postal requerido"),
  numeroExterior: string().required("Número exterior requerido"),
  numeroInterior: string(),
  estadoId: number().transform(transformNaN).required("Estado requerido"),
  municipioId: number().transform(transformNaN).required("Municipio requerido"),
});
