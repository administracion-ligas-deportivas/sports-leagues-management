const { ROLES } = require("#src/constants/roles.js");
const { GERARDO_MARTINO } = require("#src/mocks/users.js");
const { usuariosService } = require("#src/services/index.js");

describe("El usuario tiene los roles", () => {
  it("El usuario tiene el rol USUARIO", () => {
    const roles = [ROLES.USUARIO];
    expect(usuariosService.userHasRoles(GERARDO_MARTINO, roles)).toBe(true);
  });

  it("El usuario NO tiene el rol ADMIN", () => {
    const roles = [ROLES.ADMIN];
    expect(usuariosService.userHasRoles(GERARDO_MARTINO, roles)).toBe(false);
  });

  it("El usuario tiene el rol USUARIO o ADMIN", () => {
    const roles = [ROLES.USUARIO, ROLES.ADMIN];

    expect(usuariosService.userHasRoles(GERARDO_MARTINO, roles)).toBe(true);
  });

  it("El usuario no tiene el rol ORGANIZADOR ni ADMIN", () => {
    const roles = [ROLES.ORGANIZADOR, ROLES.ADMIN];

    expect(usuariosService.userHasRoles(GERARDO_MARTINO, roles)).toBe(false);
  });
});
