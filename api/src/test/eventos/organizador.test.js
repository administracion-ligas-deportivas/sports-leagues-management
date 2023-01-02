const { MUNDIAL_2022 } = require("#src/mocks/eventos.js");
const { eventosService } = require("#src/services");

const ORGANIZADOR = {
  id: 8,
};

describe("El usuario es organizador de un evento", () => {
  it("El usuario es organizador del evento", () => {
    expect(
      eventosService.isUsuarioOrganizadorEvento(ORGANIZADOR.id, MUNDIAL_2022)
    ).toBe(true);
  });

  it("El usuario no es organizador del evento", () => {
    expect(eventosService.isUsuarioOrganizadorEvento(1, MUNDIAL_2022)).toBe(
      false
    );
  });
});
