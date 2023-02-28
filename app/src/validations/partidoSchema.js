import { date, number, object } from "yup";
import { transformNaN } from "@/utils";

// https://stackoverflow.com/a/60726477/13562806
export const registerPartidoSchema = object({
  canchaId: number().transform(transformNaN).required("Cancha requerida"),
  estadisticoId: number().transform(transformNaN).required("Estadistico requerido"),
  fecha: date().required("Fecha requerida"),
  // notas: string(),
  // duracionPartido: string(),
  // efectuado: bool().required("Indicar si el partido se llevó a cabo"),
  localId: number().transform(transformNaN).required("Equipo local requerido"),
  visitanteId: number().transform(transformNaN).required("Equipo visitante requerido"),
});

// {
//   "canchaId": 4,
//   "estadisticoId": 51,
//   "fecha": "2022-12-31",
//   "notas": "Partido regular",
//   "duracionPartido": "01:32:36",
//   "efectuado": true,
//   "equipos": {
//     "local": {
//       "id": 1,
//       "puntos": 3
//     },
//     "visitante": {
//       "id": 2,
//       "puntos": 1
//     }
//   }
// }
