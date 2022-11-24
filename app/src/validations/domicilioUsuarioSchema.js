import { number, object, string } from "yup";

export const domicilioUsuarioSchema = object({
  calle: string().required("Calle requerida"),
  colonia: string().required("Colonia requerida"),
  codigoPostal: string().required("Código postal requerido"),
  numeroExterior: string().required("Número exterior requerido"),
  numeroInterior: string(),
  estadoId: number().required("Estado requerido"),
  municipioId: number().required("Municipio requerido"),
});
