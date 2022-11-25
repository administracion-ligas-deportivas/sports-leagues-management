import { number, object, string } from "yup";

// https://github.com/jquense/yup/issues/971#issuecomment-675528093
const transformNaN = (value) => (isNaN(value) ? undefined : value);

export const domicilioUsuarioSchema = object({
  calle: string().required("Calle requerida"),
  colonia: string().required("Colonia requerida"),
  codigoPostal: string().required("Código postal requerido"),
  numeroExterior: string().required("Número exterior requerido"),
  numeroInterior: string(),
  estadoId: number().transform(transformNaN).required("Estado requerido"),
  municipioId: number().transform(transformNaN).required("Municipio requerido"),
});
