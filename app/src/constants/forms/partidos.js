const REGISTER_MATCH_FIELDS = {
  canchaId: {
    name: "canchaId",
    label: "Selecciona una cancha",
    required: true
  },
  estadisticoId: {
    name: "estadisticoId",
    label: "Selecciona un estadistico",
    required: true
  },
  fecha: {
    name: "fecha",
    label: "Fecha",
    required: true
  },
  hora: {
    name: "hora",
    label: "Hora",
  },
  notas: {
    name: "notas",
    label: "Notas",
    type: "textarea",
  },
  localId: {
    name: "localId",
    label: "Selecciona un equipo local",
    required: true
  },
  visitanteId: {
    name: "visitanteId",
    label: "Selecciona un equipo visitante",
    required: true
  },
};

export {
  REGISTER_MATCH_FIELDS,
};
