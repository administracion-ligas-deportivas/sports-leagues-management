import { GENEROS } from "@/constants/usuario";
import { date, mixed, object, string } from "yup";
import { domicilioUsuarioSchema } from "./domicilioUsuarioSchema";

// https://stackoverflow.com/a/60726477/13562806
export const registerSchema = object({
  nombre: string().required("Nombre requerido"),
  apellido: string().required("Apellido requerido"),
  correo: string()
    .email("Ingresa un correo válido")
    .required("Correo requerido"),
  telefono: string()
    .length(10, "Ingresa teléfono de 10 dígitos")
    .required("Teléfono requerido"),
  password: string()
    .min(8, "Ingresa al menos 8 caracteres")
    .required("Contraseña requerida"),
  confirmPassword: string().required("Confirma tu contraseña"),
  genero: mixed()
    .oneOf(GENEROS, "Selecciona entre los valores disponibles")
    .required("Género requerido"),
  fechaNacimiento: date().required("Fecha de nacimiento requerida"),
  // No es buena idea esa validación porque no muestra error cuando las
  // contraseñas coinciden, indicando que es así.
  // confirmPassword:
  // string().test( "confirm-password", "Las contraseñas no coinciden", (value,
  // context) => { return value === context.parent.password;
  //   }
  // ),

  // https://github.com/jquense/yup/issues/232#issuecomment-515003121
}).shape(domicilioUsuarioSchema.fields);
