const { equiposService } = require("#src/services/index.js");

const { ARGENTINA, MEXICO } = require("#src/mocks/equipos.js");

describe("Restricciones para crear partidos", () => {
  it("El equipo local y visitante son el mismo", () => {
    expect(equiposService.areEquiposTheSame(ARGENTINA, ARGENTINA)).toBe(true);
  });

  it("El equipo local y visitante son diferentes", () => {
    expect(equiposService.areEquiposTheSame(ARGENTINA, MEXICO)).toBe(false);
  });
});
