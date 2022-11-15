import { object, string } from "yup";

export const registerSchema = object({
  nombre: string().required("Nombre requerido"),
  apellido: string().required("Apellido requerido"),
  correo: string().email().required("Correo requerido"),
  telefono: string()
    .length(10, "Ingresa teléfono de 10 dígitos")
    .required("Teléfono requerido"),
  password: string()
    .min(8, "Ingresa al menos 8 caracteres")
    .required("Contraseña requerida"),
  confirmPassword: string().required("Confirma tu contraseña"),
  // No es buena idea esa validación porque no muestra error cuando las
  // contraseñas coinciden, indicando que es así.
  // confirmPassword:
  // string().test( "confirm-password", "Las contraseñas no coinciden", (value,
  // context) => { return value === context.parent.password;
  //   }
  // ),
});
