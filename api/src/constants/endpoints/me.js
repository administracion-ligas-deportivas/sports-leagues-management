const endpoint = "/me";

const me = {
  endpoint,
  description: "Sesión del usuario actual; quien haya iniciado sesión.",
  methods: {
    GET: "Validar y obtener los datos del usuario que tiene la sesión iniciada actualmente",
  },
};

module.exports = {
  me,
};
