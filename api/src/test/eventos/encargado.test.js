const { MEXICO } = require("#src/mocks/equipos.js");
const { GERARDO_MARTINO } = require("#src/mocks/users.js");
const { equiposService } = require("#src/services/index.js");
// const { describe, expect, it } = require("jest");

const { isUsuarioEncargadoEquipo } = equiposService;

describe("Encargado de un equipo", () => {
  it("El usuario sí es encargado", () => {
    const isEncargado = isUsuarioEncargadoEquipo(GERARDO_MARTINO.id, MEXICO);

    expect(isEncargado).toBe(true);
  });

  it("El usuario no es encargado", () => {
    const isEncargado = isUsuarioEncargadoEquipo(1, MEXICO);

    expect(isEncargado).toBe(false);
  });
});

// describe("isEquipoInEvento", () => {
//   it("should return true if equipo is in evento", async () => {
//     const isEquipoInEvento = await equiposService.isEquipoInEvento(
//       MEXICO.id,
//       1
//     );
//
//     expect(isEquipoInEvento).toBe(true);
//   });
//
//   it("should return false if equipo is not in evento", async () => {
//     const isEquipoInEvento = await equiposService.isEquipoInEvento(
//       MEXICO.id,
//       2
//     );
//
//     expect(isEquipoInEvento).toBe(false);
//   });
// });
