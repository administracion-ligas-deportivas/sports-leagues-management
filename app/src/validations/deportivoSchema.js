import { number, object, string } from "yup";
import { transformNaN } from "@/utils";

// https://stackoverflow.com/a/60726477/13562806
export const deportivoSchema = object({
  nombre: string().required("Nombre requerido"),
  calle: string().required("Calle requerida"),
  colonia: string().required("Colonia requerida"),
  codigoPostal: string().required("Código postal requerido"),
  numeroExterior: string().required("Número exterior requerido"),
  numeroInterior: string(),
  municipioId: number().transform(transformNaN).required("Municipio requerido"),
});
