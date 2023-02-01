const endpoint = "/tiposDeEvento";

const tiposDeEvento = {
  endpoint,
  name: "Tipos de evento deportivo",
  description:
    "Tipos de evento deportivo. Por ejemplo, torneo o liga. Solo un administrador del sistema podrá gestionar esta información.",
  methods: {
    POST: "Crear un tipo de evento deportivo",
  },
};

module.exports = {
  tiposDeEvento,
};
