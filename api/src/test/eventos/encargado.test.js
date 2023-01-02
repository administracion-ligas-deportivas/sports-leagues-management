const { equiposService } = require("#src/services/index.js");
// const { describe, expect, it } = require("jest");

const { isUsuarioEncargadoEquipo } = equiposService;


const EQUIPO = {
  id: 1,
  nombre: "México",
  uuid: "3e0093b2-f281-4a49-924a-34949ad6a431",
  createdAt: "2022-05-29T14:57:53.000Z",
  updatedAt: "2022-12-27T19:44:45.000Z",
  deletedAt: null,
  encargadoEquipoId: 55,
  deporteId: 1,
  numberOfJugadores: 14,
};

const USER = {
  id: 55,
};


describe("Encargado de un equipo", () => {
  it("El usuario sí es encargado", () => {
    const isEncargado = isUsuarioEncargadoEquipo(USER.id, EQUIPO);

    expect(isEncargado).toBe(true);
  });

  it("El usuario no es encargado", () => {
    const isEncargado = isUsuarioEncargadoEquipo(1, EQUIPO);

    expect(isEncargado).toBe(false);
  });
});

// describe("isEquipoInEvento", () => {
//   it("should return true if equipo is in evento", async () => {
//     const isEquipoInEvento = await equiposService.isEquipoInEvento(
//       EQUIPO.id,
//       1
//     );
//
//     expect(isEquipoInEvento).toBe(true);
//   });
//
//   it("should return false if equipo is not in evento", async () => {
//     const isEquipoInEvento = await equiposService.isEquipoInEvento(
//       EQUIPO.id,
//       2
//     );
//
//     expect(isEquipoInEvento).toBe(false);
//   });
// });
