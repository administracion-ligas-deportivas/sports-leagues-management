const REGISTER_FORM_FIELDS = {
  text: [
    {
      id: "nombre",
      name: "nombre",
      label: "Nombre(s)",
    },
    { id: "apellido", name: "apellido", label: "Apellido(s)" },
    {
      id: "telefono",
      type: "tel",
      name: "telefono",
      label: "Teléfono",
    },
  ],
  password: [
    {
      id: "correo",
      name: "correo",
      label: "Correo",
    },
    {
      id: "password",
      type: "password",
      name: "password",
      label: "Contraseña",
    },
    {
      id: "confirmPassword",
      type: "password",
      name: "confirmPassword",
      label: "Confirmar contraseña",
    },
  ],
  address: {
    estado: {
      id: "estadoId",
      label: "Selecciona un estado"
    },
    municipio: {
      id: "municipioId",
      label: "Selecciona un municipio"
    },
    calle: {
      id: "calle",
      type: "text",
      name: "calle",
      label: "Calle",
    },
    numeroExterior: {
      id: "numero-exterior",
      type: "text",
      name: "numeroExterior",
      label: "Número Exterior",
    },
    numeroInterior: {
      id: "numero-interior",
      type: "text",
      name: "numeroInterior",
      label: "Número Interior",
    },
    colonia: {
      id: "colonia",
      type: "text",
      name: "colonia",
      label: "Colonia",
    },
    codigoPostal: {
      id: "codigo-postal",
      type: "text",
      name: "codigoPostal",
      label: "Código Postal",
    },
  },
};

const REGISTER_ADDRESS = {
  numbers: [
    REGISTER_FORM_FIELDS.address.numeroExterior,
    REGISTER_FORM_FIELDS.address.numeroInterior,
  ],
  details: [
    REGISTER_FORM_FIELDS.address.colonia,
    REGISTER_FORM_FIELDS.address.codigoPostal,
  ]
};

export { REGISTER_FORM_FIELDS, REGISTER_ADDRESS };
