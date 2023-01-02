const MUNDIAL_2022 = {
  id: 1,
  nombre: "Mundial de futbol 2022",
  fechaInicio: "2022-11-20T00:00:00.000Z",
  fechaFinalizacion: null,
  descripcionPagos: null,
  uuid: "693ef8b9-7151-447a-8631-c88efc686e03",
  createdAt: "2022-10-11T07:09:29.000Z",
  updatedAt: "2022-12-27T19:44:45.000Z",
  deletedAt: null,
  deporteId: null,
  numberOfPartidos: 35,
  formatoEventoDeportivo: {
    id: 1,
    nombre: "Mundial",
    descripcion: "Mundiales de fútbol, celebrados cada 4 años.",
    maximoEquipos: 32,
    createdAt: "2022-03-17T20:13:20.000Z",
    updatedAt: "2022-12-27T19:44:45.000Z",
    deletedAt: null,
    organizadorId: 8,
    deporte: {
      id: 1,
      nombre: "Fútbol",
      descripcion:
        "Deporte que se practica entre dos equipos de once jugadores que tratan de introducir un balón en la portería del contrario impulsándolo con los pies, la cabeza o cualquier parte del cuerpo excepto las manos y los brazos; en cada equipo hay un portero, que puede tocar el balón con las manos, aunque solamente dentro del área; vence el equipo que logra más goles durante los 90 minutos que dura el encuentro.",
      createdAt: "2022-07-08T15:19:39.000Z",
      updatedAt: "2022-12-27T19:44:45.000Z",
      deletedAt: null,
    },
    tipoEventoDeportivo: {
      id: 1,
      nombre: "Liga",
      descripcion:
        "El sistema de todos contra todos o sistema de liga es un sistema de torneos de competición, generalmente deportiva, en que cada participante o equipo del torneo se enfrenta contra todos los demás en eventos o juegos que involucran una competencia de pares, es decir un equipo contra otro equipo, y en un número constante de oportunidades (habitualmente una o dos). Este tipo de competición es también llamado liguilla o round-robin. Un torneo de todos contra todos puede adoptar un nombre particular según la cantidad de participantes —como triangular, cuadrangular, pentagonal, hexagonal, etc.— Este sistema se diferencia del torneo de eliminación, donde el perdedor no participa más y el ganador pasa a una siguiente fase; en el sistema de liga el perdedor sigue participando hasta jugar contra cada uno de los competidores.",
      createdAt: "2022-04-02T20:06:06.000Z",
      updatedAt: "2022-12-27T19:44:45.000Z",
      deletedAt: null,
    },
  },
  organizador: {
    id: 8,
    genero: "hombre",
    nombre: "Dulce María",
    apellido: "Alva",
    fechaNacimiento: "1958-07-22",
    correo: "Laura13@corpfolder.com",
    telefono: "8096937795",
    createdAt: "2022-11-08T20:29:54.000Z",
    updatedAt: "2022-12-27T19:44:45.000Z",
    deletedAt: null,
    rolId: 2,
  },
  organizadorId: 8,
};

module.exports = {
  MUNDIAL_2022,
};
